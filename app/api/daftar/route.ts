import { NextRequest, NextResponse } from "next/server";

// ── Tipe ──────────────────────────────────────────────────────────────────────
interface CsAgent {
  id: number;
  nama_cs: string;
  nomor_hp: string;
  weight: number;
}

// ── Data CS ───────────────────────────────────────────────────────────────────
// Salin dari dummyContactCsData; di sini hanya butuh field yang relevan.
const csAgents: CsAgent[] = [
  { id: 1, nama_cs: "Kak Sari", nomor_hp: "6285712217876", weight: 1 },
  { id: 2, nama_cs: "Kak Asya", nomor_hp: "6281215523902", weight: 1 },
  { id: 3, nama_cs: "Kak Putri", nomor_hp: "6285724543040", weight: 1 },
  { id: 4, nama_cs: "Kak Nevita", nomor_hp: "6285815095359", weight: 3 },
];

// ── Bangun tabel slot berdasarkan weight ─────────────────────────────────────
// Contoh: weight [2,3,4,4] → slotMap = [0,0,1,1,1,2,2,2,2,3,3,3,3]
function buildSlotMap(agents: CsAgent[]): number[] {
  const map: number[] = [];
  agents.forEach((agent, idx) => {
    for (let i = 0; i < agent.weight; i++) map.push(idx);
  });
  return map;
}

const slotMap = buildSlotMap(csAgents);
const totalSlots = slotMap.length; // 13

// ── Counter in-memory ─────────────────────────────────────────────────────────
// Reset saat server restart. Ganti dengan Redis/DB untuk produksi multi-instance.
let globalCounter = 0;

// ── Pilih CS berikutnya ───────────────────────────────────────────────────────
function pickNextCs(): CsAgent {
  const agentIdx = slotMap[globalCounter % totalSlots];
  globalCounter++;
  return csAgents[agentIdx];
}

// ── Bangun pesan WA dari data form ────────────────────────────────────────────
function buildWaMessage(cs: CsAgent, body: Record<string, string>): string {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://bimbeljuaratka.com";

  // Hindari ZWJ sequence (misal: emoji keluarga) & bullet • karena sering
  // rusak jadi "?" setelah encodeURIComponent di link wa.me.
  // Gunakan teks polos + bold WA (*teks*) agar aman.
  return (
    `Halo ${cs.nama_cs}, saya ingin mendaftarkan anak saya ke Program TKA.\n\n` +
    `*[DATA SISWA]*\n` +
    `Nama Siswa    : ${body.namaLengkap || "-"}\n` +
    `Tgl Lahir     : ${body.tanggalLahir || "-"}\n` +
    `Jenis Kelamin : ${body.jenisKelamin || "-"}\n` +
    `Kelas         : ${body.kelas || "-"}\n` +
    `Asal Sekolah  : ${body.asalSekolah || "-"}\n\n` +
    `*[DATA ORANG TUA]*\n` +
    `Nama Ortu     : ${body.namaOrtu || "-"}\n` +
    `No. WA        : ${body.noHp || "-"}\n\n` +
    `*[PROGRAM YANG DIMINATI]*\n` +
    `Program       : ${body.programPilihan || "-"}\n` +
    `Jadwal        : ${body.jadwalPilihan || "-"}\n\n` +
    `${body.catatanTambahan ? `Catatan: ${body.catatanTambahan}\n\n` : ""}` +
    `Mohon informasinya lebih lanjut. Terima kasih!\n` +
    `${siteUrl}`
  );
}

// ── POST /api/daftar ──────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body: Record<string, string> = await req.json();

    // Validasi minimal
    const required = [
      "namaLengkap",
      "tanggalLahir",
      "jenisKelamin",
      "namaOrtu",
      "noHp",
      "kelas",
      "programPilihan",
      "jadwalPilihan",
    ];
    const missing = required.filter((f) => !body[f]);
    if (missing.length > 0) {
      return NextResponse.json(
        { error: "Field wajib belum lengkap", missing },
        { status: 400 },
      );
    }

    const cs = pickNextCs();
    const message = buildWaMessage(cs, body);
    const waUrl = `https://wa.me/${cs.nomor_hp}?text=${encodeURIComponent(message)}`;

    return NextResponse.json({
      success: true,
      cs: { id: cs.id, nama: cs.nama_cs },
      waUrl,
    });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// ── GET /api/daftar (debug — hapus di produksi) ───────────────────────────────
export async function GET() {
  return NextResponse.json({
    totalSlots,
    currentCounter: globalCounter,
    nextAgentIdx: slotMap[globalCounter % totalSlots],
    nextCs: csAgents[slotMap[globalCounter % totalSlots]]?.nama_cs,
    slotMap,
  });
}

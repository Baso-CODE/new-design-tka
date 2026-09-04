"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type FormData = {
  namaLengkap: string;
  tempatLahir: string;
  tanggalLahir: string;
  jenisKelamin: string;
  alamat: string;
  namaOrtu: string;
  noHp: string;
  email: string;
  asalSekolah: string;
  kelas: string;
  programPilihan: string;
  jadwalPilihan: string;
  catatanTambahan: string;
};

const initialForm: FormData = {
  namaLengkap: "",
  tempatLahir: "",
  tanggalLahir: "",
  jenisKelamin: "",
  alamat: "",
  namaOrtu: "",
  noHp: "",
  email: "",
  asalSekolah: "",
  kelas: "",
  programPilihan: "",
  jadwalPilihan: "",
  catatanTambahan: "",
};

const programOptions = [
  "TKA Reguler (2x Seminggu)",
  "TKA Intensif (4x Seminggu)",
  "TKA Weekend (Sabtu–Minggu)",
  "TKA Private (Jadwal Fleksibel)",
];

const kelasOptions = [
  "TK A / TK B",
  "Kelas 1 SD",
  "Kelas 2 SD",
  "Kelas 3 SD",
  "Kelas 4 SD",
  "Kelas 5 SD",
  "Kelas 6 SD",
];

const jadwalOptions = [
  "Pagi (07.00 – 09.00)",
  "Siang (10.00 – 12.00)",
  "Sore (14.00 – 16.00)",
  "Sore Akhir (16.00 – 18.00)",
];

export default function DaftarPage() {
  const router = useRouter();
  const [form, setForm] = useState<FormData>(initialForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/daftar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Terjadi kesalahan. Coba lagi.");
        return;
      }

      // Buka tab WA CS yang ditugaskan
      window.open(data.waUrl, "_blank");
      // Redirect ke halaman sukses
      router.push(
        `/daftar/sukses?nama=${encodeURIComponent(form.namaLengkap)}&cs=${encodeURIComponent(data.cs.nama)}`,
      );
    } catch {
      setError("Gagal terhubung ke server. Periksa koneksi internet kamu.");
    } finally {
      setLoading(false);
    }
  };

  const isComplete =
    form.namaLengkap &&
    form.tanggalLahir &&
    form.jenisKelamin &&
    form.namaOrtu &&
    form.noHp &&
    form.kelas &&
    form.programPilihan &&
    form.jadwalPilihan;

  return (
    <div className="min-h-screen bg-[#f0f7ff]">
      {/* ── HEADER ── */}
      <div className="bg-[#056fcb] pt-28 pb-14 px-4 text-center relative overflow-hidden">
        <div className="absolute -top-10 -left-10 w-48 h-48 bg-white/5 rounded-full" />
        <div className="absolute -bottom-16 -right-8 w-64 h-64 bg-white/5 rounded-full" />
        <span className="inline-block bg-[#FAAE17] text-white text-xs font-bold px-4 py-1 rounded-full mb-4 tracking-wide">
          Program TKA
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3 leading-tight">
          Formulir Pendaftaran
        </h1>
        <p className="text-blue-100 max-w-xl mx-auto text-sm md:text-base">
          Isi data di bawah dengan lengkap. Setelah submit, kamu akan langsung
          terhubung ke CS kami via WhatsApp.
        </p>
      </div>

      {/* ── FORM CARD ── */}
      <div className="max-w-2xl mx-auto px-4 mt-4 pb-20">
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10">
          <SectionTitle icon="👤" title="Data Siswa" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="md:col-span-2">
              <Field
                label="Nama Lengkap Siswa"
                name="namaLengkap"
                type="text"
                placeholder="Masukkan nama lengkap"
                value={form.namaLengkap}
                onChange={handleChange}
                required
              />
            </div>
            <Field
              label="Tempat Lahir"
              name="tempatLahir"
              type="text"
              placeholder="Contoh: Yogyakarta"
              value={form.tempatLahir}
              onChange={handleChange}
            />
            <Field
              label="Tanggal Lahir"
              name="tanggalLahir"
              type="date"
              value={form.tanggalLahir}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Jenis Kelamin <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-4">
              {["Laki-laki", "Perempuan"].map((jk) => (
                <label
                  key={jk}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full border-2 cursor-pointer transition-all duration-200 text-sm font-medium ${
                    form.jenisKelamin === jk
                      ? "border-[#056fcb] bg-[#056fcb] text-white"
                      : "border-gray-200 text-gray-600 hover:border-[#056fcb]"
                  }`}>
                  <input
                    type="radio"
                    name="jenisKelamin"
                    value={jk}
                    checked={form.jenisKelamin === jk}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  {jk === "Laki-laki" ? "👦" : "👧"} {jk}
                </label>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Alamat Rumah
            </label>
            <textarea
              name="alamat"
              rows={2}
              placeholder="Jl. Contoh No. 1, Kelurahan, Kecamatan, Kota"
              value={form.alamat}
              onChange={handleChange}
              className="w-full border-2 border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#056fcb] resize-none transition-colors"
            />
          </div>

          <Divider />

          <SectionTitle icon="👨‍👩‍👦" title="Data Orang Tua / Wali" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="md:col-span-2">
              <Field
                label="Nama Orang Tua / Wali"
                name="namaOrtu"
                type="text"
                placeholder="Nama lengkap orang tua/wali"
                value={form.namaOrtu}
                onChange={handleChange}
                required
              />
            </div>
            <Field
              label="No. WhatsApp Aktif"
              name="noHp"
              type="tel"
              placeholder="08xx-xxxx-xxxx"
              value={form.noHp}
              onChange={handleChange}
              required
            />
            <Field
              label="Email (opsional)"
              name="email"
              type="email"
              placeholder="contoh@email.com"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <Divider />

          <SectionTitle icon="📚" title="Informasi Program" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <Field
              label="Asal Sekolah"
              name="asalSekolah"
              type="text"
              placeholder="Nama sekolah saat ini"
              value={form.asalSekolah}
              onChange={handleChange}
            />
            <SelectField
              label="Kelas Saat Ini"
              name="kelas"
              options={kelasOptions}
              value={form.kelas}
              onChange={handleChange}
              required
            />
            <SelectField
              label="Program yang Dipilih"
              name="programPilihan"
              options={programOptions}
              value={form.programPilihan}
              onChange={handleChange}
              required
            />
            <SelectField
              label="Preferensi Jadwal"
              name="jadwalPilihan"
              options={jadwalOptions}
              value={form.jadwalPilihan}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Catatan Tambahan
            </label>
            <textarea
              name="catatanTambahan"
              rows={3}
              placeholder="Contoh: kebutuhan khusus siswa, pertanyaan, atau harapan dari program..."
              value={form.catatanTambahan}
              onChange={handleChange}
              className="w-full border-2 border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#056fcb] resize-none transition-colors"
            />
          </div>

          {error && (
            <div className="mb-4 bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3">
              ⚠️ {error}
            </div>
          )}

          <div className="mb-5 bg-green-50 border border-green-200 rounded-2xl px-4 py-3 flex items-start gap-3">
            <span className="text-xl mt-0.5">💬</span>
            <p className="text-sm text-green-700">
              Setelah submit, WhatsApp akan terbuka otomatis dengan pesan yang
              sudah terisi. Kamu akan dihubungkan ke CS kami yang bertugas.
            </p>
          </div>

          <button
            onClick={handleSubmit}
            disabled={!isComplete || loading}
            className={`w-full py-4 rounded-full font-bold text-base transition-all duration-300 ${
              isComplete && !loading
                ? "bg-[#056fcb] hover:bg-[#0460b0] text-white shadow-lg shadow-blue-200"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}>
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  />
                </svg>
                Memproses...
              </span>
            ) : (
              "Daftar & Hubungi CS via WhatsApp"
            )}
          </button>

          <p className="text-center text-xs text-gray-400 mt-4">
            Data kamu aman dan hanya digunakan untuk keperluan pendaftaran.
          </p>
        </div>
      </div>
    </div>
  );
}

function SectionTitle({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="flex items-center gap-2 mb-5">
      <span className="text-xl">{icon}</span>
      <h2 className="text-base font-bold text-[#056fcb]">{title}</h2>
    </div>
  );
}

function Divider() {
  return <hr className="border-gray-100 my-6" />;
}

function Field({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full border-2 border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#056fcb] transition-colors placeholder:text-gray-400"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  value,
  onChange,
  required,
}: {
  label: string;
  name: string;
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border-2 border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#056fcb] transition-colors bg-white appearance-none cursor-pointer">
        <option value="">-- Pilih --</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

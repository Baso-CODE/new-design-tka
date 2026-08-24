import Image from "next/image";

export default function GoldenTicketSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white px-4">
      <div className="mx-auto max-w-6xl">
        {/* Bagian 1: Header Utama */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-2xl lg:text-3xl font-extrabold text-[#033790] font-title leading-tight mb-4">
            Raih <span className="text-[#fac61f]">Golden Ticket</span> Masuk
            Sekolah & PTN Impianmu!
          </h2>
          <p className="text-slate-600 font-desc text-sm sm:text-base lg:text-base leading-relaxed">
            Di Edumatrix Indonesia, kami membimbing siswa-siswi SD, SMP, dan SMA
            untuk meraih skor maksimal dalam Tes Kompetensi Akademik (TKA) dan
            Tes Seleksi Masuk. Nilai ujian yang memuaskan adalah kunci utama
            untuk membuka pintu ke sekolah-sekolah unggulan dan PTN favorit.
          </p>
        </div>

        {/* Bagian 2: Konten Utama (Grid Desktop & Mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Kolom Gambar Golden Ticket Lanskap (Di Kiri pada Desktop) */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="relative w-full max-w-lg aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-900 border-2 border-[#fac61f]/30">
              <Image
                src="/images/ticket.webp"
                alt="Golden Ticket Edumatrix"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>

          {/* Kolom Penjelasan & Box Biru (Di Kanan pada Desktop) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-extrabold font-title text-[#033790] mb-3">
                Jalur Sukses Tembus{" "}
                <span className="text-[#fac61f]">Sekolah & PTN Favorit</span>
              </h3>
              <p className="text-slate-600 font-desc text-sm sm:text-base leading-relaxed">
                Setiap tahun, persaingan untuk masuk ke SMP dan SMA unggulan
                melalui jalur tes tertulis sangatlah ketat. Menguasai materi Tes
                Kemampuan Akademik dengan skor tinggi adalah &quot;Golden
                Ticket&quot; sesungguhnya untuk mengamankan bangku di sekolah
                impianmu. Edumatrix Indonesia hadir dengan pendampingan belajar
                yang tepat untuk mempersiapkan Anda menjadi yang terbaik di
                tahap seleksi.
              </p>
            </div>

            {/* Box Biru Berisi Poin-Poin Keunggulan */}
            <div
              className="rounded-3xl p-6 sm:p-8 text-white shadow-xl space-y-5"
              style={{
                background:
                  "linear-gradient(to bottom, #033b94 0%, #0572ce 100%)",
              }}>
              <div className="flex items-start gap-4">
                <span className="shrink-0 w-7 h-7 rounded-full bg-[#fac61f] text-[#033b94] flex items-center justify-center font-bold text-sm shadow-sm mt-0.5">
                  ✓
                </span>
                <p className="text-sm sm:text-base font-desc leading-relaxed">
                  <strong className="font-semibold">
                    Persiapan Intensif TKA Berbagai Jenjang:
                  </strong>{" "}
                  Latihan soal dan pembahasan khusus untuk siswa SD, SMP, dan
                  SMA.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <span className="shrink-0 w-7 h-7 rounded-full bg-[#fac61f] text-[#033b94] flex items-center justify-center font-bold text-sm shadow-sm mt-0.5">
                  ✓
                </span>
                <p className="text-sm sm:text-base font-desc leading-relaxed">
                  <strong className="font-semibold">
                    Peluang Lolos Seleksi Sekolah Unggulan:
                  </strong>{" "}
                  Persiapkan dirimu secara matang untuk menembus seleksi sekolah
                  favorit incaranmu.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <span className="shrink-0 w-7 h-7 rounded-full bg-[#fac61f] text-[#033b94] flex items-center justify-center font-bold text-sm shadow-sm mt-0.5">
                  ✓
                </span>
                <p className="text-sm sm:text-base font-desc leading-relaxed">
                  <strong className="font-semibold">
                    Kuasai Materi Ujian dengan Percaya Diri:
                  </strong>{" "}
                  Tingkatkan kemampuan bernalar, logika, dan pemecahan masalah
                  agar siap menghadapi soal tersulit sekalipun.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

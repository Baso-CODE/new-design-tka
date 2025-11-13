import { FaCheck } from "react-icons/fa";

const PaketBelajarOSN = () => {
  const waLinkPriority =
    "https://api.whatsapp.com/send?phone=6285724543040&text=Halo%20Kak%20Putri%20https://olimpiade.edumatrix-indonesia.com%20saya%20ingin%20Daftar%20Paket%20Priority%20Bimbel%20OSN.%20Bagaimana%20penjelasan%20detail%20programnya%3F";
  const waLinkDeluxe =
    "https://api.whatsapp.com/send?phone=6285724543040&text=Halo%20Kak%20Putri%20https://olimpiade.edumatrix-indonesia.com%20saya%20ingin%20Daftar%20Paket%20Deluxe%20Bimbel%20OSN.%20Bagaimana%20penjelasan%20detail%20programnya%3F";

  return (
    <div>
      <div className="flex container mx-auto items-center justify-center my-[5vh] py-[10vh] px-4 lg:px-0">
        <div className="max-w-[1240px] w-full">
          {/* Judul utama */}
          <h2 className="text-center font-title text-3xl md:text-3xl lg:text-4xl font-bold text-[#133b79] mb-4">
            Paket Bimbingan Hingga Jadi Juara
          </h2>
          {/* Deskripsi */}
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-base md:text-lg text-gray-600">
              Pilih program terbaik sesuai kebutuhanmu. Mulai dari bimbingan
              intensif hingga tryout rutin - semua dirancang untuk bantu kamu
              Menjadi Juara OSN baik tingkat SD, SMP & SMA.
            </p>
          </div>

          {/* Box Paket (Grid untuk responsif) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* PAKET PRIORITY */}
            <div
              data-aos="fade-right"
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col"
            >
              <div
                data-aos="fade-right"
                className="bg-[#00317e] text-white rounded-t-xl -mx-6 -mt-6 px-6 py-8 mb-6"
              >
                <h2 className="text-2xl md:text-3xl font-extrabold text-center leading-tight font-title">
                  PAKET PRIORITY
                </h2>
              </div>
              <ul data-aos="fade-right" className="space-y-4 grow font-desc">
                {[
                  "Program pendampingan belajar 1 guru 1 Siswa",
                  "Jadwal belajar fleksibel",
                  "Durasi belajar 120 menit",
                  "Materi lengkap",
                  "Kecocokan belajar antara tutor & siswa",
                  "Progress report bulanan",
                  "Free assessment (Pre Test dan Post Test)",
                  "E-book soal & e-book pembahasan",
                  "Recording pembelajaran yang bisa diakses unlimited",
                ].map((item, i) => (
                  <li
                    className="flex items-start text-gray-700 text-base"
                    key={i}
                  >
                    <FaCheck className="text-green-500 mr-3 mt-1 shrink-0" />{" "}
                    {/* Ikon check */}
                    {item}
                  </li>
                ))}
              </ul>
              {/* Tombol Tanya Kelas untuk Paket Priority */}
              <a
                data-aos="fade-right"
                href={waLinkPriority}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 group relative inline-flex h-14 items-center justify-center rounded-full bg-[#faae17] py-1 pl-14 pr-6 font-medium text-neutral-50 transition-all duration-300"
              >
                <div className="absolute right-1 inline-flex h-12 w-12 items-center justify-start rounded-full bg-[#04397d] transition-[width] group-hover:w-[calc(100%-8px)]">
                  <div className="ml-3.5 flex items-center justify-center rotate-180">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-neutral-50"
                    >
                      <path
                        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span className="z-10 ">
                  <span className="mr-2">💬</span>Tanya Kelas
                </span>
              </a>
            </div>

            {/* PAKET DELUXE */}
            <div
              data-aos="fade-left"
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col"
            >
              <div
                className="bg-[#00317e] text-white rounded-t-xl -mx-6 -mt-6 px-6 py-8 mb-6"
                data-aos="fade-left"
              >
                <h2 className="text-2xl md:text-3xl font-extrabold text-center leading-tight font-title">
                  PAKET DELUXE
                </h2>
              </div>
              <ul className="space-y-4 grow" data-aos="fade-left">
                {[
                  "Program pendampingan belajar 1 guru 1 Siswa",
                  "Jadwal belajar fleksibel",
                  "Durasi belajar 90 menit",
                  "Materi lengkap",
                  "Kecocokan belajar antara tutor & siswa",
                  "Progress report bulanan",
                  "Free assessment (Pre Test dan Post Test)",
                  "E-book soal & e-book pembahasan",
                  "Recording pembelajaran yang bisa diakses unlimited",
                ].map((item, i) => (
                  <li
                    className="flex items-start text-gray-700 text-base"
                    key={i}
                  >
                    <FaCheck className="text-green-500 mr-3 mt-1 shrink-0" />{" "}
                    {item}
                  </li>
                ))}
              </ul>

              <a
                data-aos="fade-left"
                href={waLinkDeluxe}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 group relative inline-flex h-14 items-center justify-center rounded-full bg-[#faae17] py-1 pl-6 pr-14 font-medium text-neutral-50 transition-all duration-300"
              >
                <span className="z-10 pr-2">
                  <span className="mr-2">💬</span>Tanya Kelas
                </span>
                <div className="absolute left-1 inline-flex h-12 w-12 items-center justify-end rounded-full bg-[#04397d] transition-[width] group-hover:w-[calc(100%-8px)]">
                  <div className="mr-3.5 flex items-center justify-center">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-neutral-50"
                    >
                      <path
                        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaketBelajarOSN;

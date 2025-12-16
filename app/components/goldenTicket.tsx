import Image from "next/image";

const GoldenTicketShowcase = () => {
  return (
    <section
      id="golden-ticket-showcase"
      className="py-16 bg-linear-to-br from-[#ffffff] to-[#f3f3f3] relative"
    >
      <div className="max-w-[1240px] mx-auto text-center min-h-screen lg:min-h-240 xl:min-h-screen px-4">
        <h2 className="text-4xl font-extrabold text-[#04397d] mb-4 drop-shadow-sm font-title">
          Raih <span className="text-[#faae17]">Golden Ticket</span> Masuk
          Sekolah Impianmu!
        </h2>

        <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto font-desc leading-normal px-4">
          Di Edumatrix Indonesia, kami membimbing siswa-siswa untuk meraih
          prestasi gemilang di Olimpiade Sains Nasional (OSN). Kemenangan di OSN
          seringkali membuka pintu emas ke sekolah-sekolah favorit.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 bg-white p-4 rounded-3xl shadow-xl border border-blue-200 w-fit mx-auto">
          {/* Left Image */}
          <div className="md:w-1/2">
            <Image
              src="/images/golden-ticket.jpeg"
              alt="Golden Ticket untuk Pemenang OSN"
              width={1000}
              height={1000}
              loading="lazy"
              className="rounded-2xl shadow-2xl border-4 border-yellow-400 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>

          {/* Right Text */}
          <div className="md:w-1/2 text-left">
            <h3 className="text-3xl font-bold text-[#04397d] mb-4 font-title">
              Jalur Istimewa untuk Juara OSN
            </h3>

            <p className="text-gray-800 text-lg leading-relaxed mb-6 font-desc">
              Setiap tahun, banyak siswa berprestasi di Olimpiade Sains Nasional
              (OSN) mendapatkan jalur khusus atau &quot;Golden Ticket&quot;
              untuk masuk ke sekolah-sekolah unggulan favorit mereka. Edumatrix
              Indonesia hadir untuk mempersiapkan Anda menjadi salah satu dari
              mereka.
            </p>

            <ul className="text-gray-700 text-base space-y-3 list-disc list-inside">
              <li className="flex items-start">
                <span className="w-5 h-5 text-[#faae17] mr-2">✔</span>
                Persiapan Intensif untuk Raih Medali OSN.
              </li>

              <li className="flex items-start">
                <span className="w-5 h-5 text-[#faae17] mr-2">✔</span>
                Peluang Masuk Sekolah Unggulan Tanpa Tes.
              </li>

              <li className="flex items-start">
                <span className="w-5 h-5 text-[#faae17] mr-2">✔</span>
                Tingkatkan Kepercayaan Diri dan Reputasi Akademikmu.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute -bottom-px xl:-bottom-2.5 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#04397d"
            fillOpacity="1"
            d="M0,160L34.3,186.7C68.6,213,137,267,206,266.7C274.3,267,343,213,411,186.7C480,160,549,160,617,170.7C685.7,181,754,203,823,218.7C891.4,235,960,245,1029,224C1097.1,203,1166,149,1234,138.7C1302.9,128,1371,160,1406,176L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default GoldenTicketShowcase;

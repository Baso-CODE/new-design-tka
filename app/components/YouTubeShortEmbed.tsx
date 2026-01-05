const YouTubeShortEmbed = () => {
  const videoId = "Pi0jI_mvQRw";
  // Judul dan deskripsi disamakan dengan konten agar relevan
  const videoTitle = "Strategi Jitu Lolos OSN | Edumatrix Indonesia";
  const videoDescription =
    "Edumatrix Indonesia hadir dengan bimbingan les privat terbaik untuk Olimpiade Sains Nasional (OSN). Kami membimbing Anda dengan strategi jitu dan pengajar ahli untuk meraih medali emas impian Anda!";
  const videoUploadDate = "2025-07-23T08:00:00+07:00";

  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=0&controls=1&modestbranding=1&rel=0&showinfo=0`;
  const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  // JSON-LD Schema untuk Google SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: videoTitle,
    description: videoDescription,
    thumbnailUrl: [thumbnailUrl],
    uploadDate: videoUploadDate,
    embedUrl: embedUrl,
    contentUrl: watchUrl,
    publisher: {
      "@type": "Organization",
      name: "Edumatrix Indonesia",
      logo: {
        "@type": "ImageObject",
        url: "https://bimbeledumatrix.com/images/logo.webp",
      },
    },
  };

  return (
    <section className="relative py-16 bg-[#04397d] overflow-hidden min-h-screen">
      {/* Inject JSON-LD Schema disini. 
        Ini tidak akan tampil di layar user, tapi akan dibaca oleh Google Bot.
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className=" max-w-310 mx-auto px-4 md:px-0 mb-32 ">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative flex justify-center items-center mb-12 lg:mb-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
              <div className="bg-orange-200 rounded-lg w-72 h-[350px] sm:w-80 sm:h-[400px] lg:w-96 lg:h-[450px] transform -rotate-6 opacity-70"></div>
              <div className="absolute bg-orange-300 rounded-lg w-72 h-[350px] sm:w-80 sm:h-[400px] lg:w-104 lg:h-[600px] transform rotate-3 opacity-60"></div>
            </div>

            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm rounded-lg overflow-hidden shadow-2xl z-10">
              <div className="relative w-full pt-[177.77%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={embedUrl}
                  title={videoTitle}
                  // Menambahkan atribut meta dasar pada iframe
                  name={videoTitle}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"></iframe>
              </div>
            </div>
          </div>

          <div className="text-start">
            <p className="text-sm font-semibold font-title text-[#ffffff] uppercase tracking-wide mb-2">
              Rahasia Juara Olimpiade Sains
            </p>
            {/* Gunakan H1 jika ini adalah judul utama halaman, jika bagian dari section lain gunakan H2 */}
            <h2 className="text-3xl font-extrabold text-[#ffffff] sm:text-4x font-titlel">
              Raih Prestasi Gemilang di OSN <br className="hidden sm:inline" />{" "}
              Bersama Edumatrix!
            </h2>
            <p className="mt-4 text-lg  text-gray-200 font-desc">
              {videoDescription}
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-100 font-desc">
              {/* Feature List Items - Tetap sama */}
              <div className="flex items-start">
                <svg
                  className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Pengajar Berpengalaman & Peraih Medali OSN</span>
              </div>
              <div className="flex items-start">
                <svg
                  className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Materi Komprehensif Sesuai Silabus Terbaru</span>
              </div>
              <div className="flex items-start">
                <svg
                  className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Simulasi Ujian & Pembahasan Mendalam</span>
              </div>
              <div className="flex items-start">
                <svg
                  className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Mentoring & Evaluasi Belajar Personal</span>
              </div>
            </div>

            {/* Tombol Aksi */}
            <div className="mt-8">
              <a
                href="/contact"
                className="relative inline-flex items-center justify-start px-6 py-3 w-full md:w-[60%] lg:w-[70%] xl:w-[50%]  overflow-hidden font-medium transition-all bg-blue-600 rounded-xl group">
                <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#faae17] rounded group-hover:-mr-4 group-hover:-mt-4">
                  <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                </span>
                <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-[#faae17] rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                  Daftar Sekarang untuk OSN{" "}
                  <span className="ml-2 text-xl">&rarr;</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-px xl:bottom-[-50px] left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#FFFFFF"
            fillOpacity="1"
            d="M0,224L24,229.3C48,235,96,245,144,234.7C192,224,240,192,288,186.7C336,181,384,203,432,224C480,245,528,267,576,272C624,277,672,267,720,245.3C768,224,816,192,864,186.7C912,181,960,203,1008,208C1056,213,1104,203,1152,186.7C1200,171,1248,149,1296,154.7C1344,160,1392,192,1416,208L1440,224L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default YouTubeShortEmbed;

"use client";

import Link from "next/link";

const YouTubeShortEmbed = () => {
  // Mengambil konfigurasi dari env
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://bimbeljuaratka.com";
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Edumatrix Indonesia";

  // ID Video dari URL: https://youtube.com/shorts/Nv6gd0yQ3_s
  const videoId = "Nv6gd0yQ3_s";
  const videoTitle = "Apa itu TKA, Wajib kah? | Edumatrix Indonesia";
  const videoDescription =
    "Masih bingung apa itu TKA dan seberapa penting untuk masa depan pendidikanmu? Edumatrix Indonesia menjelaskan strategi dan pemahaman mendalam mengenai TKA agar Anda siap menghadapi tantangan akademik!";
  const videoUploadDate = "2026-08-18T08:00:00+07:00";

  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=0&controls=1&modestbranding=1&rel=0`;
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
      name: siteName,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/images/logo.webp`,
      },
    },
  };
  return (
    <section className="relative py-16 bg-[#04397d] overflow-hidden min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-310 mx-auto px-4 md:px-0 mb-36">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative flex justify-center items-center mb-12 lg:mb-5">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
              <div className="bg-orange-200 rounded-lg w-72 h-87.5 sm:w-80 sm:h-100 lg:w-96 lg:h-112.5 transform -rotate-6 opacity-70"></div>
              <div className="absolute bg-orange-300 rounded-lg w-72 h-87.5 sm:w-80 sm:h-100 lg:w-104 transform rotate-3 opacity-60"></div>
            </div>

            {/* Container untuk Shorts (Ratio 9:16) */}
            <div className="relative w-full max-w-[320px] rounded-lg overflow-hidden shadow-2xl z-10">
              <div className="relative w-full pt-[177.77%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={embedUrl}
                  title={videoTitle}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>
          </div>

          <div className="text-start">
            <p className="text-sm font-semibold font-title text-[#ffffff] uppercase tracking-wide mb-2">
              Pahami Pentingnya TKA
            </p>
            <h2 className="text-3xl font-extrabold text-[#ffffff] sm:text-4xl font-title">
              Apa Itu TKA dan Mengapa <br className="hidden sm:inline" /> Wajib
              Dipersiapkan?
            </h2>
            <p className="mt-4 text-base text-gray-200 font-desc">
              {videoDescription}
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-100 font-desc">
              <div className="flex items-start">
                <span className="text-green-500 mr-1">✓</span>
                <span>Penjelasan Mendalam Konsep TKA</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-1">✓</span>
                <span>Strategi Belajar Efektif TKA</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-1">✓</span>
                <span>Analisis Kebutuhan Akademik</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-1">✓</span>
                <span>Bimbingan Ahli Edumatrix</span>
              </div>
            </div>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-between px-5 py-3 w-full md:w-[60%] lg:w-[70%] xl:w-[60%] font-bold text-white uppercase text-base sm:text-lg rounded-[10px] border-2 border-[#fafafa] bg-orange-500 shadow-[3px_3px_#fafafa] active:shadow-none active:translate-x-[3px] active:translate-y-[3px] transition-none cursor-pointer">
                <span>Konsultasi TKA Sekarang</span>
                <span className="text-xl ml-2 text-center">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-px xl:-bottom-2.5 left-0 w-full">
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

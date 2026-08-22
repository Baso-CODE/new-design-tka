import Image from "next/image";

const HeroAbout = () => {
  return (
    <section className="relative bg-[#04397D] flex items-center justify-center">
      <div className="py-24 px-2 mt-16 text-white max-w-310 min-h-screen  lg:min-h-[60vh]">
        <div className="flex flex-col lg:flex-row gap-0">
          <div className="lg:w-[35%] mt-12.5 flex flex-col justify-center">
            <h1 className="text-[64px] font-bold leading-10 font-title mb-6 text-[#faae17]">
              About Us
            </h1>

            <p className="mb-2 font-desc text-[16px] leading-5 font-medium opacity-90">
              EDUMATRIX Indonesia adalah lembaga bimbingan belajar untuk
              Persiapan Masuk Kedokteran, PTN, dan Kedinasan. Kami menawarkan
              berbagai program unggulan yang dirancang untuk mempersiapkan siswa
              menghadapi ujian dan seleksi dengan percaya diri.
            </p>
            <br />
            <p className="mb-8 font-desc text-[16px] leading-5 font-medium opacity-90">
              Program ini menjadi solusi terbaik untuk siswa agar sukses masuk
              UI, ITB, UGM, IPB, Unpad, dan Perguruan Tinggi Negeri Favorit
              serta Sekolah Tinggi Kedinasan.
              <br /> Dengan pengalaman bertahun-tahun dan tim pengajar yang
              berkompeten, kami berkomitmen untuk memberikan pendidikan
              berkualitas dan mendukung siswa mencapai tujuan akademis mereka.{" "}
              <br />
              Bergabunglah dengan kami dan raih kesuksesan di masa depan!
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center items-center relative">
            <Image
              src="/images/hero-aboutus.webp"
              alt="Lembaga bimbingan belajar unggulan untuk persiapan masuk PTN, Kedokteran, dan Kedinasan dengan pendekatan terbaik"
              className="w-full h-auto object-cover"
              width={1000}
              height={1000}
              loading="lazy"
            />
            <div className="absolute -bottom-px left-0 right-0 h-25 bg-linear-to-t from-[#04397D] to-transparent"></div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-px xl:-bottom-7.5 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,224L40,218.7C80,213,160,203,240,208C320,213,400,235,480,245.3C560,256,640,256,720,240C800,224,880,192,960,197.3C1040,203,1120,245,1200,234.7C1280,224,1360,160,1400,128L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroAbout;

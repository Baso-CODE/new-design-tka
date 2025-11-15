import Image from "next/image";
import { FaBriefcase } from "react-icons/fa";

const Features = () => {
  return (
    <div className=" md:pt-[68px] md:pb-[68px] pt-7 pb-7 mx-auto px-2 max-w-[1240px] ">
      <div className=" mt-8 grid grid-cols-1 xl:grid-cols-2 items-center gap-12 w-full mx-auto">
        <div data-aos="fade-right">
          <Image
            src={"/images/pengalaman-belajar-premium.webp"}
            alt="Ilustrasi fitur bimbingan belajar premium, menawarkan kursus online dan offline dengan pendekatan pembelajaran interaktif dan dukungan pengajaran profesional."
            width="835"
            height="710"
          />
        </div>

        {/* text content */}
        <div>
          {/* subheading */}
          <div className=" flex items-center space-x-4" data-aos="fade-down">
            <div className=" w-12 h-12 bg-[#F68507] rounded-full flex items-center justify-center flex-col">
              <FaBriefcase className=" h-6 w-6 text-white" />
            </div>
            <h2 className=" text-xl  font-semibold font-title text-gray-800">
              Pengalaman belajar premium
            </h2>
          </div>
          {/* main heading */}
          <h3
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-title mt-8 font-bold md:leading-8 lg:leading-12 xl:leading-12 text-[#00317e]"
            data-aos="fade-left"
          >
            Belajar Jadi Lebih Mudah, Baik Online Maupun Tatap Muka
          </h3>

          <div className="mt-8 mb-6" data-aos="fade-up">
            <h2 className="text-lg md:text-2xl text-[#374151]  font-semibold font-title">
              Kelebihan Cara Belajar di Edumatrix
            </h2>
            <p className="text-sm md:text-base text-[#374151]  mt-2 font-desc">
              Di Edumatrix Indonesia, kami tahu setiap orang punya cara belajar
              yang berbeda. Karena itu, kami menghadirkan kelas online dan
              offline dengan pendekatan yang fleksibel, interaktif, dan bisa
              disesuaikan dengan kebutuhan kamu. Mau belajar lewat sesi langsung
              bareng pengajar atau akses materi kapan aja lewat platform digital
              — semuanya bisa. Tujuannya satu: biar kamu bisa belajar lebih
              cepat, paham lebih dalam, dan hasilnya benar-benar terasa.
            </p>
          </div>

          <div className="mt-8 mb-6" data-aos="fade-right">
            <h2 className="text-lg md:text-2xl text-[#374151]  font-semibold font-title">
              Pengajar Berpengalaman dan Siap Bantu Kamu Sukses
            </h2>
            <p className="text-sm md:text-base text-[#374151]  mt-2 font-desc">
              Belajar bareng pengajar profesional yang sudah terbukti membantu
              banyak siswa mencapai prestasi akademik terbaik. Mereka bukan cuma
              mengajar, tapi juga jadi mentor yang ngerti ritme belajar kamu.
              Dengan dukungan penuh dan bimbingan yang sabar, kami pastikan kamu
              bisa menguasai materi pelajaran dengan percaya diri— baik untuk
              ujian sekolah, OSN, atau seleksi masuk universitas impianmu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

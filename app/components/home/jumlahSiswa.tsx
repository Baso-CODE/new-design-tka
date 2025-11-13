"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const JumlahSiswa = () => {
  const masterTeacherPercent: string[] = ["80%", "82%", "83%", "85%", "86%"];
  const masterTeacherNumbers: string[] = [
    "212",
    "2,687",
    "3,532",
    "4,732",
    "5,575",
  ];
  const siswaEdumatrix: string[] = ["565", "2,326", "4,624", "6,563", "7,547"];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    if (currentIndex < siswaEdumatrix.length - 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, siswaEdumatrix.length]);

  return (
    <section className="items-center justify-center flex">
      <div className="max-w-[1240px]">
        <div className="bg-white lg:h-[555px] h-auto w-full py-12 px-2 lg:px-2">
          <div className="flex flex-col lg:flex-row gap-[30px] -mt-10 relative">
            {/* Left Side - Image */}
            <div
              className="lg:w-1/2 flex justify-center items-center mt-[-50px] lg:mt-[-90px] relative"
              data-aos="fade-up-right"
            >
              <Image
                width={1000}
                height={1000}
                loading="eager"
                src="/images/presentase-siswa-master-teacher-edumatrix.webp"
                alt="presentase siswa edumatrix"
                className=" z-10"
              />

              {/* TOP */}
              <div className="absolute top-10 left-0 w-full flex justify-center z-10">
                <div className="flex flex-col items-center text-white">
                  <motion.p
                    key={`siswa-${currentIndex}`}
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="font-normal text-[50px] font-pencil"
                  >
                    {siswaEdumatrix[currentIndex]}
                  </motion.p>
                  <h3 className="mt-[-15px] font-bold text-[20px] font-desc">
                    Siswa Edumatrix
                  </h3>
                </div>
              </div>

              {/* CENTER */}
              <div className="absolute top-40 left-0 w-full flex justify-center z-10">
                <div className="flex flex-col items-center text-white">
                  <motion.p
                    key={`number-${currentIndex}`}
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="font-normal text-[50px] font-pencil"
                  >
                    {masterTeacherNumbers[currentIndex]}
                  </motion.p>
                  <h3 className="mt-[-15px] font-bold text-[20px] font-desc">
                    Master Teacher
                  </h3>
                </div>
              </div>

              {/* BOTTOM */}
              <div className="absolute top-[280px] left-0 w-full flex justify-center z-10">
                <div className="flex flex-col items-center text-white">
                  <motion.p
                    key={`percent-${currentIndex}`}
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="font-normal text-[50px] font-pencil"
                  >
                    {masterTeacherPercent[currentIndex]}
                  </motion.p>
                  <h3 className="mt-[-15px] font-bold text-[20px] font-desc">
                    Presentase Kelulusan
                  </h3>
                </div>
              </div>
            </div>

            {/* Right Side - Text */}
            <div
              className="lg:w-1/2 flex items-center justify-center"
              data-aos="fade-down-left"
            >
              <div className="flex flex-col">
                <h2 className="text-4xl font-bold mb-4 font-title text-[#133B79] leading-10">
                  Edumatrix Siap Membantumu Menjadi Sang Juara
                </h2>
                <p className="mb-4 text-[#374151] font-desc text-[15px] md:text-[16px] leading-5 font-medium opacity-90">
                  Di Edumatrix Indonesia, kami berkomitmen untuk membantu kamu
                  meraih puncak kesuksesan. Dengan program pelatihan yang
                  dirancang khusus, kami menyediakan alat dan dukungan yang kamu
                  butuhkan untuk menjadi juara di berbagai bidang.
                </p>
                <p className="mb-8 text-[#374151] font-desc text-[15px] md:text-[16px] leading-5 font-medium opacity-90">
                  Dari bimbingan intensif hingga strategi belajar yang efektif,
                  setiap langkahmu bersama kami akan membawa kamu lebih dekat
                  menuju kemenangan. Kami percaya pada potensi setiap individu
                  dan bertekad untuk memfasilitasi perjalananmu menuju prestasi
                  tertinggi. Bergabunglah dengan kami dan wujudkan impianmu
                  menjadi sang juara dengan Edumatrix Indonesia!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JumlahSiswa;

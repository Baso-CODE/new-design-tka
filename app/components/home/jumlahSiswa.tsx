"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

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
      <div className="max-w-310">
        <div className="bg-white lg:h-138.75 h-auto w-full py-12 px-2 lg:px-2">
          <div className="flex flex-col lg:flex-row md:gap-7.5 -mt-10 relative">
            {/* Left Side - Image */}
            <div className="lg:w-1/2 flex justify-center items-center -mt-4 lg:-mt-10 relative">
              <Image
                width={1000}
                height={1000}
                priority
                fetchPriority="high"
                loading="eager"
                src="/images/presentase-siswa-master-teacher-edumatrix.webp"
                alt="presentase siswa edumatrix"
                className="z-10"
              />

              {/* TOP */}
              <div className="absolute top-6 md:top-10 left-0 w-full flex justify-center z-10">
                <div className="flex flex-col items-center text-white">
                  <motion.p
                    key={`siswa-${currentIndex}`}
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="font-normal text-3xl md:text-[50px] font-pencil">
                    {siswaEdumatrix[currentIndex]}
                  </motion.p>
                  <h2 className="-mt-1 font-bold md:text-[20px] font-desc">
                    Siswa Edumatrix
                  </h2>
                </div>
              </div>

              {/* CENTER */}
              <div className="absolute top-28 md:top-40 left-0 w-full flex justify-center z-10">
                <div className="flex flex-col items-center text-white">
                  <motion.p
                    key={`number-${currentIndex}`}
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="font-normal text-3xl md:text-[50px] font-pencil">
                    {masterTeacherNumbers[currentIndex]}
                  </motion.p>
                  <h2 className="-mt-1 font-bold md:text-[20px] font-desc">
                    Master Teacher
                  </h2>
                </div>
              </div>

              {/* BOTTOM */}
              <div className="absolute top-50 md:top-68 left-0 w-full flex justify-center z-10">
                <div className="flex flex-col items-center text-white">
                  <motion.p
                    key={`percent-${currentIndex}`}
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="font-normal text-3xl md:text-[50px] font-pencil">
                    {masterTeacherPercent[currentIndex]}
                  </motion.p>
                  <h2 className="-mt-1 font-bold md:text-[20px] font-desc">
                    Presentase Kelulusan
                  </h2>
                </div>
              </div>
            </div>

            {/* Right Side - Text */}
            <div className="lg:w-1/2 flex items-center justify-center">
              <div className="flex flex-col">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 font-title text-[#133B79] leading-7 md:leading-10">
                  Edumatrix Siap Membantumu Menguasai TKA & Meraih Hasil
                  Maksimal
                </h2>
                <p className="mb-4 text-[#374151] font-desc text-[14px] md:text-[16px] leading-5 font-medium opacity-90">
                  Di Edumatrix Indonesia, kami berkomitmen untuk membimbing kamu
                  mempersiapkan Tes Kemampuan Akademik (TKA) dengan matang.
                  Melalui program bimbingan yang terstruktur, kami menyediakan
                  materi dan strategi belajar terbaik untuk menghadapi TKA di
                  semua jenjang pendidikan.
                </p>
                <p className="mb-8 text-[#374151] font-desc text-[14px] md:text-[16px] leading-5 font-medium opacity-90">
                  Dari latihan soal mendalam hingga evaluasi berkala bersama
                  tutor profesional, setiap langkah belajar dirancang untuk
                  memastikan kamu siap hadapi TKA dengan penuh percaya diri.
                  Wujudkan impian akademikmu bersama Edumatrix Indonesia!
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

"use client";

import Image from "next/image";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Pengajar } from "@/app/types/pengajar.type";

export default function PengajarClient({
  pengajarData,
}: {
  pengajarData: Pengajar[];
}) {
  if (pengajarData.length === 0) {
    return (
      <div className="flex justify-center bg-[#0570cc] py-10">
        <p className="text-white">Tampilan komponen mengalami gangguan.</p>
      </div>
    );
  }

  return (
    <section className="relative flex justify-center py-16 lg:py-24 font-title overflow-hidden bg-[#0570cc]">
      <div className="max-w-360 w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-center text-white text-2xl font-extrabold lg:text-4xl mb-4 drop-shadow-lg">
          Our Professional{" "}
          <span className="text-[#fac61f]">Master Teacher</span>
        </h2>
        <p className="text-base sm:text-lg text-white opacity-90 max-w-2xl mx-auto text-center mb-12">
          Dibimbing langsung oleh pengajar profesional yang berpengalaman di
          bidangnya.
        </p>

        <Swiper
          modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 16 },
            640: { slidesPerView: 2, spaceBetween: 24 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
            1280: { slidesPerView: 4, spaceBetween: 30 },
          }}
          className="mySwiper pb-16 pt-4 mt-5">
          {pengajarData.map((teacher) => (
            <SwiperSlide key={teacher.id} className="mt-4">
              <div className="relative overflow-hidden group bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 cursor-pointer h-full p-6 flex flex-col items-center ">
                <div className="relative mb-6">
                  <Image
                    loading="lazy"
                    src={`${teacher.foto_pengajar}`}
                    alt={teacher.nama_pengajar}
                    width={144}
                    height={144}
                    className="w-36 h-36 rounded-full mx-auto object-cover border-4 border-[#fac61f] shadow-xl transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-3"
                  />
                </div>

                <h3 className="text-xl font-bold text-white mb-2 font-title text-center">
                  {teacher.nama_pengajar}
                </h3>

                <p className="text-sm text-blue-200 font-desc mb-4 text-center">
                  Master Teacher
                </p>

                <div className="bg-[#fac61f] text-[#033c95] text-xs font-bold px-4 py-2 rounded-full shadow-md text-center inline-block max-w-[90%]">
                  {teacher.university}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Gelombang / Wave di Bagian Bawah */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          className="relative block w-full h-20 sm:h-32 lg:h-48"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none">
          <path
            d="M0,15 C400,200 800,-80 1200,120 L1200,120 L0,120 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}

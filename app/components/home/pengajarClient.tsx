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
      <div className="flex justify-center bg-[#f8faff] py-10">
        <p className="text-gray-500">Tampilan komponen mengalami gangguan.</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center bg-[#f8faff] py-10 sm:py-16">
      <div className="max-w-360 w-full px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-[#133B79] text-2xl font-extrabold font-title lg:text-4xl mb-12">
          Our Professional Master Teacher
        </h2>

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
          className="mySwiper pb-16">
          {pengajarData.map((teacher) => (
            <SwiperSlide key={teacher.id}>
              <div className="relative overflow-hidden group bg-gray-50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 cursor-pointer h-full p-6 flex flex-col items-center">
                <div className="relative mb-6">
                  <Image
                    loading="lazy"
                    src={`${teacher.foto_pengajar}`}
                    alt={teacher.nama_pengajar}
                    width={144}
                    height={144}
                    className="w-36 h-36 rounded-full mx-auto object-cover border-4 border-indigo-600 shadow-xl transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-3"
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2 font-title">
                  {teacher.nama_pengajar}
                </h3>

                <p className="text-sm text-gray-600 font-desc mb-4 text-center">
                  Master Teacher
                </p>

                <div className="bg-linear-to-r from-blue-700 to-indigo-600 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-md text-center inline-block max-w-[90%]">
                  {teacher.university}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

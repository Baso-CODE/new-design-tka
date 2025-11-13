"use client";

import { useEffect } from "react";
import AOS from "aos";
import Image from "next/image";
import detailContent from "./detailContentPendidikan";

const TingkatPendidikan = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const getButtonClass = () => {
    return "bg-[#133B79] text-white font-bold font-title w-[328px] sm:w-[380px] text-[40px] py-2 rounded-[28px] hover:scale-105 transition-transform duration-300";
  };

  const getImageClass = () => {
    return "w-[266px] h-[352px] object-contain transition-transform duration-500 hover:scale-105";
  };

  return (
    <section className="flex flex-col py-8 items-center xl:min-h-[125vh] bg-white container mx-auto">
      <div className="max-w-[1240px] w-full px-2">
        <div className="flex gap-6 mt-8 w-full flex-wrap xl:flex-nowrap justify-center">
          {/* === SD === */}
          <div
            className="flex flex-col items-center flex-1"
            data-aos="fade-right"
          >
            <Image
              loading="lazy"
              src="/images/tingkat-pendidikan/sd.webp"
              alt="SD"
              className={getImageClass()}
              width={497}
              height={704}
            />
            <button className={getButtonClass()}>SD</button>
            <div
              className="mt-4 opacity-0 transition-opacity duration-500 delay-200"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {detailContent.SD}
            </div>
          </div>

          {/* === SMP === */}
          <div className="flex flex-col items-center flex-1" data-aos="fade-up">
            <Image
              loading="lazy"
              src="/images/tingkat-pendidikan/smp.webp"
              alt="SMP"
              className={getImageClass()}
              width={380}
              height={704}
            />
            <button className={getButtonClass()}>SMP</button>
            <div
              className="mt-4 opacity-0 transition-opacity duration-500 delay-200"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {detailContent.SMP}
            </div>
          </div>

          {/* === SMA === */}
          <div
            className="flex flex-col items-center flex-1"
            data-aos="fade-left"
          >
            <Image
              loading="lazy"
              src="/images/tingkat-pendidikan/sma.webp"
              alt="SMA"
              className={getImageClass()}
              width={532}
              height={704}
            />
            <button className={getButtonClass()}>SMA</button>
            <div
              className="mt-4 opacity-0 transition-opacity duration-500 delay-200"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {detailContent.SMA}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TingkatPendidikan;

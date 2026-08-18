"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { GetServerSideProps, NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import WhatsAppButton from "./whatsAppButton";

interface ExampleContentProps {
  title: string;
  description1: string;
  description2: string;
  buttonText: string;
  buttonLink: string;
}

interface TextParallaxContentProps {
  imgUrl: string;
  imgUrlMobile: string;
  subheading: string;
  heading: string;
  children: React.ReactNode;
}

const IMG_PADDING = 0;

const HeroProgram: NextPage = () => {
  return (
    <div className="bg-white">
      <TextParallaxContent
        imgUrl="/images/carousel/program-osn.webp"
        imgUrlMobile="/images/carousel/program-osn-mobile2.webp"
        subheading="Bimbel OSN"
        heading="Menangkan Olimpiade Sains Nasional Bersama Edumatrix.">
        <ExampleContent
          title="Bersiap Menjadi Juara OSN"
          description1="Edumatrix Indonesia menyediakan program bimbingan belajar Olimpiade Sains Nasional (OSN) yang dirancang khusus untuk membantu siswa meraih prestasi di bidang sains. Dengan pengajar berpengalaman dan materi yang terstruktur, kami mempersiapkan siswa untuk kompetisi tingkat nasional."
          description2="Dapatkan pelatihan intensif dan dukungan penuh dari kami agar siap bersaing dan menorehkan prestasi di OSN."
          buttonText="Daftar Sekarang"
          buttonLink="https://api.whatsapp.com/send?phone=6285724543040&text=Halo%20Kak%20Putri%20https://les-tka.bimbeledumatrix.com,%20Saya%20ingin%20tanya%20tentang%20program%20Bimbel%20OSN%20di%20Edumatrix."
        />
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl="/images/carousel/program-osn_1.webp"
        imgUrlMobile="/images/carousel/program-osn-mobile1.webp"
        subheading="Materi Tersusun"
        heading="Kurikulum Berbasis Kompetensi.">
        {" "}
        <ExampleContent
          title="Materi Tepat Sasaran"
          description1="Program Bimbel OSN kami dirancang sesuai dengan kurikulum kompetisi Olimpiade Sains Nasional, sehingga siswa mendapatkan materi yang sesuai dengan kebutuhan kompetisi."
          description2="Latihan soal dan simulasi OSN membuat siswa semakin percaya diri dan siap menghadapi tantangan di setiap tahap."
          buttonText="Konsultasi Sekarang"
          buttonLink="https://api.whatsapp.com/send?phone=6285815095359&text=Halo%20Kak%20Nevita%20https://les-tka.bimbeledumatrix.com,%20Saya%20ingin%20tanya%20lebih%20lanjut%20tentang%20program%20Bimbel%20OSN."
        />{" "}
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="/images/carousel/program-osn_2.webp"
        imgUrlMobile="/images/carousel/program-osn-mobile.webp"
        subheading="Pengajar Berpengalaman"
        heading="Belajar dari Ahlinya.">
        <ExampleContent
          title="Bimbingan Langsung dari Pengajar Berprestasi"
          description1="Di Edumatrix, siswa dibimbing oleh para pengajar yang berpengalaman di bidang OSN. Kami memberikan bimbingan yang personal dan sesuai dengan kebutuhan setiap siswa, memastikan pemahaman yang mendalam pada setiap materi."
          description2="Dengan pendekatan yang fokus dan sistematis, siswa kami siap untuk menjadi juara di Olimpiade Sains Nasional."
          buttonText="Tanyakan Program"
          buttonLink="https://api.whatsapp.com/send?phone=6285712217876&text=Halo%20Kak%20Sari%20https://les-tka.bimbeledumatrix.com,%20Saya%20ingin%20tanya%20tentang%20pengajar%20dan%20metode%20belajar%20OSN%20di%20Edumatrix."
        />{" "}
      </TextParallaxContent>
    </div>
  );
};

// === Text Parallax Component ===
const TextParallaxContent: React.FC<TextParallaxContentProps> = ({
  imgUrl,
  imgUrlMobile,
  subheading,
  heading,
  children,
}) => {
  return (
    <div style={{ paddingLeft: IMG_PADDING, paddingRight: IMG_PADDING }}>
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} imgUrlMobile={imgUrlMobile} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

// === Sticky Image ===
interface StickyImageProps {
  imgUrl: string;
  imgUrlMobile: string;
}

const StickyImage: React.FC<StickyImageProps> = ({ imgUrl, imgUrlMobile }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["0px", "50px"]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${isMobile ? imgUrlMobile : imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
        borderRadius,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-neutral-950/65"
        style={{ opacity, borderRadius }}
      />
    </motion.div>
  );
};

// === Overlay Copy ===
interface OverlayCopyProps {
  subheading: string;
  heading: string;
}

const OverlayCopy: React.FC<OverlayCopyProps> = ({ subheading, heading }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{ y, opacity }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white">
      <div className="max-w-310 text-center">
        <p className="mb-2 text-2xl md:mb-4 md:text-3xl font-title">
          {subheading}
        </p>
        <p className="text-4xl font-bold md:text-6xl font-title">{heading}</p>
      </div>
    </motion.div>
  );
};

// === Example Content ===
const ExampleContent: React.FC<ExampleContentProps> = ({
  title,
  description1,
  description2,
  buttonText,
  buttonLink,
}) => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-2 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl md:text-4xl font-bold md:col-span-4 text-center md:text-start font-title text-[#133b79]">
      {title}
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 font-medium text-lg text-gray-500 md:text-xl font-desc">
        {description1}
      </p>
      <p className="mb-8 text-lg font-medium text-gray-500 md:text-xl font-desc">
        {description2}
      </p>
      <WhatsAppButton buttonText={buttonText} buttonLink={buttonLink} />
    </div>
  </div>
);

// === SSR Props (contoh, jika ingin fetch data) ===
export const getServerSideProps: GetServerSideProps = async (context) => {
  // Bisa fetch data dari API jika perlu
  return { props: {} };
};

export default HeroProgram;

"use client";

import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface CarouselItem {
  src: string;
  alt: string;
  href: string;
  width: number;
  height: number;
}

const SliderMobile = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const items: CarouselItem[] = [
    {
      src: "/images/carousel/carousel-OSN_MOB.webp",
      alt: "Bimbingan belajar OSN terbaik untuk membantu anak Anda meraih prestasi dalam Olimpiade Sains Nasional.",
      href: "https://api.whatsapp.com/send?phone=6282174144728&text=Halo%20Kak%20Iva%20https://osn.edumatrix-indonesia.com,%20Saya%20ingin%20tanya%20program%20belajar%20OSN%20yang%20ada%20di%20Edumatrix.%20Apa%20saja%20jenis%20program%20belajar%20dan%20pilihan%20paket",
      width: 4015,
      height: 2101,
    },
    {
      src: "/images/carousel/carousel-OSN_MOB2.webp",
      alt: "Persiapan Olimpiade Sains Nasional dengan tutor berpengalaman yang siap membantu anak Anda memahami materi OSN secara mendalam.",
      href: "https://api.whatsapp.com/send?phone=6282174144728&text=Halo%20Kak%20Iva%20https://osn.edumatrix-indonesia.com,%20Saya%20ingin%20tanya%20program%20belajar%20OSN%20yang%20ada%20di%20Edumatrix.%20Apa%20saja%20jenis%20program%20belajar%20dan%20pilihan%20paket",
      width: 4015,
      height: 2101,
    },
    {
      src: "/images/carousel/carousel-OSN_MOB3.webp",
      alt: "Program belajar intensif dan terstruktur untuk Olimpiade Sains Nasional, dirancang khusus untuk meningkatkan kemampuan akademis anak Anda.",
      href: "https://api.whatsapp.com/send?phone=6282174144728&text=Halo%20Kak%20Iva%20https://osn.edumatrix-indonesia.com,%20Saya%20ingin%20tanya%20program%20belajar%20OSN%20yang%20ada%20di%20Edumatrix.%20Apa%20saja%20jenis%20program%20belajar%20dan%20pilihan%20paket",
      width: 4015,
      height: 2101,
    },
  ];

  return (
    <div className="w-full block md:hidden ">
      <div className="max-w-310 px-2 mx-auto">
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={2600}
          arrows
          ssr
          itemClass="w-full h-full">
          {items.map((item, idx) => (
            <a href={item.href} key={idx}>
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className="w-full h-full rounded-lg object-fill"
                priority={idx === 0}
              />
            </a>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default SliderMobile;

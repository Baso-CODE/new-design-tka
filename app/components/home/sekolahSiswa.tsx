import { getDataAsalSekolahDummy } from "@/app/lib/getDummyDataRequest/getAsalSekolahSiswaDummy.request";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default async function SekolahSiswa() {
  const images = await getDataAsalSekolahDummy();

  return (
    <div className="bg-[#04397D] items-center flex justify-center relative">
      <div className="max-w-310 px-2">
        <div className="overflow-hidden whitespace-nowrap py-4">
          <Marquee
            direction="left"
            speed={85}
            gradient={false}
            className="flex">
            {images.map((image) => (
              <Image
                key={image.id}
                src={`${image.foto_sekolah}`}
                alt={image.nama_sekolah}
                width={400}
                height={600}
                className="inline-block mx-1 rounded-md"
              />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}

import { getDataContactCsDummy } from "@/app/lib/getDummyDataRequest/getContactCsDummy.request";
import { ContactCs } from "@/app/types/contact.type";
import Image from "next/image";
import Link from "next/link";
import { fallbackContact } from "../data/contactCs.dummyData";

export default async function Hero() {
  let data: ContactCs | null = null;

  data = await getDataContactCsDummy();

  const contact = data || fallbackContact;
  const link = contact.link_cta || "/contact";

  return (
    <section className="relative bg-[#04397D] flex items-center justify-center">
      <div className="py-24 px-4 lg:px-0 mt-10 text-white max-w-310 lg:min-h-[70vh] xl:min-h-[74vh]">
        <div className="flex flex-col lg:flex-row gap-14">
          <div className="lg:w-1/2 ">
            <h1 className="text-[40px] uppercase font-bold leading-10 font-title">
              Butuh persiapan lebih
            </h1>

            <h2
              aria-hidden="true"
              className="uppercase text-[40px] font-bold font-title text-[#faae17] mb-4">
              untuk OSN
            </h2>
            <p className=" mb-8 font-desc text-[14px] md:text-[16px] leading-4.75 font-bold">
              Edumatrix Indonesia bangga mendukung generasi muda Indonesia dalam
              meraih prestasi di Olimpiade Sains Nasional. Program kami
              dirancang untuk mempersiapkan siswa dengan pengetahuan mendalam
              dan keterampilan analitis yang tajam, memastikan mereka siap
              menghadapi tantangan kompetisi sains terbesar di tanah air.
              <br />
              Melalui bimbingan intensif dan metode belajar yang inovatif, kami
              membantu setiap peserta mencapai potensi maksimalnya, mengukir
              prestasi gemilang, dan membawa nama harum bagi sekolah dan bangsa.
              Bersama Edumatrix Indonesia, jadilah bagian dari perjalanan menuju
              puncak prestasi di OSN!
            </p>

            <Link
              href={link}
              className="group relative inline-flex w-100% md:w-[50%] lg:w-[40%] h-14 items-center justify-center rounded-full bg-[#F68507] py-1 pl-6 pr-14 font-medium text-neutral-50">
              <span className="z-10 pr-2"> Daftar Sekarang</span>
              <div className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full bg-[#04397d] transition-[width] group-hover:w-[calc(100%-8px)]">
                <div className="mr-3.5 flex items-center justify-center">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-neutral-50">
                    <path
                      d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"></path>
                  </svg>
                </div>
              </div>
            </Link>
          </div>

          <div className="lg:w-1/2 flex justify-center items-center">
            <Image
              loading="eager"
              src="/images/image-preview-landing-page.webp"
              alt="OSN"
              width={1200}
              height={1200}
              priority
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
      <div className="absolute -bottom-px xl:-bottom-10 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#FFFFFF"
            fillOpacity="1"
            d="M0,224L24,229.3C48,235,96,245,144,234.7C192,224,240,192,288,186.7C336,181,384,203,432,224C480,245,528,267,576,272C624,277,672,267,720,245.3C768,224,816,192,864,186.7C912,181,960,203,1008,208C1056,213,1104,203,1152,186.7C1200,171,1248,149,1296,154.7C1344,160,1392,192,1416,208L1440,224L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}

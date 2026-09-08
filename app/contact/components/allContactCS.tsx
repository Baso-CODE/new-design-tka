import { dummyContactCsData } from "@/app/components/data/contactCs.dummyData";
import { getAllContactCs } from "@/app/request/contacts/getAllContactCs";
import { ContactCs } from "@/app/types/contact.type";
import Image from "next/image";
import Link from "next/link";

export default async function AllContactCS() {
  const dataContact: ContactCs[] = (await getAllContactCs()) ?? [];
  const finalContacts =
    dataContact.length > 0 ? dataContact : dummyContactCsData;

  return (
    <div className="relative flex justify-center pb-16 text-white">
      {/* AMBIENT LIGHT */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          top-[10%]
          h-96
          w-96
          rounded-full
          bg-[#4DA3FF]/14
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-[5%]
          h-96
          w-96
          rounded-full
          bg-[#FAAE17]/8
          blur-3xl
        "
      />

      <div className="relative z-10 my-10 flex w-full max-w-310 flex-col items-center justify-between gap-10 p-4 lg:my-0 lg:flex-row lg:gap-14">
        {/* IMAGE */}
        <div className="order-first flex w-full justify-center lg:order-none lg:w-1/2">
          <div className="relative z-10 overflow-hidden rounded-[24px]">
            <Image
              loading="eager"
              src="/images/heroContact.webp"
              width={1000}
              height={1000}
              alt="Edumatrix Indonesia - Solusi Terbaik untuk Bimbingan Belajar dan Konsultasi Pendidikan. Hubungi Kami Sekarang untuk Informasi Lebih Lanjut!"
              className="
                  h-auto
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-[1.025]
                "
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className="w-full p-4 text-center lg:w-1/2 lg:p-0 lg:text-left">
          <h2 className="mb-4 font-title text-[28px] font-bold leading-tight sm:text-[35px] lg:text-[40px]">
            Kini Saatnya Menjadi Juara Bersama Edumatrix
          </h2>

          <p
            className="
              mx-auto
              my-6
              max-w-lg
              font-desc
              text-[16px]
              font-medium
              leading-relaxed
              text-white/85
              lg:mx-0
            ">
            Ribuan siswa telah bergabung dan mendapatkan pendampingan belajar
            terbaik dari Edumatrix. Klik Daftar untuk mengisi Form Registrasi
            Siswa atau konsultasikan kebutuhan Anda, segera hubungi:
          </p>

          {/* CONTACT LIST */}
          <div className="mx-auto flex max-w-md flex-col gap-3.5 lg:mx-0">
            {finalContacts.map((contact) => (
              <Link
                key={contact.id}
                href={contact.link_cta}
                target="_blank"
                rel="noopener noreferrer"
                className="group block w-full">
                <div
                  className="
                    relative
                    flex
                    min-h-14
                    w-full
                    items-center
                    justify-center
                    overflow-hidden

                    rounded-[18px]

                    border
                    border-white/40

                    px-4
                    py-3

                    text-center
                    font-desc
                    text-[17px]
                    font-extrabold
                    text-[#04397D]

                    shadow-[0_10px_28px_rgba(110,75,0,0.18),0_3px_10px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.70),inset_0_-1px_0_rgba(125,85,0,0.10)]

                    backdrop-blur-[18px]
                    backdrop-saturate-[180%]

                    transition-all
                    duration-300
                    ease-out

                    group-hover:-translate-y-0.5
                    group-hover:scale-[1.01]

                    group-hover:shadow-[0_14px_34px_rgba(110,75,0,0.24),0_5px_14px_rgba(0,0,0,0.10),inset_0_1px_0_rgba(255,255,255,0.82)]

                    group-active:translate-y-0
                    group-active:scale-[0.985]

                    md:text-[20px]
                  "
                  style={{
                    background: [
                      "linear-gradient(150deg, rgba(255,255,255,0.32) 0%, rgba(255,255,255,0.08) 32%, rgba(255,255,255,0.02) 58%)",
                      "radial-gradient(circle at 12% -25%, rgba(255,255,255,0.50) 0%, transparent 38%)",
                      "radial-gradient(circle at 90% 120%, rgba(255,238,130,0.28) 0%, transparent 42%)",
                      "linear-gradient(135deg, #FFD43B 0%, #FFC107 50%, #EFB300 100%)",
                    ].join(", "),
                  }}>
                  {/* TOP GLASS EDGE */}
                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      inset-x-[8%]
                      top-0
                      h-px
                      bg-linear-to-r
                      from-transparent
                      via-white/90
                      to-transparent
                    "
                  />

                  {/* SOFT REFLECTION */}
                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      -left-[10%]
                      -top-[80%]
                      h-[130%]
                      w-[55%]
                      rotate-[-12deg]
                      rounded-full
                      bg-white/28
                      blur-xl
                      transition-transform
                      duration-500
                      group-hover:translate-x-6
                    "
                  />

                  {/* GOLD REFRACTION */}
                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      -bottom-6
                      right-[5%]
                      h-12
                      w-28
                      rounded-full
                      bg-[#fff1a3]/35
                      blur-xl
                    "
                  />

                  {/* INNER EDGE */}
                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      inset-[1px]
                      rounded-[17px]
                      border
                      border-white/15
                    "
                  />

                  {/* HOVER SHINE */}
                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      -left-[45%]
                      top-0
                      h-full
                      w-[35%]
                      skew-x-[-20deg]
                      bg-linear-to-r
                      from-transparent
                      via-white/30
                      to-transparent
                      opacity-0
                      transition-all
                      duration-700
                      group-hover:left-[115%]
                      group-hover:opacity-100
                    "
                  />

                  <span className="relative z-10">
                    {contact.nomor_hp} ({contact.nama_cs})
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

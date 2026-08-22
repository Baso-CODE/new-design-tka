import { getDataFaqDummy } from "@/app/lib/getDummyDataRequest/getFaqDummy.request";
import { AccordionFAQ } from "./AccordionFAQ";

export default async function Accordion() {
  const dataFaq = await getDataFaqDummy();

  return (
    <>
      <div className="w-full bg-[#f8faff] px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Two-column layout */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            {/* Left: Sticky heading panel */}
            <div className="lg:w-[38%] lg:sticky lg:top-24 flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl lg:text-[2.6rem] font-bold font-title text-[#1a2744] leading-tight">
                Ada yang ingin{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#04397d]">
                    kamu tanyakan?
                  </span>
                </span>
              </h2>

              <p className="text-[#64748b] text-base leading-relaxed font-desc">
                Temukan jawaban dari pertanyaan yang paling sering ditanyakan
                seputar program belajar TKA di Edumatrix.
              </p>

              {/* Decorative element */}
              <div className="mt-2 hidden lg:flex items-center gap-4">
                <div className="flex flex-col gap-2">
                  <div className="w-10 h-10 rounded-xl bg-[#04397d] flex items-center justify-center text-white text-lg font-bold shadow-md">
                    ?
                  </div>
                  <div className="w-10 h-2 rounded-full bg-[#faae17]" />
                  <div className="w-6 h-2 rounded-full bg-[#04397d]/20" />
                </div>
                <p className="text-sm text-[#94a3b8] max-w-[200px] leading-relaxed">
                  Tidak menemukan jawaban? Hubungi kami langsung via WhatsApp.
                </p>
              </div>
            </div>

            {/* Right: Accordion cards */}
            <div className="lg:w-[62%] flex flex-col gap-3 w-full">
              {dataFaq.map((item, index) => (
                <AccordionFAQ
                  key={item.id}
                  index={index + 1}
                  title={item.pertanyaan}
                  content={item.jawaban}
                  defaultOpen={index === 0}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="-mb-px bg-[#f8faff]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#04397d"
            fillOpacity="1"
            d="M0,96L34.3,112C68.6,128,137,160,206,149.3C274.3,139,343,85,411,106.7C480,128,549,224,617,229.3C685.7,235,754,149,823,138.7C891.4,128,960,192,1029,208C1097.1,224,1166,192,1234,181.3C1302.9,171,1371,181,1406,186.7L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          />
        </svg>
      </div>
    </>
  );
}

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
            {/* Left: Sticky heading panel (Centered) */}
            <div className="w-full lg:w-[38%] lg:sticky lg:top-24 flex flex-col gap-6 text-center items-center justify-center">
              <h2 className="text-3xl md:text-4xl lg:text-[2.6rem] font-bold font-title text-[#033790] leading-tight text-center">
                Frequently Ask Question
              </h2>
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

      {/* Wave divider (Updated curve) */}
      {/* Wave divider (Deeper curve & sharper peaks) */}
      <div className="-mb-px bg-[#f8faff] overflow-hidden leading-none">
        <svg
          className="relative block w-full "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none">
          <path
            fill="#056dc9"
            fillOpacity="1"
            d="M0,288L60,266.7C120,245,240,203,360,181.3C480,160,600,160,720,181.3C840,203,960,245,1080,250.7C1200,256,1320,224,1380,208L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </div>
    </>
  );
}

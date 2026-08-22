import { getDataProgramDummy } from "@/app/lib/getDummyDataRequest/getProgramDummy.request";
import Image from "next/image";
import {
  AiOutlineBulb,
  AiOutlineCheckCircle,
  AiOutlineCheckSquare,
  AiOutlineStar,
  AiOutlineUser,
} from "react-icons/ai";
import { TbMessageCircleQuestion } from "react-icons/tb";

const icons = [
  <AiOutlineBulb className="bg-transparent text-blue-900" />,
  <AiOutlineCheckCircle className="bg-transparent text-orange-500" />,
  <AiOutlineStar className="bg-transparent text-blue-900" />,
  <AiOutlineUser className="bg-transparent text-orange-500" />,
  <AiOutlineCheckSquare className="bg-transparent text-blue-900" />,
  <TbMessageCircleQuestion className="bg-transparent text-orange-500" />,
];

const animations = [
  "fade-down-right",
  "fade-down",
  "fade-down-left",
  "fade-up-right",
  "fade-up",
  "fade-up-left",
];

const colors = ["bg-[#04397D]", "bg-orange-500"];

export default async function Program() {
  // let programData: ProgramBelajar[] = [];

  // const programResult = await getAllProgramBelajarIsDeleted();
  // programData = programResult.data;

  // // Jika fetch gagal atau kosong → pakai placeholder
  // const finalPrograms =
  //   programData.length > 0 ? programData : placeholderPrograms;

  const programData = await getDataProgramDummy();

  return (
    <section className="bg-[#f8faff] flex justify-center py-28 items-center font-title">
      <div className="max-w-310 px-2 md:px-0 w-full">
        <div className="container mx-auto">
          <div className="flex justify-center items-center mb-16">
            <h2 className="text-[40px] font-bold font-title text-center text-blue-900">
              Fitur Program
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
            {programData.map((item, index) => (
              <div
                key={item.id}
                className={`${colors[index % 2]} rounded-3xl p-8 text-white`}
                data-aos={animations[index % animations.length]}>
                {/* Header Icon + Title */}
                <div className="flex items-center mb-2">
                  <div className="bg-white p-1 rounded-full flex items-center justify-center">
                    {icons[index % icons.length]}
                  </div>
                  <h3 className="ml-2 font-bold md:text-lg text-2xl font-title">
                    {item.judul_fitur}
                  </h3>
                </div>

                {/* Content Image + Description */}
                <div className="flex justify-center">
                  <div className="flex flex-col md:flex-row gap-3">
                    <Image
                      src={`${item.foto_icon}`}
                      alt={item.judul_fitur}
                      className="w-28 h-28 shrink-0 self-center object-contain"
                      width={112}
                      height={112}
                      loading="lazy"
                    />
                    <p className="text-sm font-desc leading-5 font-medium opacity-90">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Optional message if using placeholder */}
          {programData.length === 0 && (
            <p className="text-center text-gray-600 mt-8 font-desc">
              Data asli tidak tersedia. Menampilkan konten placeholder.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

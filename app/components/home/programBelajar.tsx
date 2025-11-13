import { getAllProgramBelajarIsDeleted } from "@/app/request/program/getAllIsDeletedProgram";
import { ProgramBelajar } from "@/app/types/programBelejar.type";
import { imageUrlClient } from "@/app/utils/imageUrlClient";
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
  let programData: ProgramBelajar[] = [];

  try {
    const programResult = await getAllProgramBelajarIsDeleted();
    programData = programResult.data;
  } catch (error) {
    console.error("Error loading program data:", error);
  }

  return (
    <section className="bg-white flex justify-center my-28 items-center">
      <div className="max-w-[1240px] px-2">
        <div className="container mx-auto">
          <div className="flex justify-center items-center mb-16">
            <h2 className="text-[40px] font-bold font-title text-center text-blue-900">
              Fitur Program
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
            {programData?.map((item, index) => (
              <div
                key={item.id}
                className={`${colors[index % 2]} rounded-3xl p-8 text-white`}
                data-aos={animations[index % animations.length]}
              >
                <div className="flex items-center mb-2">
                  <div className="bg-white p-1 rounded-full">
                    {icons[index % icons.length]}
                  </div>
                  <h3 className="ml-1 font-medium md:text-lg text-2xl font-title">
                    {item.judul_fitur}
                  </h3>
                </div>

                <div className="flex justify-center">
                  <div className="flex flex-col md:flex-row gap-2">
                    <Image
                      src={`${imageUrlClient}/programBelajar-images${item.foto_icon}`}
                      alt={item.judul_fitur}
                      className="w-28 h-28 shrink-0 self-center"
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

            {programData.length === 0 && (
              <p className="text-center text-gray-600 font-desc items-center">
                Tidak ada data program tersedia.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

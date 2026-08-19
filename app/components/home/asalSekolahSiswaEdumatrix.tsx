import { schools } from "@/app/components/data/school";

const AsalSekolahSiswaEdumatrix = () => {
  return (
    <section className="xl:min-h-screen lg:h-[60vh] bg-[#04397D] text-white flex flex-col items-center">
      <div className="flex flex-col gap-8 max-w-310 w-full px-2 rounded-lg">
        <div className="py-10">
          <h2 className="text-[28px] leading-11.25 sm:text-[35px] lg:text-[37px] text-[#FFFFFF] font-bold font-title text-center mb-10">
            Asal Sekolah Siswa Edumatrix
          </h2>

          <div className="bg-white text-[#676767] rounded-lg overflow-auto max-h-140 p-6 shadow-md custom-scrollbar">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
              {schools.map((school, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 whitespace-nowrap font-medium font-desc">
                  <span className="w-1.5 h-1.5 bg-[#003b6d] rounded-full shrink-0"></span>
                  {school}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AsalSekolahSiswaEdumatrix;

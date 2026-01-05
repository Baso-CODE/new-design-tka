import Image from "next/image";

const ProfessionalTeam = async () => {
  return (
    <section className="bg-white flex justify-center my-28 items-center">
      <div className="max-w-310 px-2">
        <div className="container mx-auto">
          <div className="flex flex-col justify-center items-center mb-7">
            <h1 className="text-[32px] md:text-[48px] lg:text-[64px] font-bold font-title text-center text-[#133B79] max-w-full md:max-w-[469px] leading-tight">
              Our Professional Team
            </h1>

            <div className="mt-8">
              <Image
                src="/images/karyawan-edumatrix-indonesia.webp"
                width={1200}
                height={800}
                alt="Tim profesional di EDUMATRIX Indonesia yang terdiri dari mentor berpengalaman di bidangnya, siap mendukung perjalanan pendidikan dan kesuksesan setiap siswa dengan pendekatan terbaik."
                className="w-full h-auto rounded-lg"
                priority={false}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalTeam;

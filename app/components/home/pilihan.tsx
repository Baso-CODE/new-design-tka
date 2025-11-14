import Image from "next/image";

const Pilihan = () => {
  return (
    <div className=" flex justify-center">
      <section className="relative  mt-20 lg:mt-0 ">
        <div className="relative w-full h-full">
          <Image
            loading="lazy"
            src="/images/background-belajar-offline-online-edumatrix.webp"
            alt="pilihan"
            className="w-full h-full object-cover"
            width="4096"
            height="1570"
          />
        </div>
        <div className="absolute top-0 left-0 bottom-0 w-full flex items-center justify-between sm:flex-wrap flex-wrap     lg:flex-nowrap">
          <div className=" w-[50%]">
            <div className=" -mt-5 shrink-0  left-0">
              <Image
                loading="lazy"
                src="/images/pilihan-belajar-offline-atau-offline.webp"
                alt="Student"
                className="h-[190px] w-[190px] tb:h-[280px] tb:w-[270px] sm:h-[270px] sm:w-[290px] md:h-[330px] md:w-[330px] lg:w-[400px] lg:h-[400px] xl:min-w-[600px] xl:min-h-[600px] 2xl:min-w-[700px] 2xl:min-h-[700px]  "
                width="1290"
                height="1204"
              />
            </div>
          </div>
          <div className=" w-[50%]">
            <div className="relative flex flex-col items-center justify-center mt-0  xl:mt-0 px-4 sm:px-6 lg:px-8  ml-auto">
              <h2 className="text-white hidden md:flex xl:mb-[45px] lg:mb-[35px] text-center justify-center font-bold  md:text-[25px] lg:text-[35px] xl:text-[40px] xl:w-[491px] xl:h-[59px] lg:w-[400px] lg:h-[50px] ">
                Pilih Metode Belajarmu
              </h2>
              <div className="flex flex-col gap-2 sm:gap-2 lg:gap-4">
                <div className="bg-[#09A76D] uppercase font-title font-bold text-sm sm:text-lg md:text-xl lg:text-[40px] xl:text-[48px] text-white py-2 px-4 sm:py-3 sm:px-6 rounded-xl lg:rounded-3xl w-[120px] sm:w-60 lg:w-[360px] lg:h-[70px] xl:w-[420px] xl:h-[92px] flex justify-center items-center">
                  Online
                </div>
                <div className="bg-[#C41926] uppercase font-title font-bold text-sm sm:text-lg md:text-xl lg:text-[40px] xl:text-[48px] text-white py-2 px-4 sm:py-3 sm:px-6 rounded-xl lg:rounded-3xl w-[120px] sm:w-60 lg:w-[360px] lg:h-[70px] xl:w-[420px] xl:h-[92px] flex justify-center items-center">
                  Offline
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-full  bg-[#04397D]"></div>
      </section>
    </div>
  );
};

export default Pilihan;

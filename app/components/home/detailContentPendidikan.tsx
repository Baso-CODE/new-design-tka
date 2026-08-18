import Image from "next/image";

const detailContent = {
  SD: (
    <div className="flex flex-col items-center justify-center w-82 sm:w-95 top-33.75 h-49.5 bg-blue-900 rounded-[34px] p-4 my-4">
      <div className="flex items-center mb-4">
        <Image
          loading="lazy"
          src="/images/tingkat-pendidikan/bahasa-indonesia.webp"
          alt="Bahasa Indonesia"
          className="w-9 h-9 mr-3.75"
          width={100}
          height={100}
        />
        <p className="text-[17px] font-desc font-semibold w-40 h-7 text-white">
          Bahasa Indonesia
        </p>
      </div>
      <div className="flex items-center">
        <Image
          loading="lazy"
          src="/images/tingkat-pendidikan/matematika.webp"
          alt="Matematika"
          className="w-9 h-9 mr-3.75"
          width={100}
          height={100}
        />
        <p className="text-[17px] font-desc w-40 h-7 font-semibold text-white">
          Matematika
        </p>
      </div>
    </div>
  ),
  SMP: (
    <div className="flex flex-col items-center justify-center w-82 sm:w-95 top-33.75 h-49.5 bg-blue-900 rounded-[34px] p-4 my-4">
      <div className="flex items-center mb-4">
        <Image
          loading="lazy"
          src="/images/tingkat-pendidikan/bahasa-indonesia.webp"
          alt="Bahasa Indonesia"
          className="w-9 h-9 mr-3.75"
          width={100}
          height={100}
        />
        <p className="text-[17px] font-desc font-semibold w-40 h-7 text-white">
          Bahasa Indonesia
        </p>
      </div>
      <div className="flex items-center">
        <Image
          loading="lazy"
          src="/images/tingkat-pendidikan/matematika.webp"
          alt="Matematika"
          className="w-9 h-9 mr-3.75"
          width={100}
          height={100}
        />
        <p className="text-[17px] font-desc w-40 h-7 font-semibold text-white">
          Matematika
        </p>
      </div>
    </div>
  ),
  SMASMK: (
    <div className="flex flex-col items-center justify-center w-82 sm:w-95 top-33.75 min-h-49.5 bg-blue-900 rounded-[34px] p-4 my-4">
      <div className="flex items-center mb-3">
        <Image
          loading="lazy"
          src="/images/tingkat-pendidikan/bahasa-indonesia.webp"
          alt="Bahasa Indonesia"
          className="w-9 h-9 mr-3.75"
          width={100}
          height={100}
        />
        <p className="text-[17px] font-desc font-semibold w-45 text-white">
          Bahasa Indonesia
        </p>
      </div>
      <div className="flex items-center mb-3">
        <Image
          loading="lazy"
          src="/images/tingkat-pendidikan/matematika.webp"
          alt="Matematika"
          className="w-9 h-9 mr-3.75"
          width={100}
          height={100}
        />
        <p className="text-[17px] font-desc font-semibold w-45 text-white">
          Matematika
        </p>
      </div>
      <div className="flex items-center mb-3">
        <Image
          loading="lazy"
          src="/images/tingkat-pendidikan/kebumian.webp"
          alt="Mata Pelajaran Pilihan 1"
          className="w-9 h-9 mr-3.75"
          width={100}
          height={100}
        />
        <p className="text-[17px] font-desc font-semibold w-45 text-white leading-tight">
          Mata Pelajaran Pilihan 1
        </p>
      </div>
      <div className="flex items-center">
        <Image
          loading="lazy"
          src="/images/tingkat-pendidikan/ekonomi.webp"
          alt="Mata Pelajaran Pilihan 2"
          className="w-9 h-9 mr-3.75"
          width={100}
          height={100}
        />
        <p className="text-[17px] font-desc font-semibold w-45 text-white leading-tight">
          Mata Pelajaran Pilihan 2
        </p>
      </div>
    </div>
  ),
};

export default detailContent;

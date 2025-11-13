import Image from "next/image";

const detailContent = {
  SD: (
    <div className="flex flex-col items-center justify-center w-[328px] sm:w-[380px] top-[135px] h-[198px] bg-blue-900 rounded-[34px] p-4 my-4">
      <div className="flex items-center mb-4">
        <Image
          src="/images/tingkat-pendidikan/matematika.webp"
          alt="Matematika"
          className="w-10 h-10 mr-[45px]"
          width={100}
          height={100}
        />
        <p className="text-[24px] font-desc font-semibold w-[129px] h-7  text-white">
          Matematika
        </p>
      </div>
      <div className="flex items-center">
        <Image
          src="/images/tingkat-pendidikan/ipa.webp"
          alt="IPA"
          className="w-10 h-10 mr-[45px]"
          width={100}
          height={100}
        />
        <p className="text-[24px] font-desc w-[129px] h-7 font-semibold text-white">
          IPA
        </p>
      </div>
    </div>
  ),
  SMP: (
    <div className="flex flex-col items-center justify-center w-[328px] sm:w-[380px] top-[135px] h-[198px] bg-blue-900 rounded-[34px] p-4 my-4">
      <div className="flex items-center mb-4">
        <Image
          src="/images/tingkat-pendidikan/matematika.webp"
          alt="Matematika"
          className="w-10 h-10 mr-[45px]"
          width={100}
          height={100}
        />
        <p className="text-[24px] font-desc font-semibold w-[129px] h-7  text-white">
          Matematika
        </p>
      </div>
      <div className="flex items-center mb-4">
        <Image
          src="/images/tingkat-pendidikan/ipa.webp"
          alt="IPA"
          className="w-10 h-10 mr-[45px]"
          width={100}
          height={100}
        />
        <p className="text-[24px] font-desc w-[129px] h-7 font-semibold text-white">
          IPA
        </p>
      </div>
      <div className="flex items-center">
        <Image
          src="/images/tingkat-pendidikan/ips.webp"
          alt="IPS"
          className="w-10 h-10 mr-[45px]"
          width={100}
          height={100}
        />
        <p className="text-[24px] font-desc w-[129px] h-7 font-semibold text-white">
          IPS
        </p>
      </div>
    </div>
  ),
  SMA: (
    <div className="flex flex-col items-center justify-center w-[328px] sm:w-[380px] top-[135px] min-h-[198px] bg-blue-900 rounded-[34px] p-4 my-4">
      <div className="flex items-center mb-4">
        <Image
          src="/images/tingkat-pendidikan/matematika.webp"
          alt="Matematika"
          className="w-10 h-10 mr-[45px]"
          width={100}
          height={100}
        />
        <p className="text-[24px] font-desc font-semibold w-[129px] h-7  text-white">
          Matematika
        </p>
      </div>
      <div className="flex items-center mb-4">
        <Image
          src="/images/tingkat-pendidikan/fisika.webp"
          alt="IPA"
          className="w-10 h-10 mr-[45px]"
          width={100}
          height={100}
        />
        <p className="text-[24px] font-desc w-[129px] h-7 font-semibold text-white">
          Fisika
        </p>
      </div>
      <div className="flex items-center mb-4">
        <Image
          src="/images/tingkat-pendidikan/kimia.webp"
          alt="IPS"
          className="w-10 h-10 mr-[45px]"
          width={100}
          height={100}
        />
        <p className="text-[24px] font-desc w-[129px] h-7 font-semibold text-white">
          Kimia
        </p>
      </div>
      <div className="flex items-center mb-4">
        <Image
          src="/images/tingkat-pendidikan/biologi.webp"
          alt="IPA"
          className="w-10 h-10 mr-[45px]"
          width={100}
          height={100}
        />
        <p className="text-[24px] font-desc w-[129px] h-7 font-semibold text-white">
          Biologi
        </p>
      </div>
      <div className="flex items-center mb-4">
        <Image
          src="/images/tingkat-pendidikan/informatika.webp"
          alt="IPS"
          className="w-10 h-10 mr-[45px]"
          width={100}
          height={100}
        />
        <p className="text-[24px] font-desc w-[129px] h-7 font-semibold text-white">
          Informatika
        </p>
      </div>
      <div className="flex items-center mb-4">
        <Image
          src="/images/tingkat-pendidikan/astronomi.webp"
          alt="IPA"
          className="w-10 h-10 mr-[45px]"
          width={100}
          height={100}
        />
        <p className="text-[24px] font-desc w-[129px] h-7 font-semibold text-white">
          Astronomi
        </p>
      </div>
      <div className="flex items-center mb-4">
        <Image
          src="/images/tingkat-pendidikan/ekonomi.webp"
          alt="IPS"
          className="w-10 h-10 mr-[45px]"
          width={100}
          height={100}
        />
        <p className="text-[24px] font-desc w-[129px] h-7 font-semibold text-white">
          Ekonomi
        </p>
      </div>
      <div className="flex items-center mb-4">
        <Image
          src="/images/tingkat-pendidikan/kebumian.webp"
          alt="IPA"
          className="w-10 h-10 mr-[45px]"
          width={100}
          height={100}
        />
        <p className="text-[24px] font-desc w-[129px] h-7 font-semibold text-white">
          Kebumian
        </p>
      </div>
      <div className="flex items-center">
        <Image
          src="/images/tingkat-pendidikan/geografi.webp"
          alt="IPS"
          className="w-10 h-10 mr-[45px]"
          width={100}
          height={100}
        />
        <p className="text-[24px] font-desc w-[129px] h-7 font-semibold text-white">
          Geografi
        </p>
      </div>
    </div>
  ),
};

export default detailContent;

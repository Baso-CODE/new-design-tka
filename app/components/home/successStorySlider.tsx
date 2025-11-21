import { getDataSuccessStoryDummy } from "@/app/lib/getDummyDataRequest/getSuccessStoryDummy.request";
import { imageUrlClient } from "@/app/utils/imageUrlClient";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default async function SuccessStorySlider() {
  const successStories = await getDataSuccessStoryDummy();

  if (successStories.length === 0) return null;

  return (
    <section className="py-8 sm:py-12 overflow-hidden bg-linear-to-r from-[#04397d] to-[#023ea9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold font-title text-white text-center mb-4 sm:mb-6 drop-shadow-md">
          Kisah Sukses Alumni Kami
        </h2>

        <p className="text-lg sm:text-xl text-white text-center mb-8 sm:mb-12 max-w-3xl mx-auto opacity-90 leading-normal font-desc">
          Mereka adalah bukti nyata keberhasilan program bimbingan kami.
          Bergabunglah dengan Edumatrix Indonesia dan jadilah kisah sukses
          berikutnya!
        </p>

        <div className="overflow-hidden whitespace-nowrap py-4">
          <Marquee
            direction="left"
            speed={50}
            pauseOnHover
            gradient
            gradientColor="4,57,125"
          >
            {successStories.map((story) => (
              <div key={story.id} className="inline-block mx-4">
                <Image
                  src={`${imageUrlClient}/succesStory-images/${story.image}`}
                  alt={story.participantName}
                  width={400}
                  height={600}
                  className="rounded-md w-auto h-100 sm:h-100 object-cover shadow-lg"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

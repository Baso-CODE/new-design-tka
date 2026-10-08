import { dummyContactCsData } from "@/app/components/data/contactCs.dummyData";
import Accordion from "@/app/components/faq/Accordion";
import AsalSekolahSiswaEdumatrix from "@/app/components/home/asalSekolahSiswaEdumatrix";
import Contact from "@/app/components/home/contact";
import Gallery from "@/app/components/home/gallery";
import GoldenTicketSection from "@/app/components/home/goldenTicket";
import HeroKotaTka from "@/app/components/home/heroKotaTKA";
import JumlahSiswa from "@/app/components/home/jumlahSiswa";
import MengapaHarusEdumatrix from "@/app/components/home/mengapaHarusEdumatrix";
import PaketBelajarTKA from "@/app/components/home/paketBelajarOSN";
import Pengajar from "@/app/components/home/pengajar";
import Program from "@/app/components/home/programBelajar";
import SuccessStoryGrid from "@/app/components/home/successStoryGrid";
import TestimoniGrid from "@/app/components/home/testimoniNotSlider";
import TKAPreparation from "@/app/components/home/tkaPreparation";
import ListKecamatan from "@/app/components/listKecamatan";
import MediaMassa from "@/app/components/mediaMassa/mediaMassa";
import PilihanMetode from "@/app/components/pilihanMetode";
import SliderDesktop from "@/app/components/slider/sliderDescktop";
import SliderMobile from "@/app/components/slider/sliderMobile";
import ImpactStatisticsOSN from "@/app/components/statisticOSNEdumatrix/statisticOSNEDM";
import { formatSlugToTitle } from "@/app/utils/formatSlugName";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ kotaSlug: string; kabupatenSlug: string }>;
}) {
  const { kotaSlug, kabupatenSlug } = await params;

  const kotaName = formatSlugToTitle(kotaSlug);
  const kabupatenName = formatSlugToTitle(kabupatenSlug);

  // Menggunakan Environment Variable untuk base URL
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://bimbeljuaratka.com";
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Edumatrix Indonesia";

  const canonicalUrl = `${baseUrl}/bimbel-tka-di-kota/${kotaSlug}/${kabupatenSlug}`;

  // Pastikan imageUrl menggunakan baseUrl agar selalu konsisten dengan domain
  const imageUrl = `${baseUrl}/images/tka/hero-tka.webp`;

  const title = `Bimbel & Les Privat TKA di ${kabupatenName} SD SMP SMA Terbaik`;
  const description = `Les Privat dan Bimbel Tes Kemampuan Akademik (TKA) di ${kabupatenName} untuk tingkat SD, SMP & SMA. Persiapan intensif untuk menembus sekolah unggulan. Mentor Berpengalaman & Program Eksklusif.`;

  return {
    metadataBase: new URL(baseUrl),
    title,
    description,

    keywords: [
      `les privat tka ${kotaName}`,
      `bimbel tka ${kotaName}`,
      `les privat tka ${kabupatenName}`,
      `bimbel tka ${kabupatenName}`,
      `les tes kemampuan akademik ${kabupatenName}`,
      `bimbel masuk sma unggulan ${kabupatenName}`,
      `bimbel masuk smp unggulan ${kabupatenName}`,
      `les tka SD ${kabupatenName}`,
      `les tka SMP ${kabupatenName}`,
      `les tka SMA ${kabupatenName}`,
      "TKA SD",
      "TKA SMP",
      "TKA SMA",
      "tes kemampuan akademik",
      "les privat TKA SD",
      "les privat TKA SMP",
      "les privat TKA SMA",
      "bimbel TKA SD SMP SMA",
      "bimbel tka terbaik",
      "guru privat tka",
      "edumatrix indonesia",
    ],
    robots:
      "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",

    alternates: { canonical: canonicalUrl },

    openGraph: {
      type: "article",
      locale: "id_ID",
      title,
      description,
      url: canonicalUrl,
      siteName: siteName,
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 600,
          alt: `Les privat TKA di ${kabupatenName}`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function KabupatenPage({
  params,
}: {
  params: Promise<{ kotaSlug: string; kabupatenSlug: string }>;
}) {
  const { kotaSlug, kabupatenSlug } = await params;

  const kotaName = formatSlugToTitle(kotaSlug);
  const kabupatenName = formatSlugToTitle(kabupatenSlug);

  // Menggunakan Environment Variable untuk base URL
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://bimbeljuaratka.com";
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Edumatrix Indonesia";

  const canonicalUrl = `${baseUrl}/bimbel-tka-di-kota/${kotaSlug}/${kabupatenSlug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: { "@id": baseUrl, name: "Home" },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@id": `${baseUrl}/bimbel-tka-terbaik`,
              name: "Bimbel & Les Privat TKA",
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@id": `${baseUrl}/bimbel-tka-di-kota/${kotaSlug}`,
              name: `Les Privat TKA di ${kotaName}`,
            },
          },
          {
            "@type": "ListItem",
            position: 4,
            item: {
              "@id": canonicalUrl,
              name: `Les Privat TKA di ${kabupatenName}`,
            },
          },
        ],
      },

      {
        "@type": "EducationalOrganization",
        "@id": `${canonicalUrl}#organization`,
        name: siteName,
        url: baseUrl,
        areaServed: kabupatenName,
        description: `${siteName} adalah penyedia Les Privat TKA (Tes Kemampuan Akademik) terbaik di ${kabupatenName}.`,
        sameAs: [
          baseUrl,
          "https://www.instagram.com/edumatrix.indonesia/",
          "https://www.youtube.com/@EdumatrixIndonesia",
        ],
        brand: {
          "@type": "Brand",
          name: siteName,
          logo: `${baseUrl}/images/logo.webp`,
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+62-812-1552-3902",
          contactType: "Customer Service",
        },
        keywords: `
les privat tka ${kabupatenName},
bimbel tka ${kabupatenName},
les tka ${kabupatenName},
les privat masuk sma unggulan ${kabupatenName},
les tka sd ${kabupatenName},
les tka smp ${kabupatenName},
les tka sma ${kabupatenName},
tes kemampuan akademik,
bimbel tka terbaik,
guru privat tka,
edumatrix indonesia
`,
      },

      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: `Les Privat TKA di ${kabupatenName}`,
        description: `Les Privat & Bimbel TKA terbaik di ${kabupatenName} untuk menembus sekolah impian.`,
      },

      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: `Apakah ada pengajar TKA di Edumatrix ${kabupatenName}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: "Ya, pengajar kami adalah guru dan dosen profesional yang terbiasa membimbing siswa menembus tes sekolah unggulan.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="overflow-hidden">
        {/* Menggunakan HeroKotaTka tanpa prop fotoKota */}
        <HeroKotaTka kotaName={kabupatenName} contacts={dummyContactCsData} />
        <JumlahSiswa />
        <Program />
        <TKAPreparation />
        <PaketBelajarTKA />
        <SliderMobile />
        <SliderDesktop />
        {/* <YouTubeShortEmbed /> */}
        {/* 
      <TingkatPendidikan /> */}
        <PilihanMetode />
        <MengapaHarusEdumatrix />
        <Pengajar />
        <Gallery />
        <SuccessStoryGrid />
        <TestimoniGrid />
        <GoldenTicketSection />
        <AsalSekolahSiswaEdumatrix />
        <ListKecamatan
          kotaSlug={kotaSlug}
          kabupatenName={kabupatenName}
          kabupatenSlug={kabupatenSlug}
        />
        <ImpactStatisticsOSN />
        <Accordion />
        {/* <Promo /> */}
        <Contact />
        <MediaMassa />
        {/* <FomoTicker namaWilayah={kabupatenName} /> */}
      </div>
    </>
  );
}

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
import ListKelurahan from "@/app/components/listKelurahan";
import MediaMassa from "@/app/components/mediaMassa/mediaMassa";
import PilihanMetode from "@/app/components/pilihanMetode";
import SliderDesktop from "@/app/components/slider/sliderDescktop";
import SliderMobile from "@/app/components/slider/sliderMobile";
import ImpactStatisticsOSN from "@/app/components/statisticOSNEdumatrix/statisticOSNEDM";

import { formatSlugToTitle } from "@/app/utils/formatSlugName";

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    kotaSlug: string;
    kabupatenSlug: string;
    kecamatanSlug: string;
  }>;
}) {
  const { kotaSlug, kabupatenSlug, kecamatanSlug } = await params;

  const kotaName = formatSlugToTitle(kotaSlug);
  const kabupatenName = formatSlugToTitle(kabupatenSlug);
  const kecamatanName = formatSlugToTitle(kecamatanSlug);

  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://bimbeljuaratka.com";
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Edumatrix Indonesia";

  const canonicalUrl = `${baseUrl}/bimbel-tka-di-kota/${kotaSlug}/${kabupatenSlug}/${kecamatanSlug}/`;
  const imageUrl = `${baseUrl}/images/tka/hero-tka.webp`;

  const title = `Bimbel les privat TKA SD SMP SMA terdekat di ${kecamatanName} Terbaik`;
  const description = `${title}. Program pendampingan Tes Kemampuan Akademik (TKA) intensif dengan sistem privat ke rumah maupun online. Mentor Terpilih • Latihan Soal HOTS • Laporan Evaluasi Berkala!`;

  const keywords = [
    `les privat tka ${kecamatanName}`,
    `bimbel tka ${kecamatanName}`,
    `les tes kemampuan akademik ${kecamatanName}`,
    `bimbel masuk sma unggulan ${kecamatanName}`,
    `bimbel masuk smp unggulan ${kecamatanName}`,
    `les tka SD ${kecamatanName}`,
    `les tka SMP ${kecamatanName}`,
    `les tka SMA ${kecamatanName}`,
    `les privat tka ${kabupatenName}`,
    `bimbel tka ${kabupatenName}`,
    `les tka SD SMP SMA ${kabupatenName}`,
    `les privat tka ${kotaName}`,
    `bimbel tka ${kotaName}`,
    `les tka SD SMP SMA ${kotaName}`,
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
  ];

  return {
    metadataBase: new URL(baseUrl),
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    robots:
      "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
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
          alt: `Les privat TKA di ${kecamatanName}`,
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
export default async function KecamatanPage(props: {
  params: Promise<{
    kotaSlug: string;
    kabupatenSlug: string;
    kecamatanSlug: string;
  }>;
}) {
  const { kotaSlug, kabupatenSlug, kecamatanSlug } = await props.params;

  const kotaName = formatSlugToTitle(kotaSlug);
  const kabupatenName = formatSlugToTitle(kabupatenSlug);
  const kecamatanName = formatSlugToTitle(kecamatanSlug);

  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://bimbeljuaratka.com";
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Edumatrix Indonesia";

  const canonicalUrl = `${baseUrl}/bimbel-tka-di-kota/${kotaSlug}/${kabupatenSlug}/${kecamatanSlug}/`;

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
              "@id": `${baseUrl}/bimbel-tka-di-kota/${kotaSlug}/${kabupatenSlug}`,
              name: `Les Privat TKA di ${kabupatenName}`,
            },
          },
          {
            "@type": "ListItem",
            position: 5,
            item: {
              "@id": canonicalUrl,
              name: `Les Privat TKA di ${kecamatanName}`,
            },
          },
        ],
      },

      {
        "@type": "EducationalOrganization",
        "@id": `${canonicalUrl}#organization`,
        name: siteName,
        description: `${siteName} adalah penyedia Les Privat TKA (Tes Kemampuan Akademik) terbaik di ${kecamatanName}.`,
        url: baseUrl,
        areaServed: `${kecamatanName}, ${kabupatenName}`,
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
les privat tka ${kecamatanName},
bimbel tka ${kecamatanName},
les tka ${kecamatanName},
les privat masuk sma unggulan ${kecamatanName},
les tka sd ${kecamatanName},
les tka smp ${kecamatanName},
les tka sma ${kecamatanName},
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
        name: `Les Privat TKA di ${kecamatanName}`,
        description: `Les Privat & Bimbel TKA terbaik di ${kecamatanName} untuk menembus sekolah impian.`,
        inLanguage: "id-ID",
        isPartOf: { "@id": baseUrl },
      },

      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: `Apakah Les Privat TKA tersedia di seluruh wilayah ${kecamatanName}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Ya, layanan bimbingan belajar TKA tersedia untuk seluruh wilayah di ${kecamatanName}, baik les privat online maupun tatap muka (offline).`,
            },
          },
          {
            "@type": "Question",
            name: `Berapa biaya les privat TKA di ${kecamatanName}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Biaya disesuaikan dengan jenjang pendidikan (SD/SMP/SMA) & paket belajar yang dipilih. Silakan hubungi CS kami untuk konsultasi.`,
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <div className="overflow-hidden">
        {/* Menggunakan HeroKotaTka dan mem-passing kecamatanName sebagai kotaName */}
        <HeroKotaTka kotaName={kecamatanName} contacts={dummyContactCsData} />

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
        <ListKelurahan
          kecamatanName={kecamatanName}
          kecamatanSlug={kecamatanSlug}
          kabupatenSlug={kabupatenSlug}
          kotaSlug={kotaSlug}
        />

        <ImpactStatisticsOSN />
        <Accordion />
        {/* <Promo /> */}
        <Contact />
        <MediaMassa />
        {/* <FomoTicker namaWilayah={kecamatanName} /> */}
      </div>
    </>
  );
}

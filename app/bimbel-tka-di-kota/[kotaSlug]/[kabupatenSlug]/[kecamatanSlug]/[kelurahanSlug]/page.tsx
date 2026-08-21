import { dummyContactCsData } from "@/app/components/data/contactCs.dummyData";
import Accordion from "@/app/components/faq/Accordion";
import FomoTicker from "@/app/components/fomoTicker";
import AsalSekolahSiswaEdumatrix from "@/app/components/home/asalSekolahSiswaEdumatrix";
import Contact from "@/app/components/home/contact";
import Gallery from "@/app/components/home/gallery";
import HeroKotaTka from "@/app/components/home/heroKotaTKA";
import JumlahSiswa from "@/app/components/home/jumlahSiswa";
import MengapaHarusEdumatrix from "@/app/components/home/mengapaHarusEdumatrix";
import PaketBelajarTKA from "@/app/components/home/paketBelajarOSN";
import Pengajar from "@/app/components/home/pengajar";
import Pilihan from "@/app/components/home/pilihan";
import Program from "@/app/components/home/programBelajar";
import SekolahSiswa from "@/app/components/home/sekolahSiswa";
import TestimoniGrid from "@/app/components/home/testimoniNotSlider";
import TingkatPendidikan from "@/app/components/home/tingkatPendidikan";
import TKAPreparation from "@/app/components/home/tkaPreparation";
import MediaMassa from "@/app/components/mediaMassa/mediaMassa";
import Promo from "@/app/components/promo";
import SliderDesktop from "@/app/components/slider/sliderDescktop";
import SliderMobile from "@/app/components/slider/sliderMobile";
import ImpactStatisticsOSN from "@/app/components/statisticOSNEdumatrix/statisticOSNEDM";
import YouTubeShortEmbed from "@/app/components/YouTubeShortEmbed";
import { formatSlugToTitle } from "@/app/utils/formatSlugName";
const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://bimbeljuaratka.com";
const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Edumatrix Indonesia";

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    kotaSlug: string;
    kabupatenSlug: string;
    kecamatanSlug: string;
    kelurahanSlug: string;
  }>;
}) {
  const { kotaSlug, kabupatenSlug, kecamatanSlug, kelurahanSlug } =
    await params;

  const kotaName = formatSlugToTitle(kotaSlug);
  const kabupatenName = formatSlugToTitle(kabupatenSlug);
  const kecamatanName = formatSlugToTitle(kecamatanSlug);
  const kelurahanName = formatSlugToTitle(kelurahanSlug);

  const canonicalUrl = `${baseUrl}/bimbel-tka-di-kota/${kotaSlug}/${kabupatenSlug}/${kecamatanSlug}/${kelurahanSlug}/`;

  const imageUrl = `${baseUrl}/images/tka/hero-tka.webp`;

  const title = `Bimbel & Les Privat TKA di ${kelurahanName} SD SMP SMA Terbaik`;
  const description = `Les Privat dan Bimbel Tes Kemampuan Akademik (TKA) di ${kelurahanName} untuk tingkat SD, SMP & SMA. Persiapan intensif untuk menembus sekolah unggulan. Mentor Berpengalaman & Program Eksklusif.`;
  const keywords = [
    `les privat tka ${kelurahanName}`,
    `bimbel tka ${kelurahanName}`,
    `les tes kemampuan akademik ${kelurahanName}`,
    `bimbel masuk sma unggulan ${kelurahanName}`,
    `bimbel masuk smp unggulan ${kelurahanName}`,
    `les tka SD ${kelurahanName}`,
    `les tka SMP ${kelurahanName}`,
    `les tka SMA ${kelurahanName}`,
    `les privat tka ${kecamatanName}`,
    `bimbel tka ${kecamatanName}`,
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
          alt: `Les privat TKA di ${kelurahanName}`,
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

export default async function KelurahanPage(props: {
  params: Promise<{
    kotaSlug: string;
    kabupatenSlug: string;
    kecamatanSlug: string;
    kelurahanSlug: string;
  }>;
}) {
  const { kotaSlug, kabupatenSlug, kecamatanSlug, kelurahanSlug } =
    await props.params;

  const kotaName = formatSlugToTitle(kotaSlug);
  const kabupatenName = formatSlugToTitle(kabupatenSlug);
  const kecamatanName = formatSlugToTitle(kecamatanSlug);
  const kelurahanName = formatSlugToTitle(kelurahanSlug);

  const canonicalUrl = `${baseUrl}/bimbel-tka-di-kota/${kotaSlug}/${kabupatenSlug}/${kecamatanSlug}/${kelurahanSlug}/`;

  // ========== JSON-LD =============
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
              "@id": `${baseUrl}/bimbel-tka-di-kota/${kotaSlug}/${kabupatenSlug}/${kecamatanSlug}`,
              name: `Les Privat TKA di ${kecamatanName}`,
            },
          },
          {
            "@type": "ListItem",
            position: 6,
            item: {
              "@id": canonicalUrl,
              name: `Les Privat TKA di ${kelurahanName}`,
            },
          },
        ],
      },

      {
        "@type": "EducationalOrganization",
        "@id": `${canonicalUrl}#organization`,
        name: siteName,
        description: `${siteName} adalah penyedia Les Privat TKA (Tes Kemampuan Akademik) terbaik di ${kelurahanName}, ${kecamatanName}.`,
        url: baseUrl,
        areaServed: `${kelurahanName}, ${kecamatanName}`,
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
les privat tka ${kelurahanName},
bimbel tka ${kelurahanName},
les tka ${kelurahanName},
les privat masuk sma unggulan ${kelurahanName},
les tka sd ${kelurahanName},
les tka smp ${kelurahanName},
les tka sma ${kelurahanName},
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
        name: `Les Privat TKA di ${kelurahanName}`,
        description: `Les Privat & Bimbel TKA terbaik di ${kelurahanName} untuk menembus sekolah impian.`,
        inLanguage: "id-ID",
        isPartOf: { "@id": baseUrl },
      },

      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: `Apakah Les Privat TKA tersedia di seluruh wilayah ${kelurahanName}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Ya, layanan bimbingan belajar TKA tersedia untuk seluruh wilayah di ${kelurahanName}, baik les privat online maupun tatap muka (offline).`,
            },
          },
          {
            "@type": "Question",
            name: `Berapa biaya les privat TKA di ${kelurahanName}?`,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="overflow-hidden">
        {/* Menggunakan HeroKotaTka dan mem-passing kelurahanName sebagai kotaName */}
        <HeroKotaTka kotaName={kelurahanName} contacts={dummyContactCsData} />
        <JumlahSiswa />
        <TKAPreparation />
        <Program />
        <YouTubeShortEmbed />
        <PaketBelajarTKA />
        <SliderMobile />
        <SliderDesktop />
        <TingkatPendidikan />
        <Pilihan />
        <MengapaHarusEdumatrix />
        <Pengajar />

        <Gallery />
        <TestimoniGrid />
        <AsalSekolahSiswaEdumatrix />
        <SekolahSiswa />

        <ImpactStatisticsOSN />
        <Accordion />
        <Promo />
        <Contact />
        <MediaMassa />
        <FomoTicker namaWilayah={kelurahanName} />
      </div>
    </>
  );
}

import { dummyContactCsData } from "@/app/components/data/contactCs.dummyData";
import Accordion from "@/app/components/faq/Accordion";
import FomoTicker from "@/app/components/fomoTicker";
import AsalSekolahSiswaEdumatrix from "@/app/components/home/asalSekolahSiswaEdumatrix";
import Contact from "@/app/components/home/contact";
import Gallery from "@/app/components/home/gallery";
import HeroKotaTka from "@/app/components/home/heroKotaTKA";
import JumlahSiswa from "@/app/components/home/jumlahSiswa";
import MengapaHarusEdumatrix from "@/app/components/home/mengapaHarusEdumatrix";
import PaketBelajarOSN from "@/app/components/home/paketBelajarOSN";
import Pengajar from "@/app/components/home/pengajar";
import Pilihan from "@/app/components/home/pilihan";
import Program from "@/app/components/home/programBelajar";
import SekolahSiswa from "@/app/components/home/sekolahSiswa";
import TingkatPendidikan from "@/app/components/home/tingkatPendidikan";
import TKAPreparation from "@/app/components/home/tkaPreparation";
import ListKabupaten from "@/app/components/lisKabupaten";
import MediaMassa from "@/app/components/mediaMassa/mediaMassa";
import Promo from "@/app/components/promo";
import ImpactStatisticsOSN from "@/app/components/statisticOSNEdumatrix/statisticOSNEDM";
import YouTubeShortEmbed from "@/app/components/YouTubeShortEmbed";
import { formatSlugToTitle } from "@/app/utils/formatSlugName";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ kotaSlug: string }>;
}) {
  const { kotaSlug } = await params;

  const formattedKotaName = formatSlugToTitle(kotaSlug);

  const baseUrl = "https://les-tka.bimbeledumatrix.com";
  const canonicalUrl = `${baseUrl}/bimbel-tka-di-kota/${kotaSlug}`;

  const imageUrl =
    "https://les-tka.bimbeledumatrix.com/images/tka/hero-tka.webp";

  const ogTitle = `Bimbel & Les Privat TKA di ${formattedKotaName} SD SMP SMA Terbaik`;
  const ogDescription = `Les Privat dan Bimbel Tes Kemampuan Akademik (TKA) di ${formattedKotaName} untuk tingkat SD, SMP & SMA. Persiapan intensif untuk menembus sekolah unggulan. Mentor Berpengalaman • Program Eksklusif • Laporan Perkembangan • Daftar Sekarang!`;

  return {
    metadataBase: new URL(baseUrl),
    title: ogTitle,
    description: ogDescription,
    keywords: [
      `les privat tka ${formattedKotaName}`,
      `bimbel tka ${formattedKotaName}`,
      `les tes kemampuan akademik ${formattedKotaName}`,
      `bimbel masuk sma unggulan ${formattedKotaName}`,
      `bimbel masuk smp unggulan ${formattedKotaName}`,
      `les tka SD ${formattedKotaName}`,
      `les tka SMP ${formattedKotaName}`,
      `les tka SMA ${formattedKotaName}`,
      "TKA SD",
      "TKA SMP",
      "TKA SMA",
      "tes kemampuan akademik",
      "les privat TKA SD",
      "les privat TKA SMP",
      "les privat TKA SMA",
      "bimbel TKA SD SMP SMA",
      "les tka SD",
      "les tka SMP",
      "les tka SMA",
      "bimbel tka terbaik",
      "guru privat tka",
      "edumatrix indonesia",
    ],
    robots:
      "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      type: "article",
      locale: "id_ID",
      url: canonicalUrl,
      siteName: "Edumatrix Indonesia",
      title: ogTitle,
      description: ogDescription,
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 600,
          alt: `les privat tka ${formattedKotaName}`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: [imageUrl],
    },
  };
}

export default async function KotaPage(props: {
  params: Promise<{ kotaSlug: string }>;
}) {
  const { kotaSlug } = await props.params;

  const formattedKotaName = formatSlugToTitle(kotaSlug);

  const baseUrl = "https://les-tka.bimbeledumatrix.com";
  const canonicalUrl = `${baseUrl}/bimbel-tka-di-kota/${kotaSlug}`;

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
            item: { "@id": `${baseUrl}`, name: "Home" },
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
              "@id": canonicalUrl,
              name: `Les Privat TKA di ${formattedKotaName}`,
            },
          },
        ],
      },

      {
        "@type": "EducationalOrganization",
        "@id": `${canonicalUrl}#organization`,
        name: "Edumatrix Indonesia",
        description: `Edumatrix Indonesia adalah penyedia Les Privat TKA (Tes Kemampuan Akademik) terbaik di ${formattedKotaName}.`,
        url: baseUrl,
        areaServed: formattedKotaName,
        sameAs: [
          baseUrl,
          "https://www.instagram.com/edumatrix.indonesia/",
          "https://www.youtube.com/@EdumatrixIndonesia",
        ],
        brand: {
          "@type": "Brand",
          name: "Edumatrix Indonesia",
          logo: `${baseUrl}/images/logo.webp`,
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+62-812-1552-3902",
          contactType: "Customer Service",
          areaServed: "ID",
          availableLanguage: ["Indonesian", "English"],
        },
        keywords: `
les privat tka ${formattedKotaName},
bimbel tka ${formattedKotaName},
les tka ${formattedKotaName},
les privat masuk sma unggulan ${formattedKotaName},
les tka sd ${formattedKotaName},
les tka smp ${formattedKotaName},
les tka sma ${formattedKotaName},
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
        name: `Les Privat TKA di ${formattedKotaName}`,
        inLanguage: "id-ID",
        description: `Les Privat & Bimbel TKA terbaik di ${formattedKotaName} untuk menembus sekolah impian.`,
      },

      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: `Apakah Les Privat TKA tersedia di seluruh wilayah ${formattedKotaName}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Ya, layanan bimbingan belajar TKA tersedia untuk seluruh wilayah di ${formattedKotaName}, baik les privat online maupun tatap muka (offline).`,
            },
          },
          {
            "@type": "Question",
            name: `Berapa biaya les privat TKA di ${formattedKotaName}?`,
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
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="overflow-hidden">
        <HeroKotaTka
          kotaName={formattedKotaName}
          contacts={dummyContactCsData}
        />
        <JumlahSiswa />
        <TKAPreparation />
        <Program />
        <YouTubeShortEmbed />
        <PaketBelajarOSN />
        <TingkatPendidikan />
        <Pilihan />
        <MengapaHarusEdumatrix />
        <Pengajar />
        <Gallery />
        <AsalSekolahSiswaEdumatrix />
        <SekolahSiswa />
        <ListKabupaten kotaName={formattedKotaName} kotaSlug={kotaSlug} />
        <ImpactStatisticsOSN />
        <Accordion />
        <Promo />
        <Contact />
        <MediaMassa />
        <FomoTicker namaWilayah={formattedKotaName} />
      </div>
    </>
  );
}

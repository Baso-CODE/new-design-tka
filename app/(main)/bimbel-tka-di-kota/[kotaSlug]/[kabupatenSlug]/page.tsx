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
import ListKecamatan from "@/app/components/listKecamatan";
import MediaMassa from "@/app/components/mediaMassa/mediaMassa";
import Promo from "@/app/components/promo";
import ImpactStatisticsOSN from "@/app/components/statisticOSNEdumatrix/statisticOSNEDM";
import YouTubeShortEmbed from "@/app/components/YouTubeShortEmbed";

import { formatSlugToTitle } from "@/app/utils/formatSlugName";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ kotaSlug: string; kabupatenSlug: string }>;
}) {
  const { kotaSlug, kabupatenSlug } = await params;

  const kotaName = formatSlugToTitle(kotaSlug);
  const kabupatenName = formatSlugToTitle(kabupatenSlug);

  const baseUrl = "https://les-tka.bimbeledumatrix.com";
  const canonicalUrl = `${baseUrl}/bimbel-tka-di-kota/${kotaSlug}/${kabupatenSlug}`;

  const imageUrl =
    "https://les-tka.bimbeledumatrix.com/images/tka/hero-tka.png";

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
      siteName: "Edumatrix Indonesia",
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

  const baseUrl = "https://les-tka.bimbeledumatrix.com";
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
        name: "Edumatrix Indonesia",
        url: baseUrl,
        areaServed: kabupatenName,
        description: `Edumatrix Indonesia adalah penyedia Les Privat TKA (Tes Kemampuan Akademik) terbaik di ${kabupatenName}.`,
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

        <ListKecamatan
          kotaSlug={kotaSlug}
          kabupatenName={kabupatenName}
          kabupatenSlug={kabupatenSlug}
        />

        <ImpactStatisticsOSN />
        <Accordion />
        <Promo />
        <Contact />
        <MediaMassa />
        <FomoTicker namaWilayah={kabupatenName} />
      </div>
    </>
  );
}

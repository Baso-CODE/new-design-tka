import { dummyContactCsData } from "@/app/components/data/contactCs.dummyData";
import Accordion from "@/app/components/faq/Accordion";
import Features from "@/app/components/features";
import FomoTicker from "@/app/components/fomoTicker";
import GoldenTicketShowcase from "@/app/components/goldenTicket";
import HeroKecamatan from "@/app/components/heroKecamatan";
import AsalSekolahSiswaEdumatrix from "@/app/components/home/asalSekolahSiswaEdumatrix";
import Contact from "@/app/components/home/contact";
import Gallery from "@/app/components/home/gallery";
import JumlahSiswa from "@/app/components/home/jumlahSiswa";
import ListSiswa from "@/app/components/home/listSiswa";
import MengapaHarusEdumatrix from "@/app/components/home/mengapaHarusEdumatrix";
import PaketBelajarOSN from "@/app/components/home/paketBelajarOSN";
import Pengajar from "@/app/components/home/pengajar";
import Pilihan from "@/app/components/home/pilihan";
import Program from "@/app/components/home/programBelajar";
import SekolahSiswa from "@/app/components/home/sekolahSiswa";
import SuccessStoryGrid from "@/app/components/home/successStoryNotSlider";
import TestimoniGrid from "@/app/components/home/testimoniNotSlider";
import TingkatPendidikan from "@/app/components/home/tingkatPendidikan";
import ListKelurahan from "@/app/components/listKelurahan";
import MediaMassa from "@/app/components/mediaMassa/mediaMassa";
import Promo from "@/app/components/promo";
import SliderDescktop from "@/app/components/slider/sliderDescktop";
import SliderMobile from "@/app/components/slider/sliderMobile";
import ImpactStatisticsOSN from "@/app/components/statisticOSNEdumatrix/statisticOSNEDM";
import TransformationOSN from "@/app/components/TransformationOSN";
import YouTubeShortEmbed from "@/app/components/YouTubeShortEmbed";

import { formatSlugToTitle } from "@/app/utils/formatSlugName";

const baseUrl = "https://bimbeledumatrix.com";

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

  const canonicalUrl = `${baseUrl}/bimbel-osn-imo-jismo-iso-ksn-di-kota/${kotaSlug}/${kabupatenSlug}/${kecamatanSlug}/`;

  const imageUrl = "https://bimbeledumatrix.com/images/osn-thumbnail.webp";

  const title = `Bimbel & Les Olimpiade OSN ISMO IMO JISMO ${kecamatanName} SD SMP SMA`;
  const description = `Bimbel Olimpiade ${kecamatanName} untuk OSN, KSN, OSP, OSK, ISMO, IMO, JISMO semua jenjang SD SMP SMA. Matematika, IPA, Fisika, Kimia, Biologi, Informatika, Astronomi, Geografi & Ekonomi. Program intensif dan privat terbaik.`;
  const keywords = [
    `les privat olimpiade ${kecamatanName}`,
    `bimbel olimpiade ${kecamatanName}`,
    `les OSN ${kecamatanName}`,
    `bimbel KSN ${kecamatanName}`,
    `les IMO ${kecamatanName}`,
    `bimbel ISMO ${kecamatanName}`,
    `bimbel JISMO ${kecamatanName}`,
    `les olimpiade SD ${kecamatanName}`,
    `les olimpiade SMP ${kecamatanName}`,
    `les olimpiade SMA ${kecamatanName}`,
    `olimpiade matematika ${kecamatanName}`,
    `olimpiade fisika ${kecamatanName}`,
    `olimpiade kimia ${kecamatanName}`,
    `olimpiade biologi ${kecamatanName}`,
    `olimpiade informatika ${kecamatanName}`,
    `olimpiade astronomi ${kecamatanName}`,
    `olimpiade geografi ${kecamatanName}`,
    `olimpiade ekonomi ${kecamatanName}`,
    `les privat olimpiade ${kabupatenName}`,
    `bimbel OSN ${kabupatenName}`,
    `bimbel KSN ${kabupatenName}`,
    `les olimpiade SD SMP SMA ${kabupatenName}`,
    `les privat olimpiade ${kotaName}`,
    `bimbel OSN ${kotaName}`,
    `bimbel KSN ${kotaName}`,
    `les olimpiade SD SMP SMA ${kotaName}`,
    "OSN SD SMP SMA",
    "KSN SD SMP SMA",
    "OSP",
    "OSK",
    "ISMO",
    "IMO",
    "JISMO",
    "olimpiade sains nasional",
    "kompetisi sains nasional",
    "olimpiade matematika internasional",
    "les privat olimpiade terbaik",
    "bimbel olimpiade terpercaya",
    "guru privat olimpiade",
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
      siteName: "Edumatrix Indonesia",
      images: [
        {
          url: imageUrl,
          width: 600,
          height: 600,
          alt: `Les privat Olimpiade ${kecamatanName}`,
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

  const canonicalUrl = `${baseUrl}/bimbel-osn-imo-jismo-iso-ksn-di-kota/${kotaSlug}/${kabupatenSlug}/${kecamatanSlug}/`;

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
              "@id": `${baseUrl}/bimbel-osn-imo-jismo-iso-ksn-terbaik`,
              name: "Bimbel & Les Privat Olimpiade",
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@id": `${baseUrl}/bimbel-osn-imo-jismo-iso-ksn-di-kota/${kotaSlug}`,
              name: `Les Privat Olimpiade di ${kotaName}`,
            },
          },
          {
            "@type": "ListItem",
            position: 4,
            item: {
              "@id": `${baseUrl}/bimbel-osn-imo-jismo-iso-ksn-di-kota/${kotaSlug}/${kabupatenSlug}`,
              name: `Les Privat Olimpiade di ${kabupatenName}`,
            },
          },
          {
            "@type": "ListItem",
            position: 5,
            item: {
              "@id": canonicalUrl,
              name: `Les Privat Olimpiade di ${kecamatanName}`,
            },
          },
        ],
      },

      {
        "@type": "EducationalOrganization",
        "@id": `${canonicalUrl}#organization`,
        name: "Edumatrix Indonesia",
        description: `Edumatrix Indonesia adalah penyedia Les Privat Olimpiade terbaik di ${kecamatanName}.`,
        url: baseUrl,
        areaServed: `${kecamatanName}, ${kabupatenName}`,
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
les privat olimpiade ${kecamatanName},
bimbel olimpiade ${kecamatanName},
les OSN ${kecamatanName},
bimbel KSN ${kecamatanName},
les ISMO ${kecamatanName},
les IMO ${kecamatanName},
bimbel JISMO ${kecamatanName},
les olimpiade SD ${kecamatanName},
les olimpiade SMP ${kecamatanName},
les olimpiade SMA ${kecamatanName},
olimpiade matematika ${kecamatanName},
olimpiade fisika ${kecamatanName},
olimpiade kimia ${kecamatanName},
olimpiade biologi ${kecamatanName},
olimpiade informatika ${kecamatanName},
OSN, KSN, OSP, OSK, ISMO, IMO, JISMO,
olimpiade sains nasional,
kompetisi sains nasional,
bimbel olimpiade terbaik,
guru privat olimpiade,
edumatrix indonesia
`,
      },

      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: `Les Privat Olimpiade ${kecamatanName}`,
        description: `Les Privat & Bimbel Olimpiade terbaik di ${kecamatanName}.`,
        inLanguage: "id-ID",
        isPartOf: { "@id": baseUrl },
      },

      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: `Apakah Les Privat Olimpiade tersedia di seluruh wilayah ${kecamatanName}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Ya, layanan tersedia untuk semua wilayah di ${kecamatanName}, baik les privat online maupun tatap muka.`,
            },
          },
          {
            "@type": "Question",
            name: `Berapa biaya les privat Olimpiade di ${kecamatanName}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Biaya disesuaikan jenjang & paket belajar. Silakan hubungi CS.`,
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
        {/* Kirim dummyContactCsData ke HeroKecamatan */}
        <HeroKecamatan
          kecamatanName={kecamatanName}
          contacts={dummyContactCsData}
        />

        <JumlahSiswa />
        <ListSiswa />
        <Program />
        <Features />
        <YouTubeShortEmbed />
        <PaketBelajarOSN />

        <SliderMobile />
        <SliderDescktop />

        <TingkatPendidikan />
        <Pilihan />
        <MengapaHarusEdumatrix />
        <Pengajar />

        <Gallery />
        <SuccessStoryGrid />
        <TestimoniGrid />
        <TransformationOSN />
        <GoldenTicketShowcase />
        <AsalSekolahSiswaEdumatrix />
        <SekolahSiswa />
        <ListKelurahan
          kecamatanName={kecamatanName}
          kecamatanSlug={kecamatanSlug}
          kabupatenSlug={kabupatenSlug}
          kotaSlug={kotaSlug}
        />

        <ImpactStatisticsOSN />
        <Accordion />
        <Promo />
        <Contact />
        <MediaMassa />
        <FomoTicker namaWilayah={kecamatanName} />
      </div>
    </>
  );
}

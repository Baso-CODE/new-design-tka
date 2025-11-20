import { fallbackContact } from "@/app/components/data/contactCs.dummyData";
import Accordion from "@/app/components/faq/Accordion";
import Features from "@/app/components/features";
import HeroKelurahan from "@/app/components/heroKelurahan";
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
import SuccessStorySlider from "@/app/components/home/successStorySlider";
import TingkatPendidikan from "@/app/components/home/tingkatPendidikan";
import MediaMassa from "@/app/components/mediaMassa/mediaMassa";
import Promo from "@/app/components/promo";
import SliderDescktop from "@/app/components/slider/sliderDescktop";
import SliderMobile from "@/app/components/slider/sliderMobile";
import ImpactStatisticsOSN from "@/app/components/statisticOSNEdumatrix/statisticOSNEDM";
import YouTubeShortEmbed from "@/app/components/YouTubeShortEmbed";
import { getSingleContactCsIsDeleted } from "@/app/request/contacts/getSingleIsDeletedContactCs";
import { formatSlugToTitle } from "@/app/utils/formatSlugName";

const baseUrl = "https://bimbeledumatrix.com";

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
  const {
    kotaSlug,
    kabupatenSlug,
    kecamatanSlug,
    kelurahanSlug,
  } = await params;

  const kotaName = formatSlugToTitle(kotaSlug);
  const kabupatenName = formatSlugToTitle(kabupatenSlug);
  const kecamatanName = formatSlugToTitle(kecamatanSlug);
  const kelurahanName = formatSlugToTitle(kelurahanSlug);

  const canonicalUrl = `${baseUrl}/bimbel-osn-imo-jismo-iso-ksn-di-kota/${kotaSlug}/${kabupatenSlug}/${kecamatanSlug}/${kelurahanSlug}/`;

  const imageUrl = `${baseUrl}/images/images-cta.webp`;

  const title = `📚 Les Privat Olimpiade ${kelurahanName} • OSN IMO ISO Unggulan`;
  const description = `Kursus Les Privat Olimpiade ${kelurahanName} Terbaik ✔️ Dibimbing GURU BERPENGALAMAN ✔️ Peraih Lisensi OSN ✔️ Garansi REPORT CARD ✍️ Daftar? Segera kunjungi situs kami...`;

  const keywords = [
    `les privat ${kelurahanName}`,
    `bimbel OSN ${kelurahanName}`,
    `les privat ${kecamatanName}`,
    `bimbel OSN ${kecamatanName}`,
    `les privat ${kabupatenName}`,
    `bimbel OSN ${kabupatenName}`,
    `les privat ${kotaName}`,
    `bimbel OSN ${kotaName}`,
    kotaName,
    kabupatenName,
    kecamatanName,
    kelurahanName,
    "osn",
    "imo",
    "jismo",
    "iso",
    "ksn",
    "les privat",
    "guru privat",
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
          width: 800,
          height: 600,
          alt: `Les privat Olimpiade ${kelurahanName}`,
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
  const {
    kotaSlug,
    kabupatenSlug,
    kecamatanSlug,
    kelurahanSlug,
  } = await props.params;

  const kotaName = formatSlugToTitle(kotaSlug);
  const kabupatenName = formatSlugToTitle(kabupatenSlug);
  const kecamatanName = formatSlugToTitle(kecamatanSlug);
  const kelurahanName = formatSlugToTitle(kelurahanSlug);

  let data = null;

  data = await getSingleContactCsIsDeleted();

  const contact = data || fallbackContact;
  const link = contact.link_cta || "/contact";
  const canonicalUrl = `${baseUrl}/bimbel-osn-imo-jismo-iso-ksn-di-kota/${kotaSlug}/${kabupatenSlug}/${kecamatanSlug}/${kelurahanSlug}`;

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
              "@id": `${baseUrl}/bimbel-osn-imo-jismo-iso-ksn-di-kota/${kotaSlug}/${kabupatenSlug}/${kecamatanSlug}`,
              name: `Les Privat Olimpiade di ${kecamatanName}`,
            },
          },
          {
            "@type": "ListItem",
            position: 6,
            item: {
              "@id": canonicalUrl,
              name: `Les Privat Olimpiade di ${kelurahanName}`,
            },
          },
        ],
      },

      {
        "@type": "EducationalOrganization",
        "@id": `${canonicalUrl}#organization`,
        name: "Edumatrix Indonesia",
        description: `Edumatrix Indonesia adalah penyedia Les Privat Olimpiade terbaik di ${kelurahanName}, ${kecamatanName}.`,
        url: baseUrl,
        areaServed: `${kelurahanName}, ${kecamatanName}`,
        sameAs: [
          baseUrl,
          "https://www.instagram.com/edumatrix.indonesia/",
          "https://www.youtube.com/@EdumatrixIndonesia",
        ],
        brand: {
          "@type": "Brand",
          name: "Edumatrix Indonesia",
          logo: `${baseUrl}/images/logo.png`,
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+62-812-1552-3902",
          contactType: "Customer Service",
        },
        keywords: `${kelurahanName}, olimpiade, bimbel, les privat`,
      },

      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: `Les Privat Olimpiade ${kelurahanName}`,
        description: `Les Privat & Bimbel Olimpiade terbaik di ${kelurahanName}.`,
        inLanguage: "id-ID",
        isPartOf: { "@id": baseUrl },
      },

      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: `Apakah Les Privat Olimpiade tersedia di seluruh wilayah ${kelurahanName}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Ya, layanan tersedia untuk semua wilayah di ${kelurahanName}, baik les privat online maupun tatap muka.`,
            },
          },
          {
            "@type": "Question",
            name: `Berapa biaya les privat Olimpiade di ${kelurahanName}?`,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroKelurahan kelurahanName={kelurahanName} linkCta={link} />
      <JumlahSiswa />
      <ListSiswa />
      <Program />
      <Features />
      <YouTubeShortEmbed />
      <PaketBelajarOSN />

      {/* SLIDERS */}
      <SliderMobile />
      <SliderDescktop />

      <TingkatPendidikan />
      <Pilihan />
      <MengapaHarusEdumatrix />
      <Pengajar />

      <Gallery />
      <SuccessStorySlider />
      <AsalSekolahSiswaEdumatrix />
      <SekolahSiswa />

      <ImpactStatisticsOSN />
      <Accordion />
      <Promo />
      <Contact />
      <MediaMassa />
    </>
  );
}

import { fallbackContact } from "@/app/components/data/contactCs.dummyData";
import Accordion from "@/app/components/faq/Accordion";
import Features from "@/app/components/features";
import GoldenTicketShowcase from "@/app/components/goldenTicket";
import HeroKota from "@/app/components/heroKota";
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
import ListKabupaten from "@/app/components/lisKabupaten";
import MediaMassa from "@/app/components/mediaMassa/mediaMassa";
import Promo from "@/app/components/promo";
import SliderDescktop from "@/app/components/slider/sliderDescktop";
import SliderMobile from "@/app/components/slider/sliderMobile";
import ImpactStatisticsOSN from "@/app/components/statisticOSNEdumatrix/statisticOSNEDM";
import TransformationOSN from "@/app/components/TransformationOSN";
import YouTubeShortEmbed from "@/app/components/YouTubeShortEmbed";
import { getKotaDummyBySlug } from "@/app/lib/getDummyDataRequest/getImageKotaDummy.data";
import { getSingleContactCsIsDeleted } from "@/app/request/contacts/getSingleIsDeletedContactCs";
import { formatSlugToTitle } from "@/app/utils/formatSlugName";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ kotaSlug: string }>;
}) {
  const { kotaSlug } = await params;

  const formattedKotaName = formatSlugToTitle(kotaSlug);

  const baseUrl = "https://bimbeledumatrix.com";
  const canonicalUrl = `${baseUrl}/bimbel-osn-imo-jismo-iso-ksn-di-kota/${kotaSlug}`;
  const kotaData = getKotaDummyBySlug(kotaSlug);

  const imageUrl = kotaData?.foto_kota
    ? `https://bimbeledumatrix.com/${kotaData.foto_kota}`
    : "https://bimbeledumatrix.com/images/images-cta.webp";

  const ogTitle = `Les Privat Olimpiade ${formattedKotaName} SD SMP SMA • OSN KSN ISMO IMO JISMO Terbaik`;
  const ogDescription = `Les Privat Olimpiade ${formattedKotaName} untuk SD, SMP & SMA semua bidang: Matematika, IPA, Fisika, Kimia, Biologi, Informatika, Astronomi, Geografi, Ekonomi. Persiapan OSN, KSN, ISMO, IMO, JISMO hingga tingkat Nasional & Internasional. Mentor Berpengalaman • Program Intensif • Laporan Perkembangan • Daftar Sekarang!`;
  return {
    metadataBase: new URL(baseUrl),
    title: ogTitle,
    description: ogDescription,
    keywords: [
      // Core Local Keyword
      `les privat olimpiade ${formattedKotaName}`,
      `bimbel olimpiade ${formattedKotaName}`,
      `bimbel OSN ${formattedKotaName}`,
      `les OSN ${formattedKotaName}`,
      `bimbel KSN ${formattedKotaName}`,

      // Program Olimpiade
      "OSN SD",
      "OSN SMP",
      "OSN SMA",
      "KSN SD",
      "KSN SMP",
      "KSN SMA",
      "OSP",
      "OSK",
      "ISMO",
      "IMO",
      "JISMO",
      "olimpiade sains nasional",
      "kompetisi sains nasional",
      "olimpiade matematika internasional",

      // Jenjang Pendidikan
      "les olimpiade SD",
      "les olimpiade SMP",
      "les olimpiade SMA",
      "bimbel olimpiade SD SMP SMA",

      // Mata Pelajaran Olimpiade
      "olimpiade matematika",
      "olimpiade IPA",
      "olimpiade fisika",
      "olimpiade kimia",
      "olimpiade biologi",
      "olimpiade informatika",
      "olimpiade komputer",
      "olimpiade astronomi",
      "olimpiade geografi",
      "olimpiade ekonomi",

      // Brand
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
          alt: `les privat olimpiade ${formattedKotaName}`,
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

  // Fetch 1 – aman
  const kotaData = getKotaDummyBySlug(kotaSlug);

  // Fetch 2 – aman
  const data = await getSingleContactCsIsDeleted().catch(() => {
    return null;
  });

  const contact = data || fallbackContact;
  const link = contact.link_cta || "/contact";

  const imageUrl = kotaData?.foto_kota
    ? `https://bimbeledumatrix.com/${kotaData.foto_kota}`
    : "https://bimbeledumatrix.com/images/images-cta.webp";

  const formattedKotaName = formatSlugToTitle(kotaSlug);

  const baseUrl = "https://bimbeledumatrix.com";
  const canonicalUrl = `${baseUrl}/bimbel-osn-imo-jismo-iso-ksn-di-kota/${kotaSlug}`;

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
              "@id": `${baseUrl}/bimbel-osn-imo-jismo-iso-ksn-terbaik`,
              name: "Bimbel & Les Privat Olimpiade",
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@id": canonicalUrl,
              name: `Les Privat Olimpiade di ${formattedKotaName}`,
            },
          },
        ],
      },

      {
        "@type": "EducationalOrganization",
        "@id": `${canonicalUrl}#organization`,
        name: "Edumatrix Indonesia",
        description: `Edumatrix Indonesia adalah penyedia Les Privat Olimpiade terbaik di ${formattedKotaName}.`,
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
les privat olimpiade ${formattedKotaName},
bimbel olimpiade ${formattedKotaName},
les OSN ${formattedKotaName},
bimbel KSN ${formattedKotaName},
les ISMO ${formattedKotaName},
les IMO ${formattedKotaName},
bimbel JISMO ${formattedKotaName},
les olimpiade SD ${formattedKotaName},
les olimpiade SMP ${formattedKotaName},
les olimpiade SMA ${formattedKotaName},
olimpiade matematika ${formattedKotaName},
olimpiade fisika ${formattedKotaName},
olimpiade kimia ${formattedKotaName},
olimpiade biologi ${formattedKotaName},
olimpiade informatika ${formattedKotaName},
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
        name: `Les Privat Olimpiade di ${formattedKotaName}`,
        inLanguage: "id-ID",
        description: `Les Privat & Bimbel Olimpiade terbaik di ${formattedKotaName}.`,
      },

      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: `Siapa pengajar OSN di ${formattedKotaName}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: "Pengajar kami adalah peraih medali OSN dan alumni PTN terbaik.",
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
        <HeroKota
          kotaName={formattedKotaName}
          linkCta={link}
          fotoKota={imageUrl}
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
        {/* <SuccessStorySlider /> */}
        <SuccessStoryGrid />
        <TestimoniGrid />
        <TransformationOSN />
        <GoldenTicketShowcase />
        <AsalSekolahSiswaEdumatrix />
        <SekolahSiswa />
        <ListKabupaten kotaName={formattedKotaName} kotaSlug={kotaSlug} />
        <ImpactStatisticsOSN />
        <Accordion />
        <Promo />
        <Contact />
        <MediaMassa />
      </div>
    </>
  );
}

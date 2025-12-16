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
import SuccessStorySlider from "@/app/components/home/successStorySlider";
import TingkatPendidikan from "@/app/components/home/tingkatPendidikan";
import ListKabupaten from "@/app/components/lisKabupaten";
import MediaMassa from "@/app/components/mediaMassa/mediaMassa";
import Promo from "@/app/components/promo";
import SliderDescktop from "@/app/components/slider/sliderDescktop";
import SliderMobile from "@/app/components/slider/sliderMobile";
import ImpactStatisticsOSN from "@/app/components/statisticOSNEdumatrix/statisticOSNEDM";
import YouTubeShortEmbed from "@/app/components/YouTubeShortEmbed";
import { getSingleContactCsIsDeleted } from "@/app/request/contacts/getSingleIsDeletedContactCs";
import { getImageKotaBySlug } from "@/app/request/kota/getImageKotaBySlugRequest";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ kotaSlug: string }>;
}) {
  const { kotaSlug } = await params;

  const formattedKotaName = kotaSlug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  const baseUrl = "https://bimbeledumatrix.com";
  const canonicalUrl = `${baseUrl}/bimbel-osn-imo-jismo-iso-ksn-di-kota/${kotaSlug}`;
  const kotaData = await getImageKotaBySlug(kotaSlug);

  const imageUrl = kotaData?.foto_kota
    ? `https://node-osn.edusmart-indonesia.com/kota-images/${kotaData.foto_kota}`
    : "https://bimbeledumatrix.com/images/images-cta.webp";

  const ogTitle = `📚 Les Privat Olimpiade ${formattedKotaName} • OSN IMO ISO Unggulan`;
  const ogDescription = `Kursus Les Privat Olimpiade ${formattedKotaName} Terbaik ✔️ Dibimbing GURU BERPENGALAMAN ✔️ Peraih Lisensi OSN ✔️ Garansi REPORT CARD ✍️ Daftar? Segera kunjungi situs kami...`;

  return {
    metadataBase: new URL(baseUrl),

    title: ogTitle,
    description: ogDescription,
    keywords: [
      `bimbel di ${formattedKotaName}`,
      `les privat OSN ${formattedKotaName}`,
      "osn",
      "imo",
      "iso",
      "kompetisi sains",
      "ksn",
      "guru privat",
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
  const kotaData = await getImageKotaBySlug(kotaSlug).catch(() => {
    return null; // fallback
  });

  // Fetch 2 – aman
  const data = await getSingleContactCsIsDeleted().catch(() => {
    return null;
  });

  const contact = data || fallbackContact;
  const link = contact.link_cta || "/contact";

  const fallbackImage =
    "https://bimbeledumatrix.com/images/image-preview-landing-page.webp";

  const imageUrl = kotaData?.foto_kota
    ? `https://node-osn.edusmart-indonesia.com/kota-images/${kotaData.foto_kota}`
    : fallbackImage;

  const formattedKotaName = kotaSlug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

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
              text:
                "Pengajar kami adalah peraih medali OSN dan alumni PTN terbaik.",
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
        <SuccessStorySlider />
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

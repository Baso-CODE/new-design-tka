import { fallbackContact } from "@/app/components/data/contactCs.dummyData";
import Accordion from "@/app/components/faq/Accordion";
import Features from "@/app/components/features";
import GoldenTicketShowcase from "@/app/components/goldenTicket";
import HeroKabupaten from "@/app/components/heroKabupaten";
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
import ListKecamatan from "@/app/components/listKecamatan";
import MediaMassa from "@/app/components/mediaMassa/mediaMassa";
import Promo from "@/app/components/promo";
import SliderDescktop from "@/app/components/slider/sliderDescktop";
import SliderMobile from "@/app/components/slider/sliderMobile";
import ImpactStatisticsOSN from "@/app/components/statisticOSNEdumatrix/statisticOSNEDM";
import TransformationOSN from "@/app/components/TransformationOSN";
import YouTubeShortEmbed from "@/app/components/YouTubeShortEmbed";

import { getSingleContactCsIsDeleted } from "@/app/request/contacts/getSingleIsDeletedContactCs";
import { formatSlugToTitle } from "@/app/utils/formatSlugName";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ kotaSlug: string; kabupatenSlug: string }>;
}) {
  const { kotaSlug, kabupatenSlug } = await params;

  const kotaName = formatSlugToTitle(kotaSlug);
  const kabupatenName = formatSlugToTitle(kabupatenSlug);

  const baseUrl = "https://bimbeledumatrix.com";
  const canonicalUrl = `${baseUrl}/bimbel-osn-imo-jismo-iso-ksn-di-kota/${kotaSlug}/${kabupatenSlug}`;

  // Gunakan image default (React Vite juga pakai ini)
  const imageUrl = "https://bimbeledumatrix.com/images/images-cta.webp";

  const title = `Les Privat Olimpiade ${kabupatenName} SD SMP SMA • OSN KSN ISMO IMO JISMO`;
  const description = `Les Privat Olimpiade ${kabupatenName} untuk SD, SMP & SMA semua bidang: Matematika, IPA, Fisika, Kimia, Biologi, Informatika, Astronomi, Geografi, Ekonomi. Persiapan OSN, KSN, OSP, OSK, ISMO, IMO & JISMO. Mentor Berpengalaman & Program Intensif.`;
  return {
    metadataBase: new URL(baseUrl),

    title,
    description,
    keywords: [
      // Core Local Intent - Kota
      `les privat olimpiade ${kotaName}`,
      `bimbel olimpiade ${kotaName}`,
      `bimbel OSN ${kotaName}`,
      `les OSN ${kotaName}`,
      `bimbel KSN ${kotaName}`,
      `les IMO ${kotaName}`,
      `bimbel ISMO ${kotaName}`,
      `bimbel JISMO ${kotaName}`,

      // Core Local Intent - Kabupaten
      `les privat olimpiade ${kabupatenName}`,
      `bimbel olimpiade ${kabupatenName}`,
      `bimbel OSN ${kabupatenName}`,
      `les OSN ${kabupatenName}`,
      `bimbel KSN ${kabupatenName}`,
      `les IMO ${kabupatenName}`,
      `bimbel ISMO ${kabupatenName}`,
      `bimbel JISMO ${kabupatenName}`,

      // Jenjang Pendidikan
      `les olimpiade SD ${kotaName}`,
      `les olimpiade SMP ${kotaName}`,
      `les olimpiade SMA ${kotaName}`,
      `les olimpiade SD ${kabupatenName}`,
      `les olimpiade SMP ${kabupatenName}`,
      `les olimpiade SMA ${kabupatenName}`,

      // Mata Pelajaran Olimpiade
      `olimpiade matematika ${kotaName}`,
      `olimpiade fisika ${kotaName}`,
      `olimpiade kimia ${kotaName}`,
      `olimpiade biologi ${kotaName}`,
      `olimpiade informatika ${kotaName}`,
      `olimpiade astronomi ${kotaName}`,
      `olimpiade geografi ${kotaName}`,
      `olimpiade ekonomi ${kotaName}`,

      // Program Olimpiade Nasional & Internasional
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

      // Generic High Intent
      "les privat olimpiade",
      "bimbel olimpiade terbaik",
      "guru privat olimpiade",
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
          alt: `Les privat Olimpiade ${kabupatenName}`,
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

  let data = null;
  data = await getSingleContactCsIsDeleted();

  const contact = data || fallbackContact;
  const link = contact.link_cta || "/contact";

  const baseUrl = "https://bimbeledumatrix.com";
  const canonicalUrl = `${baseUrl}/bimbel-osn-imo-jismo-iso-ksn-di-kota/${kotaSlug}/${kabupatenSlug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      /* === Breadcrumb === */
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
              "@id": canonicalUrl,
              name: `Les Privat Olimpiade di ${kabupatenName}`,
            },
          },
        ],
      },

      /* === ORGANIZATION === */
      {
        "@type": "EducationalOrganization",
        "@id": `${canonicalUrl}#organization`,
        name: "Edumatrix Indonesia",
        url: baseUrl,
        areaServed: kabupatenName,
        description: `Edumatrix Indonesia adalah penyedia Les Privat Olimpiade terbaik di ${kabupatenName}.`,
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
les privat olimpiade ${kabupatenName},
bimbel olimpiade ${kabupatenName},
les OSN ${kabupatenName},
bimbel KSN ${kabupatenName},
les ISMO ${kabupatenName},
les IMO ${kabupatenName},
bimbel JISMO ${kabupatenName},
les olimpiade SD ${kabupatenName},
les olimpiade SMP ${kabupatenName},
les olimpiade SMA ${kabupatenName},
olimpiade matematika ${kabupatenName},
olimpiade fisika ${kabupatenName},
olimpiade kimia ${kabupatenName},
olimpiade biologi ${kabupatenName},
olimpiade informatika ${kabupatenName},
OSN, KSN, OSP, OSK, ISMO, IMO, JISMO,
olimpiade sains nasional,
kompetisi sains nasional,
bimbel olimpiade terbaik,
guru privat olimpiade,
edumatrix indonesia
`,
      },

      /* === WEBPAGE === */
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: `Les Privat Olimpiade ${kabupatenName}`,
        description: `Les Privat & Bimbel Olimpiade terbaik di ${kabupatenName}.`,
      },

      /* === FAQ === */
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: `Apakah ada guru OSN di ${kabupatenName}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: "Ya, tutor adalah peraih medali OSN & pengajar berpengalaman.",
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
        {/* === HERO === */}
        <HeroKabupaten KabupatenName={kabupatenName} linkCta={link} />

        {/* === SECTION LIST === */}
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
        {/* <SuccessStorySlider /> */}
        <SuccessStoryGrid />
        <TestimoniGrid />
        <TransformationOSN />
        <GoldenTicketShowcase />
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
      </div>
    </>
  );
}

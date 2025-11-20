import { getAllFAQIsDeleted } from "@/app/request/faq/getAllIsDeletedFAQ";
import { AccordionFAQ } from "./AccordionFAQ";
import { FAQ, GetFAQResponse } from "@/app/types/faq.types";

// Fallback jika fetch error / data kosong
const fallbackFaqs: FAQ[] = [
  {
    id: 1,
    pertanyaan: "Apa itu program Edumatrix Indonesia?",
    jawaban:
      "Edumatrix Indonesia adalah layanan bimbingan belajar khusus OSN dan persiapan akademik lainnya.",
    isDeleted: false,
    createdAt: "",
    updatedAt: "",
  },
  {
    id: 2,
    pertanyaan: "Apakah materi pembelajaran bisa diakses kapan saja?",
    jawaban:
      "Ya, siswa dapat mengakses materi kapan saja melalui platform yang telah disediakan.",
    isDeleted: false,
    createdAt: "",
    updatedAt: "",
  },
  {
    id: 3,
    pertanyaan: "Bagaimana cara mendaftar program?",
    jawaban:
      "Pendaftaran dapat dilakukan melalui website resmi Edumatrix atau menghubungi admin.",
    isDeleted: false,
    createdAt: "",
    updatedAt: "",
  },
];

export default async function Accordion() {
  let faqData: FAQ[] = [];

  try {
    const response: GetFAQResponse = await getAllFAQIsDeleted();

    // Validasi data untuk memastikan bentuknya benar
    if (response && Array.isArray(response.data)) {
      faqData = response.data.filter((item) => !item.isDeleted);
    }
  } catch (error) {
    console.error("Gagal memuat data FAQ:", error);
  }

  // Jika fetch gagal atau data kosong → fallback
  const finalFaqs = faqData.length > 0 ? faqData : fallbackFaqs;

  return (
    <>
      <div className="w-full bg-white px-2 pt-8">
        <div className="max-w-[1240px] min-h-screen md:min-h-[60vh] xl:min-h-screen flex flex-col items-center mx-auto">
          <div className="mt-8">
            <h2 className="text-2xl md:text-3xl font-title lg:text-4xl font-bold mb-8 text-center text-[#133B79]">
              Frequently Ask Question
            </h2>

            <div className="bg-gray-50 rounded-lg shadow-lg w-full">
              {finalFaqs.map((item) => (
                <AccordionFAQ
                  key={item.id}
                  title={item.pertanyaan}
                  content={item.jawaban}
                />
              ))}
            </div>

            {/* Optional: pesan bahwa fallback digunakan */}
            {faqData.length === 0 && (
              <p className="text-center text-gray-500 mt-4 text-sm">
                Saat ini menampilkan FAQ standar karena data tidak dapat dimuat.
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="-mb-px">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#04397d"
            fillOpacity="1"
            d="M0,96L34.3,112C68.6,128,137,160,206,149.3C274.3,139,343,85,411,106.7C480,128,549,224,617,229.3C685.7,235,754,149,823,138.7C891.4,128,960,192,1029,208C1097.1,224,1166,192,1234,181.3C1302.9,171,1371,181,1406,186.7L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg>
      </div>
    </>
  );
}

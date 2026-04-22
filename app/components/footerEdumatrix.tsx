import Image from "next/image";
import Link from "next/link";
import { ContactCs } from "../types/contact.type";

export default async function FooterEduMatrix() {
  // let contactData: ContactCs[] = [];

  // contactData = await getAllIsDeletedContactCsFooter();

  // const finalContacts =
  //   contactData.length > 0 ? contactData : dummyContactCsData;
  const contactData: ContactCs[] = [
    {
      id: 1,
      nomor_hp: "0858-1509-5359",
      nama_cs: "Kak Nevita",
      link_cta:
        "https://api.whatsapp.com/send?phone=6285815095359&text=Halo%20Kak%20Nevita%2C%20Saya%20ingin%20tanya%20program%20belajar%20OSN%20yang%20ada%20di%20Edumatrix%20Indonesia.%20Apa%20saja%20jenis%20program%20belajar%20dan%20pilihan%20paket.%0A%0AInfo%20dari%3A%20https%3A%2F%2Folimpiade.edumatrix-indonesia.com%2F",
      isDeleted: false,
      weight: 3,
      display_order: 1,
    },
    {
      id: 2,
      nomor_hp: "0812-1552-3902",
      nama_cs: "Kak Asyah",
      link_cta:
        "https://api.whatsapp.com/send?phone=6281215523902&text=Halo%20Kak%20Asyah%2C%20Saya%20ingin%20tanya%20program%20belajar%20OSN%20yang%20ada%20di%20Edumatrix%20Indonesia.%20Apa%20saja%20jenis%20program%20belajar%20dan%20pilihan%20paket.%0A%0AInfo%20dari%3A%20https%3A%2F%2Folimpiade.edumatrix-indonesia.com%2F",
      isDeleted: false,
      weight: 3,
      display_order: 1,
    },
    // {
    //   id: 3,
    //   nomor_hp: "0821-7414-4728",
    //   nama_cs: "Kak Iva",
    //   link_cta:
    //     "https://api.whatsapp.com/send?phone=6282174144728&text=Halo%20Kak%20Iva%2C%20Saya%20ingin%20tanya%20program%20belajar%20yang%20ada%20di%20Edumatrix%20Indonesia.%20Apa%20saja%20jenis%20program%20belajar%20dan%20pilihan%20paket.%0A%0AInfo%20dari%3A%20https%3A%2F%2Folimpiade.edumatrix-indonesia.com%2F",
    //   isDeleted: false,
    //   weight: 1,
    //   display_order: 2,
    // },
    // {
    //   id: 4,
    //   nomor_hp: "0812-1552-3902",
    //   nama_cs: "Kak Asyah",
    //   link_cta:
    //     "https://api.whatsapp.com/send?phone=6281215523902&text=Halo%20Kak%20Asya%2C%20Saya%20ingin%20tanya%20program%20belajar%20yang%20ada%20di%20Edumatrix%20Indonesia.%20Apa%20saja%20jenis%20program%20belajar%20dan%20pilihan%20paket.%0A%0AInfo%20dari%3A%20https%3A%2F%2Folimpiade.edumatrix-indonesia.com%2F",
    //   isDeleted: false,
    //   weight: 1,
    //   display_order: 3,
    // },
    {
      id: 5,
      nomor_hp: "0857-2454-3040",
      nama_cs: "Kak Putri",
      link_cta:
        "https://api.whatsapp.com/send?phone=6285724543040&text=Halo%20Kak%20Putri%2C%20Saya%20ingin%20tanya%20program%20belajar%20yang%20ada%20di%20Edumatrix%20Indonesia.%20Apa%20saja%20jenis%20program%20belajar%20dan%20pilihan%20paket.%0A%0AInfo%20dari%3A%20https%3A%2F%2Folimpiade.edumatrix-indonesia.com%2F",
      isDeleted: false,
      weight: 1,
      display_order: 4,
    },
    {
      id: 6,
      nomor_hp: "0857-1221-7876",
      nama_cs: "Kak Sari",
      link_cta:
        "https://api.whatsapp.com/send?phone=6285712217876&text=Halo%20Kak%20Sari%2C%20Saya%20ingin%20tanya%20program%20belajar%20OSN%20yang%20ada%20di%20Edumatrix%20Indonesia.%20Apa%20saja%20jenis%20program%20belajar%20dan%20pilihan%20paket.%0A%0AInfo%20dari%3A%20https%3A%2F%2Folimpiade.edumatrix-indonesia.com%2F",
      isDeleted: false,
      weight: 1,
      display_order: 6,
    },
  ];

  // Optional: pastikan urut sesuai display_order
  const finalContacts = [...contactData].sort(
    (a, b) => a.display_order - b.display_order,
  );
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-[#002b63] pb-20 md:pb-0">
      <div className="text-white md:p-10 p-4 max-w-310 mx-auto">
        {/* Title */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="sm:text-[36px] text-[30px] font-title font-bold">
            Edumatrix Indonesia
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* COL 1 */}
          <div>
            <h3 className="text-lg font-bold font-title mb-2">Office:</h3>

            <p className="mb-4 font-desc">
              Ruko Permai Monjali, Jalan Monjali No 3, Kutu Dukuh, Sinduadi,
              Mlati, Sleman, Yogyakarta 5524
            </p>

            <h3 className="text-lg font-bold font-title mb-0">
              Telepon Kantor:
            </h3>

            <ul className="mb-2">
              {finalContacts.map((admin) => (
                <li key={admin.id} className="font-desc">
                  <Link
                    href={admin.link_cta ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline font-medium">
                    <span>{admin.nama_cs}:</span> {admin.nomor_hp}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 2 */}
          <div className="flex flex-col text-start">
            <h3 className="text-lg font-title font-bold mb-2">About Us:</h3>

            <p className="font-desc">
              Edumatrix Indonesia hadir sebagai mitra terpercaya dalam
              meningkatkan potensi akademik siswa melalui bimbingan belajar dan
              les privat berkualitas untuk berbagai jenjang pendidikan.
            </p>

            <h3 className="text-lg font-bold font-title mb-0 mt-6">
              Jam Kantor:
            </h3>

            <ul>
              <li className="font-desc">08.30 - 17.00 WIB Senin s.d Jumat</li>
              <li className="font-desc">08.30 - 13.00 WIB Sabtu</li>
            </ul>
          </div>

          {/* COL 3 */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-title font-bold mb-4">Contact us:</h3>

            <Link
              href={finalContacts[0]?.link_cta ?? "#"}
              target="_blank"
              rel="noopener noreferrer">
              <Image
                src="/images/images-cta.webp"
                alt="Hubungi kami sekarang."
                width={600}
                height={180}
                className="w-full h-full rounded-lg cursor-pointer object-cover"
                loading="lazy"
              />
            </Link>
          </div>
        </div>

        {/* Footer Text */}
        <p className="mt-8 text-center text-xs font-title">
          &copy; {currentYear} - Edumatrix - ONLINE & OFFLINE
        </p>

        <p className="text-center text-xs font-title">
          Pusat Les Privat Nasional & Internasional Jabodetabek
        </p>
      </div>
    </div>
  );
}

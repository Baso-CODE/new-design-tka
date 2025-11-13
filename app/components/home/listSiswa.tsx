import Image from "next/image";

const ListSiswa = () => {
  return (
    <section className="py-8 sm:py-12 overflow-hidden bg-linear-to-r from-[#04397d] to-[#023ea9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Image
          width={1000}
          height={1000}
          src="/images/daftar-siswa-edumatrix-osn-2024-2025.webp"
          alt="Daftar Siswa Edumatrix OSN 2024-2025"
          className="rounded-xl w-full h-auto"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default ListSiswa;

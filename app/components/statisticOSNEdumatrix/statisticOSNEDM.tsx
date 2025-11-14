import StatCardOSN, { StatItem } from "./statCardOSN";

const osnStats: StatItem[] = [
  {
    id: 1,
    value: 4200,
    unit: "Tutor",
    image: "/images/statistic/tutor.webp",
    alt: "Ikon Tutor",
  },
  {
    id: 2,
    value: 5000,
    unit: "Siswa Belajar",
    image: "/images/statistic/siswa-belajar.webp",
    alt: "Ikon Siswa Belajar",
  },
  {
    id: 3,
    value: 1000,
    unit: "Siswa Berprestasi",
    image: "/images/statistic/siswa-berprestasi.webp",
    alt: "Ikon Siswa Berprestasi",
  },
  {
    id: 4,
    value: 10,
    unit: "Tahun Pengalaman",
    image: "/images/statistic/tahun-pengalaman.webp",
    alt: "Ikon Tahun Pengalaman",
  },
];

const ImpactStatisticsOSN = () => {
  return (
    <section className="py-16 bg-gray-50 min-h-[60vh] flex items-center">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {osnStats.map((stat) => (
            <StatCardOSN key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStatisticsOSN;

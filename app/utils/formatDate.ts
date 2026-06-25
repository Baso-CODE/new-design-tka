// Fungsi untuk memformat tanggal tunggal menjadi format Indonesia
const formatDate = (date: Date | string | number): string => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};

const formatDateRange = (
  startDate: Date | null | undefined,
  endDate: Date | null | undefined,
): string => {
  const startMonth = startDate?.toLocaleDateString("en-US", { month: "short" });
  const endMonth = endDate?.toLocaleDateString("en-US", { month: "short" });

  const options: Intl.DateTimeFormatOptions = { day: "numeric" };

  const formattedStartDate = startDate?.toLocaleDateString("en-US", options);
  const formattedEndDate = endDate?.toLocaleDateString("en-US", options);

  if (startMonth === endMonth) {
    return `${startMonth ?? ""} ${formattedStartDate ?? ""}-${formattedEndDate ?? ""}`;
  } else {
    return `${startMonth ?? ""} ${formattedStartDate ?? ""}-${endMonth ?? ""} ${formattedEndDate ?? ""}`;
  }
};

// Fungsi rentang tanggal baru dengan validasi ketat di awal
const formatDateNew = (
  startDate: Date | null | undefined,
  endDate: Date | null | undefined,
): string => {
  // Guard clause: jika salah satu tanggal kosong, kembalikan string kosong
  if (!startDate || !endDate) return "";

  const startMonth = startDate.toLocaleDateString("en-US", { month: "short" });
  const endMonth = endDate.toLocaleDateString("en-US", { month: "short" });

  const options: Intl.DateTimeFormatOptions = { day: "numeric" };

  const formattedStartDate = startDate.toLocaleDateString("en-US", options);
  const formattedEndDate = endDate.toLocaleDateString("en-US", options);

  if (startMonth === endMonth) {
    return `${startMonth} ${formattedStartDate}-${formattedEndDate}`;
  } else {
    return `${startMonth} ${formattedStartDate}-${endMonth} ${formattedEndDate}`;
  }
};

export { formatDate, formatDateNew, formatDateRange };

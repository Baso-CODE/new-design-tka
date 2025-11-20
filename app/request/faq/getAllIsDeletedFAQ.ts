import { GetFAQResponse } from "@/app/types/faq.types";
import { baseUrlClient } from "@/app/utils/config";

// return tipe sebenarnya
export async function getAllFAQIsDeleted(): Promise<GetFAQResponse> {
  try {
    const res = await fetch(`${baseUrlClient}/faqs/isDeleted/all`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed fetching FAQ");

    const result: GetFAQResponse = await res.json();

    return result;
  } catch (error) {
    console.error("Error fetching FAQs:", error);

    // tetap return bentuk yang sesuai tipe
    return {
      data: [],
      message: "Fallback data because of error",
    };
  }
}

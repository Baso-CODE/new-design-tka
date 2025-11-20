import { GetFAQResponse } from "@/app/types/faq.types";
import { baseUrlClient } from "@/app/utils/config";

export async function getAllFAQIsDeleted(): Promise<GetFAQResponse> {
  try {
    const res = await fetch(`${baseUrlClient}/faqs/isDeleted/all`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return {
        data: [],
        message: "Failed fetching FAQ",
      };
    }

    const result: GetFAQResponse = await res.json();
    return result;
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    return {
      data: [],
      message: "Fallback data because of error",
    };
  }
}

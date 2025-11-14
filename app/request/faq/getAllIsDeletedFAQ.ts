import { FAQ, GetFAQResponse } from "@/app/types/faq.types";
import { baseUrlClient } from "@/app/utils/config";

export async function getAllFAQIsDeleted(): Promise<FAQ[]> {
  try {
    const res = await fetch(`${baseUrlClient}/faqs/isDeleted/all`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed fetching FAQ");

    const result: GetFAQResponse = await res.json();
    return result.data;
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    return [];
  }
}

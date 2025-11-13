import { baseUrlClient } from "@/app/utils/config";

export async function getAllFAQIsDeleted() {
  try {
    const faqs = await fetch(`${baseUrlClient}/faqs/isDeleted/all`);
    const result = await faqs.json();
    return result;
  } catch (error) {
    console.error("Error fetching:", error);
    throw error;
  }
}

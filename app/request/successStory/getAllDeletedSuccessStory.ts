import { SuccessStory } from "@/app/types/successStory.type";
import { baseUrlClient } from "@/app/utils/config";

export async function getAllSuccessStoriesIsDeleted(): Promise<SuccessStory[]> {
  try {
    const res = await fetch(`${baseUrlClient}/successStory/isDeleted/all`, {
      cache: "force-cache",
    });

    if (!res.ok) throw new Error("Failed to fetch success stories");

    const result = await res.json();

    return Array.isArray(result.data) ? result.data : [];
  } catch (error) {
    console.error("Error fetching:", error);
    return [];
  }
}

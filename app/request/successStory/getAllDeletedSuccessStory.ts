import { baseUrlClient } from "@/app/utils/config";

export async function getAllSuccesStorysIsDeleted() {
  try {
    const successStorys = await fetch(
      `${baseUrlClient}/successStory/isDeleted/all`
    );
    const result = await successStorys.json();
    return result;
  } catch (error) {
    console.error("Error fetching:", error);
    throw error;
  }
}

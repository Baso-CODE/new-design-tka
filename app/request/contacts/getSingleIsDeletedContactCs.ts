import { ContactCs } from "@/app/types/contact.type";

export async function getSingleContactCsIsDeleted(): Promise<ContactCs> {
  const response = await fetch(
    "https://node-osn.edusmart-indonesia.com/api/contactcs/isDeleted/single",
    { cache: "no-store" }
  );

  if (!response.ok) throw new Error("Failed to fetch");

  const json = await response.json();
  return json.data as ContactCs;
}

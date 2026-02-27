import { ContactCs } from "@/app/types/contact.type";
import { dummyContactCsData } from "../data/contactCSSingleDummy.data";

export async function getDataContactCsDummy(): Promise<ContactCs> {
  const activeCs = dummyContactCsData.filter((cs) => !cs.isDeleted);

  if (activeCs.length === 0) {
    throw new Error("No active CS available");
  }

  const randomIndex = Math.floor(Math.random() * activeCs.length);

  return activeCs[randomIndex];
}

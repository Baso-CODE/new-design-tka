import { ContactCs } from "@/app/types/contact.type";
import { dummyContactCsData } from "../data/contactCSSingleDummy.data";

export async function getDataContactCsDummy(): Promise<ContactCs> {
  const activeCs = dummyContactCsData
    .filter((cs) => !cs.isDeleted)
    .sort((a, b) => a.display_order - b.display_order);

  if (activeCs.length === 0) {
    throw new Error("No active CS available");
  }

  // create weighted pool
  const weightedPool: ContactCs[] = [];

  activeCs.forEach((cs) => {
    for (let i = 0; i < cs.weight; i++) {
      weightedPool.push(cs);
    }
  });

  const randomIndex = Math.floor(Math.random() * weightedPool.length);

  return weightedPool[randomIndex];
}

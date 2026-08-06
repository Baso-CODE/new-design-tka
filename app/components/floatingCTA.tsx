import { dummyContactCsData } from "./data/contactCs.dummyData";
import FloatingCTAClient from "./floatingCTAClient";

export default function FloatingCTA() {
  return <FloatingCTAClient contacts={dummyContactCsData} />;
}

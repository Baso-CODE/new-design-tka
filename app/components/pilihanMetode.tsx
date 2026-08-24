import { dummyContactCsData } from "./data/contactCs.dummyData";
import PilihanMetodeClient from "./pilihanMetodeClient";

export default function PilihanMetode() {
  return <PilihanMetodeClient contacts={dummyContactCsData} />;
}

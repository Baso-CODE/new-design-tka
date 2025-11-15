import { getSingleContactCsIsDeleted } from "@/app/request/contacts/getSingleIsDeletedContactCs";

export default async function KabupatenPage(props: {
  params: Promise<{ kotaSlug: string; kabupatenSlug: string }>;
}) {
  const { kotaSlug, kabupatenSlug } = await props.params;

  let contact = null;
  try {
    contact = await getSingleContactCsIsDeleted();
  } catch (err) {
    console.error("Error fetch contact CTA:", err);
  }
  const linkCta = contact?.link_cta || "/contact";

  return (
    <div>
      Kota: {kotaSlug} <br />
      Kabupaten: {kabupatenSlug}
    </div>
  );
}

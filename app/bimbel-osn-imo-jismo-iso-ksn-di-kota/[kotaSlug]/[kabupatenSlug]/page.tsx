export default async function KabupatenPage(props: {
  params: Promise<{ kotaSlug: string; kabupatenSlug: string }>;
}) {
  const { kotaSlug, kabupatenSlug } = await props.params;

  return (
    <div>
      Kota: {kotaSlug} <br />
      Kabupaten: {kabupatenSlug}
    </div>
  );
}

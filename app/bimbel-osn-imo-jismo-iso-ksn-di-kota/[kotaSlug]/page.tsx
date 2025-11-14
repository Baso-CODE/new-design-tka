export default async function KotaPage(props: {
  params: Promise<{ kotaSlug: string }>;
}) {
  const { kotaSlug } = await props.params;

  return <div>Kota: {kotaSlug}</div>;
}

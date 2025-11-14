export default async function KecamatanPage(props: {
  params: Promise<{
    kotaSlug: string;
    kabupatenSlug: string;
    kecamatanSlug: string;
  }>;
}) {
  const { kotaSlug, kabupatenSlug, kecamatanSlug } = await props.params;

  return (
    <div>
      {kotaSlug} / {kabupatenSlug} / {kecamatanSlug}
    </div>
  );
}

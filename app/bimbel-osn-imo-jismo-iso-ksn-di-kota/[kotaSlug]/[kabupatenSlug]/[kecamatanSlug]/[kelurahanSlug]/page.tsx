export default async function KelurahanPage(props: {
  params: Promise<{
    kotaSlug: string;
    kabupatenSlug: string;
    kecamatanSlug: string;
    kelurahanSlug: string;
  }>;
}) {
  const {
    kotaSlug,
    kabupatenSlug,
    kecamatanSlug,
    kelurahanSlug,
  } = await props.params;

  return (
    <div>
      Kota: {kotaSlug} <br />
      Kabupaten: {kabupatenSlug} <br />
      Kecamatan: {kecamatanSlug} <br />
      Kelurahan: {kelurahanSlug}
    </div>
  );
}

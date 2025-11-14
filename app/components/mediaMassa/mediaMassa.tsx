import { getMediaImages } from "@/app/lib/media/getMediaImages";
import MediaMassaClient from "./MediaMassaClient";

export default async function MediaMassa() {
  const images = await getMediaImages();

  return <MediaMassaClient images={images} />;
}

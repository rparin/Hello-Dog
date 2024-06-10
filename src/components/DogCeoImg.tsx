import Image from "next/image";
import { getCeoDogImage } from "@/lib/actions/DogImageCeo";
import { cn } from "@/lib/utils";

export default async function DogCeoImg({
  className,
  dogBreedUrl,
}: {
  className?: string;
  dogBreedUrl: string;
}) {
  const dogImg = await getCeoDogImage(dogBreedUrl);
  return (
    <Image
      fill={true}
      className={cn(className, "object-cover object-center")}
      src={dogImg.message}
      alt={`Dog image from https://dog.ceo of type ${dogBreedUrl.replace("/", "-")}`}
      priority
    />
  );
}

import cn from "@/utils/cn";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export default function DogImg({
  className,
  src,
  alt,
}: {
  className?: string;
  src: string | StaticImport;
  alt: string;
}) {
  return (
    <Image
      fill={true}
      className={cn(className, "object-cover object-center")}
      src={src}
      alt={alt}
      priority
    />
  );
}

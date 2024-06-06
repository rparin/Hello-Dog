import Link from "next/link";
import Image from "next/image";
import { webLogo } from "@/constants/icons";
import Border from "@/components/Border";
import SearchAutoComplete from "@/components/SearchAutoComplete";

export default function dogResults({
  params,
}: {
  params: { dogBreed: string };
}) {
  return (
    <>
      <Border>
        <div className="flex h-[60vh] flex-col items-center justify-center gap-3 text-center">
          <Link href={"/"}>
            <Image
              className="h-auto w-72 md:w-96"
              src={webLogo.img}
              alt={webLogo.alt}
              priority
            />
          </Link>
          <SearchAutoComplete
            className="w-[75%] md:w-[50%] lg:w-[30%]"
            placeholder={params.dogBreed}
          />
        </div>
      </Border>
    </>
  );
}

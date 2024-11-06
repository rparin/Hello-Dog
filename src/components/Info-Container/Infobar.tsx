import { cn } from "@/lib/utils";
import Image from "next/image";
import { maleIcon, femaleIcon } from "@/constants/images";

export type infoBarType = {
  name: string;
  value: { male?: string; female?: string; other?: string };
};

export default function Infobar({
  className,
  barValue,
}: {
  className?: string;
  barValue: infoBarType;
}) {
  var info = barValue.value.other;
  var info2;
  if (!info) {
    info = barValue.value.male;
    if (barValue.value.male != barValue.value.female) {
      info2 = barValue.value.female;
    }
  }

  return (
    <li className={cn("flex h-full w-full flex-col", className)}>
      <p className="ml-1.5 mr-1.5 border-b border-solid border-black text-xs leading-none md:text-base">
        {barValue.name}
      </p>
      <div className="mx-1 mt-0.5 flex h-full max-h-7 items-center justify-center rounded-3xl bg-white text-xs md:mx-0.5 md:text-base">
        {info2 ? (
          <div className="flex justify-center gap-0.5">
            <Image
              className="w-3 md:h-full md:w-auto"
              src={maleIcon.img}
              alt={maleIcon.alt}
            />
            <p className="mr-1.5 leading-none md:mr-2 md:text-base lg:mr-3 xl:mr-4">
              {info}
            </p>
            <Image
              className="w-3 md:h-full md:w-auto"
              src={femaleIcon.img}
              alt={femaleIcon.alt}
            />
            <p className="leading-none md:text-base">{info2}</p>
          </div>
        ) : (
          <p className="leading-none">{info}</p>
        )}
      </div>
    </li>
  );
}

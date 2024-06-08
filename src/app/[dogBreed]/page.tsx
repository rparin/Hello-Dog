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
        <div className="grid h-full w-full grid-cols-2 grid-rows-15 gap-1 md:grid-cols-15 md:grid-rows-15 lg:grid-cols-17 lg:grid-rows-10">
          <div className="col-span-2 bg-amber-500 md:col-span-8 lg:col-span-7">
            Random Dog Fact
          </div>
          <div className="col-span-1 row-span-2 bg-green-500 md:col-span-7 md:row-span-4 lg:col-span-4 lg:row-span-3">
            Corgi 7
          </div>
          <div className="col-span-1 row-span-4 bg-slate-500 md:col-span-4 md:row-span-3 lg:col-span-6 lg:row-span-4">
            Corgi 8
          </div>
          <div className="hidden bg-cyan-500 md:col-span-4 md:row-span-3 md:block">
            Corgi 1
          </div>
          <div className="col-span-1 row-span-2 bg-yellow-500 md:col-span-5 md:col-start-11 md:row-span-3 lg:col-span-3 lg:col-start-8 lg:row-span-2 lg:row-start-7">
            Physical Stats
          </div>
          <Link
            className="col-span-2 row-span-2 flex items-center justify-center bg-red-500 md:col-span-5 md:col-start-6 md:row-span-3 md:row-start-5 lg:col-span-3 lg:col-start-8 lg:row-span-2 lg:row-start-4"
            href={"/"}
          >
            <Image
              className="h-full"
              src={webLogo.img}
              alt={webLogo.alt}
              priority
            />
          </Link>
          <div className="col-span-2 row-span-1 flex items-center justify-center bg-gray-900 px-20 md:col-span-5 md:col-start-6 md:row-start-8 md:px-0 lg:col-span-3 lg:col-start-8 lg:row-start-6">
            <SearchAutoComplete
              className="flex w-full items-center"
              placeholder={params.dogBreed.replace(/_/g, " ")}
            />
          </div>
          <div className="col-span-1 row-span-2 bg-orange-500 md:col-span-5 md:col-start-11 md:row-span-3 lg:col-span-3 lg:col-start-11 lg:row-span-2">
            Good With
          </div>
          <div className="col-span-1 row-span-2 bg-sky-500 md:col-span-5 md:col-start-11 md:row-span-5 lg:col-span-3 lg:col-start-5 lg:row-span-4 lg:row-start-7">
            Corgi 6
          </div>
          <div className="col-span-1 row-span-5 bg-indigo-500 md:col-span-5 md:row-span-7 md:row-start-5 lg:col-span-3 lg:col-start-5 lg:row-span-5 lg:row-start-2">
            Characteristics
          </div>
          <div className="col-span-1 row-span-3 bg-green-500 md:col-span-5 md:row-span-4 lg:col-span-4 lg:row-span-6 lg:row-start-5">
            Corgi 5
          </div>
          <div className="col-span-1 row-span-2 bg-red-500 md:col-span-5 md:row-span-3 lg:col-span-3 lg:col-start-11 lg:row-span-4">
            Corgi 4
          </div>
          <div className="hidden bg-slate-500 md:col-span-5 md:row-span-4 md:row-start-9 md:block lg:col-span-4 lg:row-span-3">
            Corgi 10
          </div>
          <div className="col-span-3 row-span-2 hidden bg-purple-500 lg:block">
            Corgi 2
          </div>
          <div className="col-span-4 row-span-3 hidden bg-teal-500 lg:col-start-[14] lg:row-start-5 lg:block">
            Corgi 3
          </div>
        </div>
      </Border>
    </>
  );
}

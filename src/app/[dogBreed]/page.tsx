import Link from "next/link";
import Image from "next/image";
import { webLogo } from "@/constants/icons";
import Border from "@/components/Border";
import SearchAutoComplete from "@/components/SearchAutoComplete";
import ScaleContainer from "@/components/Scale-Container/ScaleContainer";
import InfoContainer from "@/components/Info-Container/InfoContainer";

export default function dogResults({
  params,
}: {
  params: { dogBreed: string };
}) {
  return (
    <>
      <Border>
        <div className="grid h-full w-full grid-cols-2 grid-rows-18 gap-1 p-1 md:grid-cols-15 md:grid-rows-15 lg:grid-cols-17 lg:grid-rows-10">
          <div className="col-span-2 bg-amber-500 md:col-span-8 lg:col-span-7">
            Random Dog Fact
          </div>
          <div className="col-span-1 row-span-2 bg-green-500 md:col-span-7 md:row-span-4 lg:col-span-4 lg:row-span-3">
            Corgi 7
          </div>
          <div className="col-span-1 row-span-5 bg-slate-500 md:col-span-4 md:row-span-3 lg:col-span-6 lg:row-span-4">
            Corgi 8
          </div>
          <div className="hidden bg-cyan-500 md:col-span-4 md:row-span-3 md:block">
            Corgi 1
          </div>
          <InfoContainer
            className="col-span-1 row-span-3 rounded-2xl px-3 py-2 md:col-span-5 md:col-start-11 md:row-span-3 md:rounded-3xl md:px-5 lg:col-span-3 lg:col-start-8 lg:row-span-2 lg:row-start-7 lg:px-3"
            title="Physical Stats"
            info={[
              { name: "Life Expectancy", value: { other: "12 - 15 years" } },
              {
                name: "Height (in)",
                value: {
                  male: "10.5 - 12.5",
                  female: "10.5 - 12.5",
                },
              },
              {
                name: "Weight (Ibs)",
                value: { male: "30 - 38", female: "25 - 34" },
              },
            ]}
          ></InfoContainer>
          <Link
            className="col-span-2 row-span-2 flex items-center justify-center md:col-span-5 md:col-start-6 md:row-span-3 md:row-start-5 lg:col-span-3 lg:col-start-8 lg:row-span-2 lg:row-start-4"
            href={"/"}
          >
            <Image
              className="h-full"
              src={webLogo.img}
              alt={webLogo.alt}
              priority
            />
          </Link>
          <div className="col-span-2 row-span-1 flex items-center justify-center px-20 md:col-span-5 md:col-start-6 md:row-start-8 md:px-0 lg:col-span-3 lg:col-start-8 lg:row-start-6">
            <SearchAutoComplete
              className="flex w-full"
              placeholder={params.dogBreed.replace(/_/g, " ")}
            />
          </div>
          <ScaleContainer
            className="col-span-1 row-span-3 gap-2 rounded-2xl px-3 py-2 md:col-span-5 md:col-start-11 md:row-span-3 md:gap-1 md:rounded-3xl md:px-5 lg:col-span-3 lg:col-start-11 lg:row-span-2"
            title="Good With"
            scales={[
              { name: "Children", value: 4 },
              { name: "Strangers", value: 4 },
              { name: "Other Dogs", value: 3 },
            ]}
          ></ScaleContainer>
          <div className="col-span-1 row-span-3 bg-sky-500 md:col-span-5 md:col-start-11 md:row-span-5 lg:col-span-3 lg:col-start-5 lg:row-span-4 lg:row-start-7">
            Corgi 6
          </div>
          <ScaleContainer
            className="col-span-1 row-span-6 rounded-2xl px-3 py-2 md:col-span-5 md:row-span-7 md:row-start-5 md:rounded-3xl md:px-5 lg:col-span-3 lg:col-start-5 lg:row-span-5 lg:row-start-2"
            title="Characteristics"
            scales={[
              { name: "Shedding", value: 3 },
              { name: "Grooming", value: 2 },
              { name: "Drooling", value: 1 },
              { name: "Coat Length", value: 1 },
              { name: "Playfulness", value: 4 },
              { name: "Protectiveness", value: 3 },
              { name: "Trainability", value: 4 },
              { name: "Energy", value: 4 },
              { name: "Barking", value: 5 },
            ]}
          ></ScaleContainer>
          <div className="col-span-1 row-span-3 bg-green-500 md:col-span-5 md:row-span-4 lg:col-span-4 lg:row-span-6 lg:row-start-5">
            Corgi 5
          </div>
          <div className="col-span-1 row-span-3 bg-red-500 md:col-span-5 md:row-span-3 lg:col-span-3 lg:col-start-11 lg:row-span-4">
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

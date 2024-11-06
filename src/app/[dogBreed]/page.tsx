import Link from "next/link";
import Image from "next/image";
import Border from "@/components/Border";
import DogImg from "@/components/DogImg";
import DogFact from "@/components/DogFact";
import LostDog from "@/components/LostDog";
import DogInfoList from "@/components/DogInfo/DogInfoList";
import SearchAutoComplete from "@/components/SearchAutoComplete";
import ProgressbarList from "@/components/Progressbar/ProgressBarList";
import { DogCeoTable } from "@data/DogCeoTable";
import { getRandItem } from "@/lib/utils";
import { webLogo } from "@/constants/images";
import { getDogBreedInfo } from "@/lib/actions/DogBreedInfo";
import { getCeoDogImage } from "@/lib/actions/DogImageCeo";

export default async function dogResults({
  params,
}: {
  params: { dogBreed: string };
}) {
  var dogBreedUrl =
    DogCeoTable[params.dogBreed.replace(/-/g, "_") as keyof typeof DogCeoTable];

  if (!dogBreedUrl) {
    return <LostDog />;
  }

  const breedInfo = await getDogBreedInfo(params.dogBreed.replace(/_/g, " "));
  const dogCeoImages = await getCeoDogImage(dogBreedUrl);
  const altText = `${breedInfo.name} image from Dog.ceo`;

  return (
    <main>
      <Border>
        <div className="grid h-full w-full grid-cols-2 grid-rows-18 gap-1 p-1 md:grid-cols-15 md:grid-rows-15 lg:grid-cols-17 lg:grid-rows-10">
          <DogFact className="col-span-2 row-span-2 rounded-2xl bg-border md:col-span-8 md:row-span-1 lg:col-span-7" />
          <div className="relative col-span-1 row-span-2 hidden rounded-2xl md:col-span-7 md:row-span-4 md:block lg:col-span-4 lg:row-span-3">
            <DogImg
              className="rounded-2xl"
              src={getRandItem(dogCeoImages.message)}
              alt={`${altText} #1`}
            />
          </div>
          <div className="relative col-span-1 row-span-5 rounded-2xl md:col-span-4 md:row-span-3 lg:col-span-6 lg:row-span-4">
            <DogImg
              className="rounded-2xl"
              src={getRandItem(dogCeoImages.message)}
              alt={`${altText} #2`}
            />
          </div>
          <div className="relative hidden rounded-2xl md:col-span-4 md:row-span-3 md:block">
            <DogImg
              className="rounded-2xl"
              src={getRandItem(dogCeoImages.message)}
              alt={`${altText} #3`}
            />
          </div>
          <DogInfoList
            className="col-span-1 row-span-5 row-start-3 gap-2 rounded-2xl px-3 py-2 md:col-span-5 md:col-start-11 md:row-span-3 md:gap-0 md:rounded-3xl md:px-5 lg:col-span-3 lg:col-start-8 lg:row-span-2 lg:row-start-7 lg:px-3"
            title="Physical Stats"
            info={[
              {
                name: "Life Expectancy",
                value: {
                  other: `${breedInfo.min_life_expectancy} - ${breedInfo.max_life_expectancy} years`,
                },
              },
              {
                name: "Height (in)",
                value: {
                  male: `${breedInfo.min_height_male} - ${breedInfo.max_height_male}`,
                  female: `${breedInfo.min_height_female} - ${breedInfo.max_height_female}`,
                },
              },
              {
                name: "Weight (Ibs)",
                value: {
                  male: `${breedInfo.min_weight_male} - ${breedInfo.max_weight_male}`,
                  female: `${breedInfo.min_weight_female} - ${breedInfo.max_weight_female}`,
                },
              },
            ]}></DogInfoList>
          <Link
            className="col-span-2 row-span-2 flex items-center justify-center md:col-span-5 md:col-start-6 md:row-span-3 md:row-start-5 lg:col-span-3 lg:col-start-8 lg:row-span-2 lg:row-start-4"
            href={"/"}>
            <Image
              className="h-full"
              src={webLogo.img}
              alt={webLogo.alt}
              priority
            />
          </Link>
          <div className="z-50 col-span-2 row-span-1 flex items-center justify-center px-20 md:col-span-5 md:col-start-6 md:row-start-8 md:px-0 lg:col-span-3 lg:col-start-8 lg:row-start-6">
            <SearchAutoComplete
              className="flex w-full"
              placeholder={breedInfo.name}
            />
          </div>
          <ProgressbarList
            className="col-span-1 row-span-3 gap-2 rounded-2xl px-3 py-2 md:col-span-5 md:col-start-11 md:row-span-3 md:gap-1 md:rounded-3xl md:px-5 lg:col-span-3 lg:col-start-11 lg:row-span-2"
            title="Good With"
            scales={[
              { name: "Children", value: breedInfo.good_with_children },
              { name: "Strangers", value: breedInfo.good_with_strangers },
              { name: "Other Dogs", value: breedInfo.good_with_other_dogs },
            ]}></ProgressbarList>
          <div className="relative col-span-1 row-span-3 rounded-2xl md:col-span-5 md:col-start-11 md:row-span-5 lg:col-span-3 lg:col-start-5 lg:row-span-4 lg:row-start-7">
            <DogImg
              className="rounded-2xl"
              src={getRandItem(dogCeoImages.message)}
              alt={`${altText} #5`}
            />
          </div>
          <ProgressbarList
            className="col-span-1 row-span-6 rounded-2xl px-3 py-2 md:col-span-5 md:row-span-7 md:row-start-5 md:rounded-3xl md:px-5 lg:col-span-3 lg:col-start-5 lg:row-span-5 lg:row-start-2"
            title="Characteristics"
            scales={[
              { name: "Shedding", value: breedInfo.shedding },
              { name: "Grooming", value: breedInfo.grooming },
              { name: "Drooling", value: breedInfo.drooling },
              { name: "Coat Length", value: breedInfo.coat_length },
              { name: "Playfulness", value: breedInfo.playfulness },
              { name: "Protectiveness", value: breedInfo.protectiveness },
              { name: "Trainability", value: breedInfo.trainability },
              { name: "Energy", value: breedInfo.energy },
              { name: "Barking", value: breedInfo.barking },
            ]}></ProgressbarList>
          <div className="relative col-span-1 row-span-3 rounded-2xl md:col-span-5 md:row-span-4 lg:col-span-4 lg:row-span-6 lg:row-start-5">
            <DogImg
              className="rounded-2xl"
              src={getRandItem(dogCeoImages.message)}
              alt={`${altText} #6`}
            />
          </div>
          <div className="relative col-span-1 row-span-3 rounded-2xl md:col-span-5 md:row-span-3 lg:col-span-3 lg:col-start-11 lg:row-span-4">
            <DogImg
              className="rounded-2xl"
              src={getRandItem(dogCeoImages.message)}
              alt={`${altText} #7`}
            />
          </div>
          <div className="relative hidden rounded-2xl md:col-span-5 md:row-span-4 md:row-start-9 md:block lg:col-span-4 lg:row-span-3">
            <DogImg
              className="rounded-2xl"
              src={getRandItem(dogCeoImages.message)}
              alt={`${altText} #8`}
            />
          </div>
          <div className="relative col-span-3 row-span-2 hidden rounded-2xl px-7 lg:block">
            <DogImg
              className="rounded-2xl"
              src={getRandItem(dogCeoImages.message)}
              alt={`${altText} #9`}
            />
          </div>
          <div className="relative col-span-4 row-span-3 hidden rounded-2xl lg:col-start-[14] lg:row-start-5 lg:block">
            <DogImg
              className="rounded-2xl"
              src={getRandItem(dogCeoImages.message)}
              alt={`${altText} #10`}
            />
          </div>
        </div>
      </Border>
    </main>
  );
}

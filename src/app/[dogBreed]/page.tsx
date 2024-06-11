import Link from "next/link";
import Image from "next/image";
import { webLogo } from "@/constants/icons";
import Border from "@/components/Border";
import SearchAutoComplete from "@/components/SearchAutoComplete";
import ScaleContainer from "@/components/Scale-Container/ScaleContainer";
import InfoContainer from "@/components/Info-Container/InfoContainer";
import DogFact from "@/components/DogFact";
import DogCeoImg from "@/components/DogCeoImg";
import { DogCeoTable } from "@data/DogCeoTable";
import { getDogBreedInfo } from "@/lib/actions/DogBreedInfo";

export default async function dogResults({
  params,
}: {
  params: { dogBreed: string };
}) {
  var dogBreedUrl =
    DogCeoTable[params.dogBreed.replace(/-/g, "_") as keyof typeof DogCeoTable];
  const breedInfo = await getDogBreedInfo(params.dogBreed.replace(/_/g, " "));
  const dogName = breedInfo[0]?.name;
  var lifeExpect, heightM, heightF, weightM, weightF;
  var child, strangers, otherDogs;
  var shed, groom, drool, coatLen, playful, protective, train, energy, bark;

  if (dogName) {
    lifeExpect = `${breedInfo[0]["min_life_expectancy"]} - ${breedInfo[0]["max_life_expectancy"]} years`;
    heightM = `${breedInfo[0]["min_height_male"]} - ${breedInfo[0]["max_height_male"]}`;
    heightF = `${breedInfo[0]["min_height_female"]} - ${breedInfo[0]["max_height_female"]}`;
    weightM = `${breedInfo[0]["min_weight_male"]} - ${breedInfo[0]["max_weight_male"]}`;
    weightF = `${breedInfo[0]["min_weight_female"]} - ${breedInfo[0]["max_weight_female"]}`;
    child = breedInfo[0]["good_with_children"];
    strangers = breedInfo[0]["good_with_strangers"];
    otherDogs = breedInfo[0]["good_with_other_dogs"];
    shed = breedInfo[0]["shedding"];
    groom = breedInfo[0]["grooming"];
    drool = breedInfo[0]["drooling"];
    coatLen = breedInfo[0]["coat_length"];
    playful = breedInfo[0]["playfulness"];
    protective = breedInfo[0]["protectiveness"];
    train = breedInfo[0]["trainability"];
    energy = breedInfo[0]["energy"];
    bark = breedInfo[0]["barking"];
  }
  return (
    <>
      <Border>
        <div className="grid h-full w-full grid-cols-2 grid-rows-18 gap-1 p-1 md:grid-cols-15 md:grid-rows-15 lg:grid-cols-17 lg:grid-rows-10">
          <DogFact className="col-span-2 rounded-2xl bg-border md:col-span-8 lg:col-span-7" />
          <div className="relative col-span-1 row-span-2 rounded-2xl md:col-span-7 md:row-span-4 lg:col-span-4 lg:row-span-3">
            <DogCeoImg className="rounded-2xl" dogBreedUrl={dogBreedUrl} />
          </div>
          <div className="relative col-span-1 row-span-5 rounded-2xl md:col-span-4 md:row-span-3 lg:col-span-6 lg:row-span-4">
            <DogCeoImg className="rounded-2xl" dogBreedUrl={dogBreedUrl} />
          </div>
          <div className="relative hidden rounded-2xl md:col-span-4 md:row-span-3 md:block">
            <DogCeoImg className="rounded-2xl" dogBreedUrl={dogBreedUrl} />
          </div>
          <InfoContainer
            className="col-span-1 row-span-3 rounded-2xl px-3 py-2 md:col-span-5 md:col-start-11 md:row-span-3 md:rounded-3xl md:px-5 lg:col-span-3 lg:col-start-8 lg:row-span-2 lg:row-start-7 lg:px-3"
            title="Physical Stats"
            info={[
              { name: "Life Expectancy", value: { other: lifeExpect } },
              {
                name: "Height (in)",
                value: {
                  male: heightM,
                  female: heightF,
                },
              },
              {
                name: "Weight (Ibs)",
                value: { male: weightM, female: weightF },
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
          <div className="z-50 col-span-2 row-span-1 flex items-center justify-center px-20 md:col-span-5 md:col-start-6 md:row-start-8 md:px-0 lg:col-span-3 lg:col-start-8 lg:row-start-6">
            <SearchAutoComplete className="flex w-full" placeholder={dogName} />
          </div>
          <ScaleContainer
            className="col-span-1 row-span-3 gap-2 rounded-2xl px-3 py-2 md:col-span-5 md:col-start-11 md:row-span-3 md:gap-1 md:rounded-3xl md:px-5 lg:col-span-3 lg:col-start-11 lg:row-span-2"
            title="Good With"
            scales={[
              { name: "Children", value: child },
              { name: "Strangers", value: strangers },
              { name: "Other Dogs", value: otherDogs },
            ]}
          ></ScaleContainer>
          <div className="relative col-span-1 row-span-3 rounded-2xl md:col-span-5 md:col-start-11 md:row-span-5 lg:col-span-3 lg:col-start-5 lg:row-span-4 lg:row-start-7">
            <DogCeoImg className="rounded-2xl" dogBreedUrl={dogBreedUrl} />
          </div>
          <ScaleContainer
            className="col-span-1 row-span-6 rounded-2xl px-3 py-2 md:col-span-5 md:row-span-7 md:row-start-5 md:rounded-3xl md:px-5 lg:col-span-3 lg:col-start-5 lg:row-span-5 lg:row-start-2"
            title="Characteristics"
            scales={[
              { name: "Shedding", value: shed },
              { name: "Grooming", value: groom },
              { name: "Drooling", value: drool },
              { name: "Coat Length", value: coatLen },
              { name: "Playfulness", value: playful },
              { name: "Protectiveness", value: protective },
              { name: "Trainability", value: train },
              { name: "Energy", value: energy },
              { name: "Barking", value: bark },
            ]}
          ></ScaleContainer>
          <div className="relative col-span-1 row-span-3 rounded-2xl md:col-span-5 md:row-span-4 lg:col-span-4 lg:row-span-6 lg:row-start-5">
            <DogCeoImg className="rounded-2xl" dogBreedUrl={dogBreedUrl} />
          </div>
          <div className="relative col-span-1 row-span-3 rounded-2xl md:col-span-5 md:row-span-3 lg:col-span-3 lg:col-start-11 lg:row-span-4">
            <DogCeoImg className="rounded-2xl" dogBreedUrl={dogBreedUrl} />
          </div>
          <div className="relative hidden rounded-2xl md:col-span-5 md:row-span-4 md:row-start-9 md:block lg:col-span-4 lg:row-span-3">
            <DogCeoImg className="rounded-2xl" dogBreedUrl={dogBreedUrl} />
          </div>
          <div className="relative col-span-3 row-span-2 hidden rounded-2xl px-7 lg:block">
            <DogCeoImg className="rounded-2xl" dogBreedUrl={dogBreedUrl} />
          </div>
          <div className="relative col-span-4 row-span-3 hidden rounded-2xl lg:col-start-[14] lg:row-start-5 lg:block">
            <DogCeoImg className="rounded-2xl" dogBreedUrl={dogBreedUrl} />
          </div>
        </div>
      </Border>
    </>
  );
}

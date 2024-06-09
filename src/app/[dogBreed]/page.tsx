import Link from "next/link";
import Image from "next/image";
import { webLogo } from "@/constants/icons";
import Border from "@/components/Border";
import SearchAutoComplete from "@/components/SearchAutoComplete";
import ScaleContainer from "@/components/Scale-Container/ScaleContainer";
import InfoContainer from "@/components/Info-Container/InfoContainer";
import DogFact from "@/components/DogFact";

export default function dogResults({
  params,
}: {
  params: { dogBreed: string };
}) {
  const img1 =
    "https://images.dog.ceo/breeds/cotondetulear/IMG_20160830_202631573.jpg";
  const img2 = "https://images.dog.ceo/breeds/hound-basset/n02088238_8839.jpg";
  const img3 =
    "https://images.dog.ceo/breeds/terrier-bedlington/n02093647_1558.jpg";
  const img4 = "https://images.dog.ceo/breeds/pembroke/n02113023_1258.jpg";
  const img5 = "https://images.dog.ceo/breeds/groenendael/n02105056_6387.jpg";
  const img6 =
    "https://images.dog.ceo/breeds/bullterrier-staffordshire/n02093256_2416.jpg";
  const img7 = "https://images.dog.ceo/breeds/dhole/n02115913_2044.jpg";
  const img8 = "https://images.dog.ceo/breeds/poodle-toy/n02113624_479.jpg";
  const img9 =
    "https://images.dog.ceo/breeds/retriever-chesapeake/n02099849_3326.jpg";
  return (
    <>
      <Border>
        <div className="grid h-full w-full grid-cols-2 grid-rows-18 gap-1 p-1 md:grid-cols-15 md:grid-rows-15 lg:grid-cols-17 lg:grid-rows-10">
          <DogFact className="col-span-2 rounded-2xl bg-border md:col-span-8 lg:col-span-7"></DogFact>
          <div className="relative col-span-1 row-span-2 rounded-2xl md:col-span-7 md:row-span-4 lg:col-span-4 lg:row-span-3">
            <Image
              fill={true}
              className="rounded-2xl object-cover object-center"
              src={img1}
              alt={"img1"}
              priority
            />
          </div>
          <div className="relative col-span-1 row-span-5 rounded-2xl md:col-span-4 md:row-span-3 lg:col-span-6 lg:row-span-4">
            <Image
              fill={true}
              className="rounded-2xl object-cover object-top"
              src={img2}
              alt={"img2"}
              priority
            />
          </div>
          <div className="relative hidden rounded-2xl md:col-span-4 md:row-span-3 md:block">
            <Image
              fill={true}
              className="rounded-2xl object-cover object-top"
              src={img3}
              alt={"img3"}
              priority
            />
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
          <div className="relative col-span-1 row-span-3 rounded-2xl md:col-span-5 md:col-start-11 md:row-span-5 lg:col-span-3 lg:col-start-5 lg:row-span-4 lg:row-start-7">
            <Image
              fill={true}
              className="rounded-2xl object-cover object-top md:object-center"
              src={img4}
              alt={"img4"}
              priority
            />
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
          <div className="relative col-span-1 row-span-3 rounded-2xl md:col-span-5 md:row-span-4 lg:col-span-4 lg:row-span-6 lg:row-start-5">
            <Image
              fill={true}
              className="rounded-2xl object-cover object-top"
              src={img5}
              alt={"img5"}
              priority
            />
          </div>
          <div className="relative col-span-1 row-span-3 rounded-2xl md:col-span-5 md:row-span-3 lg:col-span-3 lg:col-start-11 lg:row-span-4">
            <Image
              fill={true}
              className="rounded-2xl object-cover object-top"
              src={img6}
              alt={"img6"}
              priority
            />
          </div>
          <div className="relative hidden rounded-2xl md:col-span-5 md:row-span-4 md:row-start-9 md:block lg:col-span-4 lg:row-span-3">
            <Image
              fill={true}
              className="rounded-2xl object-cover object-top"
              src={img7}
              alt={"img7"}
              priority
            />
          </div>
          <div className="relative col-span-3 row-span-2 hidden rounded-2xl px-7 lg:block">
            <Image
              fill={true}
              className="rounded-2xl object-cover object-top"
              src={img8}
              alt={"img8"}
              priority
            />
          </div>
          <div className="relative col-span-4 row-span-3 hidden rounded-2xl lg:col-start-[14] lg:row-start-5 lg:block">
            <Image
              fill={true}
              className="rounded-2xl object-cover object-top"
              src={img9}
              alt={"img9"}
              priority
            />
          </div>
        </div>
      </Border>
    </>
  );
}

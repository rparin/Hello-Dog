import { StaticImageData } from "next/image";
import webImg from "@assets/Web-Logo.svg";
import femaleImg from "@icons/female.svg";
import maleImg from "@icons/male.svg";
import LostDog from "@assets/LostDog.svg";

type Icon = {
  img: StaticImageData;
  alt: string;
  invert?: boolean;
  url?: string;
};

const webLogo = {
  img: webImg,
  alt: "Hello Dog Website logo",
};

const lostDogPoster = {
  img: LostDog,
  alt: "Lost Dog poster",
};

const maleIcon = {
  img: maleImg,
  alt: "male gender icon",
};

const femaleIcon = {
  img: femaleImg,
  alt: "female gender icon",
};

export { webLogo, maleIcon, femaleIcon, lostDogPoster };
export type { Icon };

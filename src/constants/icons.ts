import { StaticImageData } from "next/image";
import webImg from "@icons/Web-Logo.svg";
import femaleImg from "@icons/female.svg";
import maleImg from "@icons/male.svg";

type Icon = {
  img: StaticImageData;
  alt: string;
  invert?: boolean;
  url?: string;
};

const webLogo = {
  img: webImg,
  alt: "Hello Dog website logo",
};

const maleIcon = {
  img: maleImg,
  alt: "male gender icon",
};

const femaleIcon = {
  img: femaleImg,
  alt: "female gender icon",
};

export { webLogo, maleIcon, femaleIcon };
export type { Icon };

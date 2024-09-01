import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRandItem(arr: Array<any>) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const faNumber = (num: number) =>
  new Intl.NumberFormat("fa-IR", { useGrouping: false }).format(num);

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function dateToLocaleShort(date: Date) {
  return new Date(date).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function dateToMonthDay(date: Date) {
  return new Date(date).toLocaleDateString(undefined, {
    day: "numeric",
    month: "short",
  });
}

export function dateToYear(date: Date) {
  return new Date(date).toLocaleDateString(undefined, {
    year: "numeric",
  });
}

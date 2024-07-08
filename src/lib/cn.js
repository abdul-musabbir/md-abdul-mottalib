import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export default function cn(...rest) {
  return twMerge(clsx(rest));
}

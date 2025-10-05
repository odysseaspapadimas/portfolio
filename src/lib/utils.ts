import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getColors = () => {
  const r = Math.floor((Math.random() * 256) - 1);
  const g = Math.floor((Math.random() * 256) - 1);
  const b = Math.floor((Math.random() * 256) - 1);
  // Calculate brightness of randomized colour
  const brightness = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  // Calculate brightness of white and black text
  const lightText = ((255 * 299) + (255 * 587) + (255 * 114)) / 1000;
  const darkText = ((0 * 299) + (0 * 587) + (0 * 114)) / 1000;

  const bg = "rgb(" + r + "," + g + "," + b + ")"
  let color;
  if (Math.abs(brightness - lightText) > Math.abs(brightness - darkText)) {
      color = "rgb(255, 255, 255)";
  } else {
      color = "rgb(0, 0, 0)";
  }

  return { bg, color };
}

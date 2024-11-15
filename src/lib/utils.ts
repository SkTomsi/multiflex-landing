import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const easings = {
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
};

export function importAll(r) {
  const images = {};
  r.keys().forEach((item: string) => {
    // Get the image name without extension as the key
    const imageName = item.replace('./', '').split('.')[0];
    images[imageName] = r(item);
  });
  return images;
}

import { ColumnDef } from "@tanstack/react-table";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function formatted(p: string): string {
  return new Intl.NumberFormat("th-TH", {
    style: "currency",
    currency: "THB",
  }).format(Number(p))
}

export const delay = (duration: number): Promise<void> => new Promise(resolve => setTimeout(resolve, duration));
export interface Routes {
  label: string;
  href: string;
}
export const routes:Routes[] = [
  { label: "Home", href: "/" },
  // { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact Us", href: "/contact-us" }
];
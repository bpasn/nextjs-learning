import { ColumnDef } from "@tanstack/react-table";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function formatted(p: string): string {
  return new Intl.NumberFormat("th-TH", {
    style: "currency",
    currency: "THB",
  }).format(Number(p));
}

export const delay = (duration: number): Promise<void> => new Promise(resolve => setTimeout(resolve, duration));
export interface Routes {
  label: string;
  href: string;
  role: string;
}
export const routes: Routes[] = [
  { label: "Home", href: "/", role: "user" },
  { label: "About", href: "/about", role: "user" },
  { label: "Contact Us", href: "/contact-us", role: "user" },
  { label: "Categories", href: "/admin/categories", role: "admin" },
  { label: "Products", href: "/admin/products", role: "admin" },
];
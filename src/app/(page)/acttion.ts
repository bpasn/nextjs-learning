import { delay } from "@/lib/utils";
import { Category } from "./shop/(root)/action/fetchCategories";
import { categories } from "./shop/(root)/action/category";

export const fetchCategories = async (): Promise<Category[]> => {
    await delay(2 * 1000);
    return categories;
}
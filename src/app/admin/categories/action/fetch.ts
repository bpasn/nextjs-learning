
import { Category } from "@/app/(page)/shop/(root)/action/fetchCategories";

export const fetchData = async (page: number, limit: number): Promise<Category[]> => {
    'use server';
    const result = await fetch("https://api.escuelajs.co/api/v1/categories");
    if (result.ok) {
        const data: Category[] = await result.json();
        return data;
    }
    return [];
};
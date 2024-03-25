import prismadb from "@/lib/prismadb.utils";
import { Category } from "@prisma/client";

export const fetchData = async (page: number, limit: number): Promise<Category[]> => {
    'use server';
    const query = new URLSearchParams({
        limit: String(limit),
        offset: String(((Number(page)) * Number(limit)) - Number(limit))
    });
    const result = await fetch(`https://api.escuelajs.co/api/v1/categories?&` + query);
    if (result.ok) {
        const data: Category[] = await result.json();
        return data;
    }
    return [];
};
export const getTotalPage = async () => {
    'use server';
    const result = await fetch("https://api.escuelajs.co/api/v1/categories");
    if (result.ok) {
        const data = await result.json();
        return data.length;
    }
    return 0;
}

export const getCategory = async (id: number): Promise<Category | null> => {
    'use server';
    if (!Number(id)) return null;
    return await prismadb.category.findFirst({
        where: {
            id
        }
    }) as Category;
}
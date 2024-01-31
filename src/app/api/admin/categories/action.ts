import { Category } from "@prisma/client";
import prismadb from "@/lib/prismadb.utils";
import { CategoryInfer } from "@/schemas/categories";
export const createCategories = async (categories: CategoryInfer) => {
    await prismadb.category.createMany({
        data: categories
    })
}

const create = async (categories: CategoryInfer, cId?: number) => {

}
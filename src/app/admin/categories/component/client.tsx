"use client";

import { Category } from "@/app/(page)/shop/(root)/action/fetchCategories";
import DataTable from "@/components/ui/data-table";
import { categoriesColumn } from "../column/categoriesColumn";

interface CategoriesClientProps {
    categories: Category[];
}
const CategoriesClient = ({
    categories
}: CategoriesClientProps) => {
    return (
        <DataTable
            data={categories}
            columns={categoriesColumn}
        />
    );
};

export default CategoriesClient;
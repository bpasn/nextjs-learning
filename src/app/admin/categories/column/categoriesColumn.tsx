import { Category } from "@/app/(page)/shop/(root)/action/fetchCategories";
import { ColumnDef } from "@tanstack/react-table";

export const categoriesColumn: ColumnDef<Category>[] = [
    {
        accessorKey:"id",
        header:"Id"
    },
    {
        accessorKey:"name",
        header:"Category Name"
    },
    {
        accessorKey:"",
        header:"Action"
    },
];
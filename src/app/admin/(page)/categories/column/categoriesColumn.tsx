import { Category } from "@prisma/client";
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
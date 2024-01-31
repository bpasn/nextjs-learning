"use client";

import { Category } from "@/app/(page)/shop/(root)/action/fetchCategories";
import DataTable from "@/components/ui/data-table";
import { categoriesColumn } from "../column/categoriesColumn";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import Heading from "@/components/ui/heading";

interface CategoriesClientProps {
    categories: Category[];
    pageIndex: number;
    pageSize: number;
}
const CategoriesClient = ({
    categories,
    pageIndex,
    pageSize
}: CategoriesClientProps) => {
    const router = useRouter();
    return (
        <>
            <div className="flex items-center justify-between mb-10">
                <Heading
                    title={`Categories`}
                    description='SubCategorys'
                />
                <Button onClick={() => router.push(`/admin/categories/new`)}>
                    <Plus className="mr-2 h-4 w-4" />
                    Add New
                </Button>
            </div>
            <DataTable
                data={categories}
                columns={categoriesColumn}
                pagination={{
                    pageIndex,
                    pageSize
                }}
            />
        </>

    );
};

export default CategoriesClient;
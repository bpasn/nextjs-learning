"use client";

import DataTable from "@/components/ui/data-table";
import { productColumn } from "../column/productColumn";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import PaginationComponent from "@/components/pagination";

interface ProductClientProps {
    product: ProductModel[];
    pageSize: number;
    pageIndex: number;
    count?: number;
}
const ProductClient = ({
    product,
    pageSize = 10,
    pageIndex = 0,
    count = 100
}: ProductClientProps) => {
    return (
        <div>
            <DataTable
                data={product}
                columns={productColumn}
            />
            <PaginationComponent
                pageIndex={pageIndex}
                pageSize={pageSize}
                count={count} />
        </div>
    );
};


export default ProductClient;
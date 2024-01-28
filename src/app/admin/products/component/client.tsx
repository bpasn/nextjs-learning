"use client";

import DataTable from "@/components/ui/data-table";
import { productColumn } from "../column/productColumn";

interface ProductClientProps {
    product: ProductModel[];
}
const ProductClient = ({
    product
}: ProductClientProps) => {
    return (
        <DataTable
            data={product}
            columns={productColumn}
        />
    );
};

export default ProductClient;
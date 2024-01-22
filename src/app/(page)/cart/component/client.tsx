'use client';
import { EachElement } from "@/EachElement";
import { CardItemProps } from "@/components/CardItemComponent";
import { Button } from "@/components/ui/button";
import DataTable from "@/components/ui/data-table";
import { formatted } from "@/lib/utils";
import { data1 } from "@/mockData";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import { columnCart } from "./columnCart";
interface CartClientProps {

}

const CartClient = (props: CartClientProps) => {
    const data = data1[0];
    return (
        <DataTable
            data={data1}
            columns={columnCart}
        />
    )
}

export default CartClient
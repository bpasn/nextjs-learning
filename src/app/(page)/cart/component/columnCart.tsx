import { CardItemProps } from "@/components/CardItemComponent";
import { Button } from "@/components/ui/button";
import { formatted } from "@/lib/utils";
import { CellContext, ColumnDef } from "@tanstack/react-table";
import { Trash2 } from "lucide-react";
import Image from "next/image";

export const columnCart: ColumnDef<CardItemProps>[] = [
    {
        "accessorKey": "image",
        "header": "PRODUCT",
        cell(prop: CellContext<CardItemProps, unknown>) {
            return <Image
                width={150}
                height={150}
                className="h-[150px] object-contain"
                src={prop.cell.row.original.image}
                alt="product"
            />
        }
    },
    {
        "accessorKey": "title",
        "header": ""
    },
    {
        "accessorKey": "price",
        "header": "PRICE"
    },
    {
        "header": "QUANTITY",
        cell(prop: CellContext<CardItemProps, unknown>) {
            return formatted(String(prop.table.getRowModel().rows.reduce((prv, current) => prv += Number(current.original.price), 0)));
        },
    },
    {
        "accessorKey": "id",
        "header": () => { },
        cell: (prop: CellContext<CardItemProps, unknown>) => (
            <Button size={"icon"} variant={"outline"}>
                <Trash2 size={16} onClick={() => alert(prop.getValue())} />
            </Button>
        )
    }
]
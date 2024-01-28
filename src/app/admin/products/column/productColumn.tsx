import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { Trash2 } from "lucide-react";
import Image from "next/image";
export const productColumn: ColumnDef<ProductModel>[] = [
    {
        accessorKey: "id",
        header: "Id"
    },
    {
        accessorKey: "images",
        header: "",
        cell({ row: { original } }) {
            return (
                <Image
                    width={100}
                    height={100}
                    src={original.images[0].search(/\.(jpg|jpeg|png)$/i) > -1 ? original.images[0] : ""}
                    alt="productImage"
                    className="object-contain rounded-md"
                />
            );
        }
    },
    {
        accessorKey: "title",
        header: "Product Name"
    },
    {
        accessorKey: "category.name",
        header: "Category Name"
    },
    {
        accessorKey: "price",
        header: "Price"
    },
    {
        accessorKey: "creationAt",
        header: "Created"
    },
    {
        accessorKey: "id",
        header: "Action",
        cell() {
            return (
                <Button size={"icon"} variant={"outline"}>
                    <Trash2 size={16} onClick={() => {
                        if (confirm("Are you sure you want to remove the item from your cart?")) {
                            // cartStore.deleteFromCart(row.id);
                        }
                    }} />
                </Button>
            );
        }
    },
];
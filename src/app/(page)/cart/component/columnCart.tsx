'use client';
import { Button } from "@/components/ui/button";
import { formatted } from "@/lib/utils";
import useCartStore, { CartStoreZustand } from "@/stores/cart-store";
import { ColumnDef } from "@tanstack/react-table";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function useColumnCart() {
    const cartStore = useCartStore();
    const columnCart: ColumnDef<CartStoreZustand>[] = [
        {
            "accessorKey": "images",
            "header": "PRODUCT",
            cell({ row }) {
                return (
                    <Link href={`/shop/product/${row.original.id}/?q=${row.original.title}`} className="cursor-pointer hover:scale-[1.05] hover:transition-all hover:duration-300 duration-300">
                        <Image
                            width={150}
                            height={150}
                            className="h-[150px] object-contain"
                            src={row.original.images[0]}
                            alt="product"
                        />
                    </Link>
                )
            }
        },
        {
            "accessorKey": "title",
            "header": ""
        },
        {
            "accessorKey": "price",
            "header": "PRICE",
            "cell": ({ getValue }) => {
                return formatted(getValue() as string);
            }
        },
        {
            "accessorKey": "quantity",
            "header": () => (<div className="text-center">QUANTITY</div>),
            "cell": ({ row }) => {
                return (
                    <div className="footer mt-10 md:mt-auto  flex space-x-3 items justify-center">
                        <div className="flex items-center space-x-2">
                            <Button size={"icon"} variant={"outline"} disabled={row.original.quantity <= 1} onClick={() => {
                                if(row.original.quantity <= 1) {
                                    if(confirm("Are you sure you want to remove the item from your cart?")){
                                        cartStore.deleteFromCart(row.original.id);
                                        return;
                                    }
                                }
                                cartStore.decrementCart(row.original.id)
                            }}>
                                <Minus size={18} />
                            </Button>
                            <div className="border rounded-md w-10 h-full items-center flex justify-center text-center text-base">{cartStore.cart.find(item => item.id === row.original.id)?.quantity ?? 0}</div>
                            <Button size={"icon"} variant={"outline"} onClick={() => cartStore.incrementCart(row.original.id)} >
                                <Plus size={18} />
                            </Button>
                        </div>
                    </div>
                )
            },
        },
        {
            "accessorKey": "id",
            "header": () => { },
            cell: ({ row: { original: row } }) => (
                <Button size={"icon"} variant={"outline"}>
                    <Trash2 size={16} onClick={() => {
                        if (confirm("Are you sure you want to remove the item from your cart?")) {
                            cartStore.deleteFromCart(row.id);
                        }
                    }} />
                </Button>
            )
        }
    ]
    return [columnCart];
}
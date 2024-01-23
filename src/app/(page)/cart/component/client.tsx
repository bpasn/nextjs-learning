'use client';
import DataTable from "@/components/ui/data-table";
import useColumnCart from "./columnCart";
import useCartStore from "@/stores/cart-store";
import { formatted } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const CartClient = () => {
    const cart = useCartStore(state => state.cart);
    const [columnCart] = useColumnCart();

    const subTotal = cart.reduce((p, c) => p += c.quantity * Number(c.price), 0);
    const discount = subTotal - (subTotal * (100 - 7) / 100);
    const total = subTotal - discount;
    return (
        <div>
            <DataTable
                data={cart}
                columns={columnCart}
            />
            <table className="border border-gray-300 w-full mb-[1rem] border-collapse mt-20">
                <tbody>
                    <tr className="border border-b-[1px_solid_#e6e6e6]">
                        <td className="border-1 border-t-[1px_#e6e6e6] border-b-[1px_#e6e6e6] p-[20px] align-middle text-[#515365] text-lg">Subtotal</td>
                        <td className="border-1 border-t-[1px_#e6e6e6] p-[20px] align-middle text-[#515365] text-lg text-end">
                            {formatted(String(subTotal))}
                        </td>
                    </tr>
                    <tr className="border border-b-[1px_solid_#e6e6e6]">
                        <td className="border-1 border-t-[1px_#e6e6e6] p-[20px] align-middle text-[#515365] text-lg">Discount</td>
                        <td className="border-1 border-t-[1px_#e6e6e6] p-[20px] align-middle text-[#515365] text-lg text-end">
                           {formatted(String(discount))}
                        </td>
                    </tr>
                    <tr className="border border-b-[1px_solid_#e6e6e6]">
                        <td className="border-1 border-t-[1px_#e6e6e6] p-[20px] align-middle text-[#515365] text-lg">Total</td>
                        <td className="border-1 border-t-[1px_#e6e6e6] p-[20px] align-middle text-[#515365] text-lg text-end">{formatted(String(total))}</td>
                    </tr>
                </tbody>
            </table>
            <div className="text-end">
                <Button variant={"default"} size={"lg"}>CheckOut</Button>
            </div>
        </div>
    )
}

export default CartClient
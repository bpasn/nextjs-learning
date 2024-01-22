'use client';
import DataTable from "@/components/ui/data-table";
import { data1 } from "@/mockData";
import useColumnCart from "./columnCart";
import useCartStore from "@/stores/cart-store";

const CartClient = () => {
    const cart = useCartStore(state => state.cart);
    const [columnCart] = useColumnCart();
    return (
        <DataTable
            data={cart}
            columns={columnCart}
        />
    )
}

export default CartClient
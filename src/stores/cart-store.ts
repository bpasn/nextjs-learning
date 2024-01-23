import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface CartStoreZustand extends ProductModel {
    quantity: number;
}
interface CartStore {
    addToCart: (c: CartStoreZustand) => void;
    deleteFromCart: (id: string) => void;
    resetCart: () => void;
    incrementCart: (id: string) => void;
    decrementCart: (id: string) => void;
    cart: CartStoreZustand[]
}


const useCartStore = create<CartStore>()(
    devtools(
        persist(
            (set, get) => {
                return ({
                    cart: [],
                    incrementCart: (id: string) => set(prv => ({ ...prv, cart: prv.cart.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item) })),
                    decrementCart: (id: string) => set(prv => ({ ...prv, cart: prv.cart.map(item => item.id === id ? { ...item, quantity: item.quantity - 1 } : item) })),
                    addToCart: (product: CartStoreZustand) => {
                        let newItem = product;
                        let oldItem = get().cart.find(item => item.id === product.id);
                        if (!oldItem) {
                            return set(prv => ({
                                ...prv,
                                cart: [...prv.cart, { ...newItem }]
                            }));
                        }
                        console.log("ITEM IS EXISTING")
                        return set(prv => ({
                            ...prv,
                            cart: prv.cart.map(item => item.id === newItem.id ? newItem : item)
                        }));
                    },
                    resetCart: () => set(p => ({ ...p, cart: [] })),
                    deleteFromCart: (id: string) => set(p => ({ ...p, cart: p.cart.filter(item => item.id !== id) }))
                })
            }
            , {
                name: "cartItem"
            }),
    ),
);

export default useCartStore;
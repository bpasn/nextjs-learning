import create from 'zustand';

interface CartStoreZustand extends ProductModel {
    quantity: number;
}
interface CartStore {
    incrementCart: () => void;
    decrementCart: () => void;
    cart: CartStoreZustand[]
}


const useCartStore = create<CartStore>((set) => {
    return ({
        cart: [],
        incrementCart: () => { },
        decrementCart: () => { },
    })
});

export default useCartStore;
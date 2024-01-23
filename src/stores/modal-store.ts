import { create } from 'zustand';

interface ModalStoreProp {
    isOpen: boolean;
    onClose: () => void;
    onOpen: () => void;
}
const useStoreModal = create<ModalStoreProp>()(set => {
    return ({
        isOpen: false,
        onClose: () => set({ isOpen: false }),
        onOpen: () => set({ isOpen: true }),
    })
});
export default useStoreModal;
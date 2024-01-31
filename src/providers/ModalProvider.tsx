"use client";

import { Category } from "@/app/(page)/shop/(root)/action/fetchCategories";
import StoreModal from "@/components/modal/store-modal";
import { useEffect, useState } from "react";

interface ModalProps {
    categories: Category[];
}
const ModalProvider = (props: ModalProps) => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;
    return null
}

export default ModalProvider;
'use client';
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from './ui/dialog';
import { cn } from '@/lib/utils';

interface ModalComponentProps {
    title: string;
    description?: string;
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
    size?: string;

}

const ModalComponent = ({
    title,
    description,
    children,
    isOpen,
    onClose,
    size = "lg"
}: ModalComponentProps) => {
    const onChange = () => {
        onClose();
        document.body.style;
    };
    return (
        <Dialog open={isOpen} onOpenChange={onChange}>
            <DialogContent className={cn(
                `w-${size}`
            )}>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default ModalComponent
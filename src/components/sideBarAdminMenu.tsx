'use client';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from '@/components/ui/sheet';
import { AlignRight } from 'lucide-react';
import React from 'react';

const SideBarAdminMenu = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <AlignRight />
            </SheetTrigger>
            <SheetContent side={"left"}>
                <SheetHeader>
                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                    <SheetDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
};

export default SideBarAdminMenu;
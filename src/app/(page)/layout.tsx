import NavbarComponent from '@/components/NavbarComponent';
import ModalProvider from '@/providers/ModalProvider';
import React from 'react';
import { getCategories } from './shop/(root)/action/fetchCategories';

const LayoutClient = async ({
    children
}: {
    children: React.ReactNode;
}) => {
    const categories = await getCategories();
    return (
        <div>
            <NavbarComponent categories={categories}/>
            <main className="relative flex min-h-screen flex-col  px-0">
                {/* <ModalLoginProvider /> */}
                {children}
            </main>
            <footer className="py-6 md:px-8 md:py-0 bg-slate-400 mt-10">
                <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                    <p className="text-balance text-center text-2xl leading-loose text-muted-foreground md:text-left">Footer</p>
                </div>
            </footer>
        </div>
    );
};

export default LayoutClient;
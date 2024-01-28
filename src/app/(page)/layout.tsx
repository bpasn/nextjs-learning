import NavbarComponent from '@/components/NavbarComponent';
import ModalProvider from '@/providers/ModalProvider';
import React from 'react';

const LayoutClient = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div>
            <NavbarComponent />
            <main className="relative flex min-h-screen flex-col  px-0">
                <ModalProvider />
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
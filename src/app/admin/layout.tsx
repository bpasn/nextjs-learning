import React from 'react';
import SideBarAdminMenu from '../../components/sideBarAdminMenu';
import { routes } from '@/lib/utils';
import Link from 'next/link';
import { EachElement } from '@/EachElement';

const LayoutAdmin = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className='relative flex min-h-screen flex-col bg-background'>
            <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-14 max-w-screen-2xl items-center">
                    <div className="mr-4 hidden md:flex">
                        <a className="mr-6 flex items-center space-x-2" href="/admin">
                            <span className="hidden font-bold sm:inline-block">Admin</span></a>
                        <nav className="flex items-center gap-6 text-sm">
                            <EachElement
                                render={(item) =>  <Link key={item.href} href={item.href}>{item.label}</Link>}
                                of={routes.filter(e => e.role.toUpperCase() === "ADMIN")}
                            />
                        </nav>
                    </div>
                    <div className="mr-4 flex md:hidden">
                        <SideBarAdminMenu />
                    </div>
                </div>
            </header>
            <div className='container max-w-[1200px]'>
                <main className='relative py-6'>
                    <div className='mx-auto w-full min-w-0'>
                        {children}
                    </div>
                </main>
            </div>
        </div>

    );
};

export default LayoutAdmin;
'use client';
import { EachElement } from '@/EachElement';
import { Routes, cn, routes } from '@/lib/utils';
import useCartStore from '@/stores/cart-store';
import { PersonStandingIcon, Search, ShoppingBag, UserRound } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';
import useStoreModal from '@/stores/modal-store';
import SheetLeftSideMenu from './SheetLeftSideMenu';
import { signOut, useSession } from 'next-auth/react';
import { DEFAULT_REDIRECT } from '@/routes';
const NavbarComponent = () => {
  const cart = useCartStore(state => state.cart);
  const storeModal = useStoreModal();
  const { data: session } = useSession()
  return (
    <nav className={
      cn(
        "sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 text-foreground/60 text-lg"
      )
    }>
      <div className="container flex h-14 max-w-screen-2xl items-center px-5 md:px-0">
        <div className="logo ml-0">
          <div className="mr-4 hidden md:flex">
            <nav className={
              cn(
                "flex items-center gap-6 text-sm"
              )
            }>
              <EachElement
                render={(item: Routes): React.ReactNode => {
                  return (
                    <Link href={item.href} key={item.label} className={cn(" transition-colors hover:text-foeground/80 text-foreground/60 text-lg")}>{item.label}</Link>
                  )
                }} of={routes}
              />
            </nav>
          </div>
          <div className={
            cn(
              "inline-flex items-center justify-center whitespace-nowrap rounded-md font-meduim transition-colors focus-visible:outline-none focus-visible:ring-ring",
              "disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            )
          }
          >
            <SheetLeftSideMenu />
          </div>
        </div>
        <div className="flex flex-row ml-auto items-center space-x-4">
          <div className='md:border-r md:px-10'>
            {session ? "Sign Out" : (
              <Link href={{
                pathname: "/auth/login",
                query: {
                  callback: DEFAULT_REDIRECT
                }
              }} className='flex space-x-2 hover:text-foreground'>
                <UserRound />
                <code className='hidden md:block'>Sign In</code>
              </Link>
            )}
          </div>
          <Button variant={"ghost"} className="" onClick={storeModal.onOpen}>
            <Search className="text-start" size={18} />
          </Button>
          {cartBadge()}

        </div>
      </div>
    </nav>
  )

  function cartBadge() {
    "use client";
    return (
      <div className="logo  relative md:px-5">
        <Link href={"/cart"} className={cn(" transition-colors hover:text-foreground/80 text-foreground/60")}>
          <ShoppingBag />
        </Link>
        <div className="absolute top-[-10px] left-[15px] text-white items-center flex justify-center z-10 bg-red-500 h-5 w-5 text-center rounded-xl">
          <span>{cart.length}</span>
        </div>
      </div>
    );
  }
}

export default NavbarComponent
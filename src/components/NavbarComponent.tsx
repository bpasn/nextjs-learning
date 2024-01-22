'use client';
import { EachElement } from '@/EachElement';
import { cn } from '@/lib/utils';
import { ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const NavbarComponent = () => {
  return (
    <nav className={
      cn(
        "sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      )
    }>
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="logo ml-0">
          <div className="mr-4 hidden md:flex">
            <nav className={
              cn(
                "flex items-center gap-6 text-sm"
              )
            }>
              <EachElement
                render={(item: any): React.ReactNode => {
                  return <Link href={item.href} key={item.label} className={cn(" transition-colors hover:text-foeground/80 text-foreground/60 text-lg")}>{item.label}</Link>
                }} of={[{ label: "Home", href: "/" }, { label: "Shop", href: "/shop" }, { label: "About", href: "/about" }, { label: "Contact Us", href: "/contact-us" }]}
              />
            </nav>
          </div>
          <button className={
            cn(
              "inline-flex items-center justify-center whitespace-nowrap rounded-md font-meduim transition-colors focus-visible:outline-none focus-visible:ring-ring",
              "disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            )
          }
            type='button'
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="radix-:R96ls:"
            data-state="closed"
          >
            Hidden
          </button>
        </div>
        <div className="logo ml-auto relative">
          <Link href={"/cart"} className={cn(" transition-colors hover:text-foreground/80 text-foreground/60")}>
            <ShoppingBag />
          </Link>
          <div className="absolute top-[-10px] left-[15px] text-white items-center flex justify-center z-10 bg-red-500 h-5 w-5 text-center rounded-xl">
            <span>0</span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavbarComponent
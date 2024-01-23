'use client';
import React, { useEffect, useState } from 'react'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { Button } from './ui/button'
import { AlignLeft } from 'lucide-react'
import { EachElement } from '@/EachElement';
import { Routes, cn, routes } from '@/lib/utils';
import Link from 'next/link';


const SheetLeftSideMenu = () => {
  const [isMounted, setMounted] = useState(false);
  const [onOpen, setOnOpen] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!isMounted) return null;
  return (
    <Sheet open={onOpen} onOpenChange={() => setOnOpen(!onOpen)}>
      <SheetTrigger asChild>
        <Button variant="outline">
          <AlignLeft size={18} />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className='flex flex-col'>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <EachElement
            render={(item: Routes): React.ReactNode => {
              return (
                <Link href={item.href} key={item.label} onClick={() => setOnOpen(!onOpen)} className={cn(" transition-colors hover:text-foeground/80 text-foreground/60 text-lg")}>{item.label}</Link>
              )
            }} of={routes}
          />
        </div>
        <SheetFooter className='mt-auto'>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default SheetLeftSideMenu
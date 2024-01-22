'use client';
import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
}
    from './ui/card';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
export interface CardItemProps {
    id: string;
    category:string;
    title: string;
    price?: string;
    image: string;
    description?:string;
    href?:string;
};

const CardItem = ({
    id,
    category,
    title,
    image,
    price,
    href
}: CardItemProps) => {
    const route = useRouter();
    const handleLink = (id:string) => {
        route.push(`/shop?categoryId=${id}`)
    }
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {price && <CardDescription>Price $ {price}</CardDescription>}
            </CardHeader>
            <CardContent className='relative h-[350px]'>
                <Link href={href!}>
                    <Image
                        src={image}
                        alt='product'
                        fill
                        className='object-contain hover:scale-[1.15] hover:transition-all hover:duration-500 duration-500 cursor-pointer'
                    />
                </Link>
            </CardContent>
            <CardFooter className='flex justify-between px-5 py-3 z-10'>
                <h1 className="font-bold text-xl text-amber-300">Buy Now</h1>
                <button
                    className={
                        cn(
                            "bg-gray-300 p-2 text-white hover:scale-[1.15] hover:transition-all hover:duration-200 duration-200 z-10"
                        )
                    }
                >See more</button>
            </CardFooter>
        </Card>
    )
}

export default CardItem
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
import { cn, formatted } from '@/lib/utils';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
export interface CardItemProps {
    id: string;
    category: string;
    title?: string;
    price?: string;
    image: string;
    description?: string;
    href?: string;
    footer?: React.ReactNode;
};

const CardItemComponent = ({
    title,
    category,
    image,
    price,
    href,
    footer
}: CardItemProps) => {
    return (
        <Card className='hover:shadow-xl shadow-md border-none hover:duration-300 duration-300 cursor-pointer'>
            <CardHeader>
                <CardTitle className='text-lg text-foreground/50'>{category}</CardTitle>
            </CardHeader>
            <CardContent >
                <div className="">
                    <Link href={href! ?? ''}>
                        <Image
                            src={image.search(/\.(jpg|jpeg|png)$/i) > -1 ? image : ""}
                            alt='product'
                            width={300}
                            height={300}
                            className='object-contain'
                            style={{
                                width:"100%",
                                height:"300px"
                            }}
                            onLoad={() => (<>Loading...</>)}
                        />
                    </Link>
                </div>
                {title && <p className="text-xl">{title}</p>}
                {price && <span className="text-lg text-red-500">{formatted(String(price))}</span>}
            </CardContent>
            {footer && (
                <CardFooter className='flex justify-between px-5 py-3 z-10'>
                    {footer}
                </CardFooter>
            )}

        </Card>
    )
}

export default CardItemComponent
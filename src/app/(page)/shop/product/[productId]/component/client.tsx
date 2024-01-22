'use client';
import React, { useState } from 'react'
import Image from 'next/image';
import { EachElement } from '@/EachElement';
import { Button } from '@/components/ui/button';
import { Minus, Plus } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent
} from '@/components/ui/tabs';
import { formatted } from '@/lib/utils';

const ProductDetailClient = ({
    id,
    title,
    price,
    description,
    images,
    category: {
        id: categoryId,
        name: categoryName
    }
}: ProductModel) => {
    const [showImage, setShowImage] = useState(images[0]);
    const [count, setCount] = useState(1);
    const handleIncrease = () => setCount(count + 1);
    const handleDecrease = () => setCount(c => {
        if (c <= 1) return 1
        return count - 1
    });
    return (
        <div>
            <div className='flex flex-col md:grid  md:grid-cols-2'>
                {/* Images */}
                <section>
                    <div className="flex flex-col space-y-5 relative">
                        <section className='relative h-[350px]'>
                            <Image
                                src={showImage}
                                alt='product-detail'
                                fill
                                className='object-contain'
                            />
                        </section>
                        <section className='flex flex-row overflow-x-scroll overflow-y-hidden space-x-5 p-4 mx-14 mt-5'>
                            <EachElement
                                render={(image: string, index: number) => (
                                    <Image
                                        key={index}
                                        onClick={() => setShowImage(image)}
                                        src={image}
                                        alt='product-detail'
                                        width={1024}
                                        height={1024}
                                        className=' object-contain w-[150px] h-[150px] border cursor-pointer '
                                    />
                                )}
                                of={images}
                            />
                        </section>
                    </div>
                </section>
                {/* Detail */}
                <section className='p-3 flex flex-col'>
                    <h4 className='mb-3 text-lg text-foreground/60 transition-colors font-medium'>{categoryName.toUpperCase()}</h4>
                    <h1 className="text-3xl mb-5">{title}</h1>
                    <p className="text-sm text-slate-400 mt-2 mb-5">{description}</p>
                    <h1 className='text-lg font-medium text-primary'>{formatted(price!)}</h1>
                    <div className="footer mt-10 md:mt-auto  flex space-x-3">
                        <div className="flex items-center space-x-2">
                            <Button size={"icon"} variant={"outline"} disabled={count <= 1} onClick={handleDecrease}>
                                <Minus size={18} />
                            </Button>
                            <div className="border rounded-md w-10 h-full items-center flex justify-center text-center text-base">{count}</div>
                            <Button size={"icon"} variant={"outline"} onClick={handleIncrease} >
                                <Plus size={18} />
                            </Button>
                        </div>
                        <Button>Add to cart</Button>
                    </div>
                </section>
            </div>
            <Separator className='col-span-2 mt-10 mb-10' />
            <section className='flex justify-center'>
                <Tabs defaultValue="description" className="">
                    <TabsList className='flex bg-transparent'>
                        <TabsTrigger value="description" className='text-2xl font-medium'>Description</TabsTrigger>
                    </TabsList>
                    <TabsContent value="description">
                        <h2 className="text-2xl text-foreground/80 mb-0 md:mb-10">Description : </h2>
                        <p className="md:text-[16px]">{description}</p>
                    </TabsContent>
                </Tabs>
            </section>
        </div>
    )
}

export default ProductDetailClient
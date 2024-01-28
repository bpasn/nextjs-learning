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
import useCartStore from '@/stores/cart-store';
import CardItemComponent from '@/components/CardItemComponent';

interface ProductDetailClientProps {
    product: ProductModel;
    relatedProduct: ProductModel[];
}
const ProductDetailClient = ({
    product,
    relatedProduct
}: ProductDetailClientProps) => {
    const {
        id,
        title,
        price,
        description,
        images,
        category
    } = product;
    const cartStore = useCartStore();
    const [showImage, setShowImage] = useState(images?.[0]);
    return (
        <div>
            <div className='flex flex-col md:grid  md:grid-cols-2'>
                {/* Images */}
                <section>
                    <div className="flex flex-col space-y-5 relative">
                        <section className='relative h-[350px]'>
                            <Image
                                src={showImage ?? ""}
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
                                of={images ?? []}
                            />
                        </section>
                    </div>
                </section>
                {/* Detail */}
                <section className='p-3 flex flex-col'>
                    <h4 className='mb-3 text-lg text-foreground/60 transition-colors font-medium'>{category?.name.toUpperCase()}</h4>
                    <h1 className="text-3xl mb-5">{title}</h1>
                    <p className="text-sm text-slate-400 mt-2 mb-5">{description}</p>
                    <h1 className='text-lg font-medium text-primary'>{formatted(price!)}</h1>
                    <div className="footer mt-10 md:mt-auto  flex space-x-3">
                        <div className="flex items-center space-x-2">
                            <Button size={"icon"} variant={"outline"} disabled={cartStore.cart.find(item => item.id === id)?.quantity! > 1 ? false : true} onClick={() => cartStore.decrementCart(id)}>
                                <Minus size={18} />
                            </Button>
                            <div className="border rounded-md w-10 h-full items-center flex justify-center text-center text-base">{cartStore.cart.find(item => item.id === id)?.quantity ?? 0}</div>
                            <Button size={"icon"} variant={"outline"} onClick={() => {
                                if (!cartStore.cart.find(item => item.id === id)) {
                                    if (confirm("You want to add it to your cart !")) {
                                        return cartStore.addToCart({ ...product, quantity: 1 });
                                    }
                                }
                                return cartStore.incrementCart(id);
                            }} >
                                <Plus size={18} />
                            </Button>
                        </div>
                        <Button onClick={() => cartStore.addToCart({ ...product, quantity: 1 })}>Add to cart</Button>
                    </div>
                </section>
            </div>
            <Separator className='col-span-2 mt-10 mb-10' />
            <section className='flex justify-center px-3'>
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
            <Separator className='mt-10 mb-10' />
            <section className='px-3'>
                <div className="p-5 text-center text-2xl mb-10 font-medium flex flex-col space-y-4">
                    <span>Related Products</span>
                    <code className="text-lg text-foreground/80">These prducts may also intrest to you!</code>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                    <EachElement
                        render={(item: ProductModel, index: number) => (
                            <CardItemComponent
                                key={index}
                                id={item.id}
                                href={`/shop/product/${item.id}/?q=${item.title}`}
                                category={item.category.name}
                                title={item.title}
                                image={item.images[0]}
                            />
                        )}
                        of={relatedProduct}
                    />
                </div>
            </section>
        </div>
    )
}

export default ProductDetailClient
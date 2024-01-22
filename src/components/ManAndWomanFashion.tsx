'use client';
import React, { useEffect, useState } from 'react'
import CardItem, { CardItemProps } from './CardItemComponent'
import { EachElement } from '@/EachElement'
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { data1 } from '@/mockData';

type Props = {}

const ManAndWomanFashion = (props: Props) => {
    return (
        <div className='mt-10'>
            <div className="flex justify-center">
                <h1 className="text-3xl font-bold inline-block  whitespace-nowrap">
                    Man & Woman Fashion
                </h1>
            </div>
            <Carousel className='mt-5'>
                <CarouselContent>
                    <EachElement
                        render={(item: CardItemProps) => (
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                <CardItem
                                    key={item.title}
                                    id={item.id}
                                    description={item.description}
                                    category={item.category}
                                    title={item.title}
                                    price={item.price}
                                    image={item.image}
                                />
                            </CarouselItem>
                        )}
                        of={data1.filter(e => e.category.toUpperCase() === "MAN" || e.category.toUpperCase() === "WOMAN")}
                    />
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

        </div>
    )
}

export default ManAndWomanFashion
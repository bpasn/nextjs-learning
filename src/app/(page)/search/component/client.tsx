'use client';
import { EachElement } from '@/EachElement'
import CardItem from '@/components/CardItemComponent'
import React from 'react'

interface SearchClientProps {
    product: ProductModel[];
}

const SearchClient = ({
    product
}: SearchClientProps) => {
    return (
        <EachElement
            render={(item: ProductModel, index: number) => {
                console.log(item.images[0].replace(/\[|"|]/g, ""))
                return (
                    <CardItem id={''} category={''} title={''} image={item.images[0].replace(/\[|"|]/g, "")} />
                )
            }}
            of={product}
        />
    )
}

export default SearchClient
'use client';
import { EachElement } from '@/EachElement';
import CardItemComponent from '@/components/CardItemComponent';
import React from 'react'

interface ShopClientProps {
  products: ProductModel[];
}
const ShopClient = ({
  products
}: ShopClientProps) => {
  return (
    <EachElement render={(item: ProductModel, index: number) => (
      <CardItemComponent
        id={item.id}
        category={item.category.name}
        title={item.title}
        image={item.images[0].replace(/\[|"|]/g, "")}
        href={`/shop/product/${item.id}/?productName=${item.title}`}
      />
    )} of={products}
    />
  )
}

export default ShopClient
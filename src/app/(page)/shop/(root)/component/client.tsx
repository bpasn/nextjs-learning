'use client';
import { EachElement } from '@/EachElement';
import CardItemComponent from '@/components/CardItemComponent';
import { Button } from '@/components/ui/button';
import useCartStore from '@/stores/cart-store';
import React from 'react'

interface ShopClientProps {
  products: ProductModel[];
}
const ShopClient = ({
  products
}: ShopClientProps) => {
  const addToCart = useCartStore(state => state.addToCart);
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-5 p-5 md:p-0 mb-10 mt-10">
      <EachElement render={(item: ProductModel, index: number) => (
        <CardItemComponent
          id={item.id}
          category={item.category.name}
          price={item.price}
          title={item.title}
          image={item.images[0].search(/\.(jpg|jpeg|png)$/i) ? item.images[0].replace(/\[|"|]/g, "") : ""}
          href={`/shop/product/${item.id}/?q=${item.title}`}
        />
      )} of={products}
      />
    </div>
  )
}

export default ShopClient
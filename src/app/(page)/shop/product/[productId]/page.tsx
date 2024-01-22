import React from 'react';
import ProductDetailClient from './component/client';

interface ProductDetailProps {
  params: {
    productId: string;
  }
}

const fetchData = async (productId: string) => {
  'use server';
  const fetchData = await fetch(`https://api.escuelajs.co/api/v1/products/${productId}`);
  const product = await fetchData.json();
  return product as ProductModel
}
const ProductDetail = async ({
  params: {
    productId,
  }
}: ProductDetailProps) => {
  const product = await fetchData(productId);
  return (
    <div className="mt-10">
      <ProductDetailClient {...product!} />
    </div>
  )
}

export default ProductDetail
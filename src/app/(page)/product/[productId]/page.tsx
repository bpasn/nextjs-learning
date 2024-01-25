import React from 'react';
import ProductDetailClient from './component/client';

interface ProductDetailProps {
  params: {
    productId: string;
  }
}

const fetchData = async (productId: string):Promise<ProductModel> => {
  'use server';
  const fetchData = await fetch(`https://api.escuelajs.co/api/v1/products/${productId}`);
  if (fetchData.ok) {
    const product = await fetchData.json();
    return product as ProductModel
  }
  return null! as ProductModel;
}
const fetchDataRelated = async (categoryId: string): Promise<ProductModel[]> => {
  'use server';
  const fetchData = await fetch(`https://api.escuelajs.co/api/v1/products/?categoryId=${categoryId}&limit=4&offset=0`);
  if (fetchData.ok) {
    const product = await fetchData.json();
    return product as ProductModel[]
  }
  return [];
}
const ProductDetail = async ({
  params: {
    productId,
  }
}: ProductDetailProps) => {
  const product: ProductModel = await fetchData(productId) as ProductModel;
  if (!product) {
    return (
      <>No Result</>
    )
  }
  let relatedProduct = await fetchDataRelated(product.category.id);

  return (
    <div className="mt-10">
      <ProductDetailClient product={product!} relatedProduct={relatedProduct} />
    </div>
  )
}

export default ProductDetail
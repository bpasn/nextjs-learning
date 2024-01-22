import React from 'react'
import ShopClient from '../component/client';
import Link from 'next/link';

const fetchData = async (categoryId?: string, productName?: string): Promise<ProductModel[]> => {
  'use server';
  let url = "https://api.escuelajs.co/api/v1/products/?";
  if (categoryId) url = url.concat(`&categoryId=${categoryId}`);
  if (productName) url = url.concat(`&title=${productName}`);

  const response = await fetch(url);
  return await response.json() as ProductModel[];
}
const ShopPage = async ({
  searchParams
}: {
  searchParams: {
    categoryId: string;
    productName: string;
  }
}) => {
  const data = await fetchData(searchParams.categoryId, searchParams.productName);
  if (!data.length) return (
    <div className="container text-center grid place-items-center h-[350px]">
      <h1 className="text-2xl">Result [ productName: {searchParams.productName} ]  Not Found </h1>
      <Link href={"/"} className='border p-3 rounded hover:bg-foreground/10 transition-all duration-200 text-destructive'> Go to shopping</Link>
    </div>
  )
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-10 mt-10">
      <ShopClient products={data} />
    </div>
  )
}

export default ShopPage;
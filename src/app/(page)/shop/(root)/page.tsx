import React from 'react'
import ShopClient from '../component/client';
import Link from 'next/link';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { EachElement } from '@/EachElement';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

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
    <div className='container'>
      <div className="flex flex-row mt-10">
        <div className="block-result text-start">
          <h1 className="text-2xl font-medium">Result for "{searchParams.productName ?? data[0].category.name}"</h1>
          <span className="text-lg">{data.length} results found</span>
        </div>
        <div className="ml-auto">
          <div className="flex flex-row space-x-4">
            <p className="text-xl text-foreground/20" >
              sort by :
            </p>
            <Select >
              <SelectTrigger className="w-[180px] focus-visible:outline-none">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent className="focus-visible:outline-none">
                <SelectGroup>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <ShopClient products={data} />
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}

export default ShopPage;
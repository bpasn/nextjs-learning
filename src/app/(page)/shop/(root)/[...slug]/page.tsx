import React from 'react'
import Link from 'next/link';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import Image from 'next/image';


type Props = {}
const fetchData = async (categoryId?: string, q?: string): Promise<ProductModel[]> => {
  'use server';
  let url = "https://api.escuelajs.co/api/v1/products/?";
  if (categoryId) url = url.concat(`&categoryId=${categoryId}`);
  if (q) url = url.concat(`&title=${q}`);

  const response = await fetch(url);
  return await response.json() as ProductModel[];
}
const SlugPage = async ({
  searchParams
}: {
  searchParams: {
    categoryId: string;
    q: string;
  },
}) => {
  const data = await fetchData(searchParams.categoryId, searchParams.q);
  if (!data.length) return (
    <div className="container text-center grid place-items-center h-[350px]">
      <Image
        src={"https://www.bnn.in.th/_nuxt/img/icon-search-not-found.5976b67.svg"}
        alt="no-result"
        width={350}
        height={350}
        className="w-50 h-auth"
      />
      <h1 className="text-2xl">We couldn’t find any results</h1>
      <p className="text-lg">Please try to remove some filters or try other keywords.</p>
      <Link href={"/"} className='border p-3 rounded hover:bg-foreground/10 transition-all duration-200 text-destructive'> Go to shopping</Link>
    </div>
  )
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
        <div className="block-result text-start">
          <h1 className="text-2xl font-medium">Result for "{searchParams.q ?? data[0].category.name}"</h1>
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
      <div>client</div>
    </div>
  )
}

export default SlugPage
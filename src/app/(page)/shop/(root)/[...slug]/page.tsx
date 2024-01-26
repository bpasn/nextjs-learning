import React from 'react'
import NotFound from '../component/notFoundData';
import ShopClient from '../component/client';
import { delay } from '@/lib/utils';
import PageTitleContainer from '../component/pageTitle';
import { fetchData } from '../action/fetchData';

const SlugPage = async ({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  await delay(2 * 1000);
  const q = searchParams["q"] ?? ""; // default value is "1"
  const categoryId = searchParams['categoryId'] ?? "";
  const page = searchParams['page'] ?? "";
  const limit = searchParams['limit'] ?? "";
  const data = await fetchData(categoryId as string, q as string, page as string, limit as string);

  if (!data.length) return (<NotFound />)
  return (
    <div>
      <PageTitleContainer countResult={data.length} />
      <ShopClient products={data} />
    </div>
  )
}

export default SlugPage
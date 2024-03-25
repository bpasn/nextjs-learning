import React from 'react'
import ShopClient from './component/client';
import PageTitleContainer from './component/pageTitle';
import { delay } from '@/lib/utils';
import { fetchData } from './action/fetchData';

const SlugPage = async ({
  searchParams
}: {
  searchParams: {
    categoryId: string;
    q: string;
  },
}) => {
  await delay(1.5 * 1000)
  const data = await fetchData(searchParams.categoryId, searchParams.q);
  if (!data.length) {
    throw new Error("Please try to remove some filters or try other keywords.", { cause: "We couldn’t find any results" })
  }
  return (
    <div>
      <PageTitleContainer countResult={data.length} />
      <ShopClient products={data} />
    </div>
  )
}

export default SlugPage
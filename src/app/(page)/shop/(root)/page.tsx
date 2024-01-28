import React, { Suspense } from 'react'
import ShopClient from './component/client';
import NotFound from './component/notFoundData';
import PageTitleContainer from './component/pageTitle';
import { delay } from '@/lib/utils';
import { fetchData } from './action/fetchData';
import Loading from './loading';

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
  if (!data.length) return (
    <NotFound />
  )
  return (
    <div>
      <PageTitleContainer countResult={data.length} />
      <ShopClient products={data} />
    </div>
  )
}

export default SlugPage
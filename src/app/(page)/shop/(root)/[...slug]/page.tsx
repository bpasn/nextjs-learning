import React from 'react'
import NotFound from '../component/notFoundData';
import ShopClient from '../component/client';
import { delay, report } from '@/lib/utils';
import PageTitleContainer from '../component/pageTitle';
import { fetchData } from '../action/fetchData';

const SlugPage = async ({
  searchParams
}: {
  searchParams: { [key: string]: string  };
}) => {
  await delay(2 * 1000);
  const q = searchParams["q"] ?? ""; // default value is "1"
  const categoryId = searchParams['categoryId'] ?? "";
  const page = searchParams['page'] ?? "";
  const limit = searchParams['limit'] ?? "";
  const data = await fetchData(categoryId, q, page, limit);

  if (!data.length) {
    report(
      "We couldn’t find any results",
      "Please try to remove some filters or try other keywords."
    )
  }
  return (
    <div>
      <PageTitleContainer countResult={data.length} />
      <ShopClient products={data} />
    </div>
  )
}

export default SlugPage
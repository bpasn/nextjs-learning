import React, { Suspense } from 'react';
import { fetchData } from './action/fetch';
import ProductClient from './component/client';

interface ProductAdminPageProps {
  searchParams: { [key: string]: string | string | string[] | undefined };
}
const ProductAdminPage = async ({
  searchParams
}: ProductAdminPageProps) => {
  const page = Number(searchParams['page'] ?? "1");
  const pageSize = Number(searchParams['pageSize'] ?? "10")
  const data: ProductModel[] = await fetchData(page, pageSize);
  return (
    <div>
      <ProductClient
        product={data}
        pageIndex={page}
        pageSize={pageSize}
      />
    </div>
  );
};

export default ProductAdminPage;
import React from 'react';
import CategoriesClient from './component/client';
import { fetchData } from './action/fetch';
import { Category } from '@/app/(page)/shop/(root)/action/fetchCategories';


const CategoriesAdminPage = async ({
  searchParams
}: {
  searchParams: { [key: string]: string | string | string[] | undefined };
}) => {
  const page = searchParams['page'] ?? '0';
  const perPage = searchParams['pageSize'] ?? '10';
  const data: Category[] = await fetchData(Number(page), Number(perPage));
  return (
    <div>
      <CategoriesClient
        categories={data}
        pageIndex={Number(page)}
        pageSize={Number(perPage)}

      />
    </div>
  );
};

export default CategoriesAdminPage;
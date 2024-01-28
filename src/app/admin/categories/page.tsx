import React from 'react';
import CategoriesClient from './component/client';
import { fetchData } from './action/fetch';
import { Category } from '@/app/(page)/shop/(root)/action/fetchCategories';


const CategoriesAdminPage = async () => {
  const data: Category[] = await fetchData(0, 10);
  return (
    <div>
      <div className='mb-5'>
        <h1 className="text-2xl mb-2 font-medium">
        Categories
        </h1>
        <h3 className="text-sm text-foreground/40">
          Manage your categories here.
        </h3>
      </div>
      <CategoriesClient categories={data} />
    </div>
  );
};

export default CategoriesAdminPage;
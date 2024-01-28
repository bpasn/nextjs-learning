import React from 'react';
import { fetchData } from './action/fetch';
import ProductClient from './component/client';


const ProductAdminPage = async () => {
  const data: ProductModel[] = await fetchData(0, 10);
  return (
    <div>
      <div className='mb-5'>
        <h1 className="text-2xl mb-2 font-medium">
        Products
        </h1>
        <h3 className="text-sm text-foreground/40">
          Manage your Product here.
        </h3>
      </div>
      <ProductClient product={data} />
    </div>
  );
};

export default ProductAdminPage;
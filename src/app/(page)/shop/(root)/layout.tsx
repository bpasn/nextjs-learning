import NavLinkList from '@/components/NavLinkList';
import React from 'react';
import ProductFilterComponent from './component/productFilter';
import { headers } from 'next/headers';
const Layout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className='container'>
      <div className="md:block hidden">
        <NavLinkList />
      </div>
      <div className='md:grid md:grid-cols-4 gap-10 mt-10'>
        <div className='filter-product md:block hidden'>
          <ProductFilterComponent />
        </div>
        <div className="col-span-3">
          {children}
          
        </div>
      </div>
    </div>
  )
}

export default Layout
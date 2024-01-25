import NavLinkList from '@/components/NavLinkList';
import React from 'react'
import ProductFilter from './@productFilter/page';

const Layout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="container">
      <NavLinkList />
      <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mt-10'>
        <div className='filter-product'>
          <ProductFilter />
        </div>
        <div className="col-span-3">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
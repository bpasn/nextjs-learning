import NavLinkList from '@/components/NavLinkList';
import React, { Suspense } from 'react';
import ProductFilterComponent from './component/productFilter';

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
          <Suspense fallback={(
            <div>
              Loading
            </div>
          )}>
            {children}
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default Layout
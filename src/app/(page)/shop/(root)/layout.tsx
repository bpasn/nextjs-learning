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
      <NavLinkList />
      <div className='grid grid-cols-1 md:grid-cols-4 gap-10 mt-10'>
        <div className='filter-product'>
            <Suspense fallback={(
            <div>
              Loading
            </div>
          )}>
             <ProductFilterComponent/>
          </Suspense>
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
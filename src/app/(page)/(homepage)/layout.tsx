import React, { Suspense } from 'react'
import LoadingProvider from '@/providers/loading-provider';
import BannerComponent from '@/components/BannerComponent';
const Layout = async ({
    children,
    flashSaleDaily,
    productHistory,
    bestSeller,
}: {
    children: React.ReactNode;
    flashSaleDaily: React.ReactNode;
    productHistory: React.ReactNode;
    bestSeller: React.ReactNode;
}) => {
    return (
        <>
            <Suspense fallback={(
                <div>
                    <div className='relative w-full h-[500px] shadow-none bg-gray-200 border-r-4 gap-4 items-center p-2 rounded' />
                    <div className=' -mt-20 z-10 relative px-5'>
                        <LoadingProvider count={8} />
                    </div>
                </div>
            )}>
                <BannerComponent />
                <div className="mb-10">
                    {flashSaleDaily}
                </div>
                <div className="mb-10">
                    {productHistory}
                </div>
                <div className="mb-10">
                    {bestSeller}
                </div>
                {children}
            </Suspense>
        </>
    )
}

export default Layout
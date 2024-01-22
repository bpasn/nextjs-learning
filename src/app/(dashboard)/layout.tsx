import React, { Suspense } from 'react'
import LoadingProvider from '@/providers/loading-provider';
const Layout = async ({
    children
}: {
    children: React.ReactNode
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
                {children}
            </Suspense>
        </>
    )
}

export default Layout
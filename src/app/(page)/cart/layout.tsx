import React, { Suspense } from 'react'
import DataTableLoadingProvider from '@/providers/DataTableLoadingProvider'

const Layout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="container max-w-[1400px] py-8 px-5">
            <h1 className="text-3xl text-red-500 mb-10">Shipping Cart</h1>
            <Suspense fallback={<DataTableLoadingProvider />}>
                {children}
            </Suspense>
        </div>
    )
}

export default Layout
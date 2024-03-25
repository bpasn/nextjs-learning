import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title:"Categories"
}

const Layout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default Layout
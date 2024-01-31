import React, { Suspense } from 'react';

const Layout = async ({
    children
}: {
    children: React.ReactNode;
}) => {
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
            <Suspense fallback={(
                <div>
                    ...Loading
                </div>
            )}>
                {children}
            </Suspense>
        </div>

    );
};

export default Layout;
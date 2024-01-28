import React from 'react';

type Props = {};

const Layout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="container md:max-w-[1400px] grid place-items-center h-screen">
            {children}
        </div>
    );
};

export default Layout;
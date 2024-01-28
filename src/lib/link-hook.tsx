import React from 'react';
import Link from "next/link";

interface IProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    to: string;
    prefetch?: boolean;
}

export default React.forwardRef(({ to, prefetch, ...props }: IProps, ref: any) => {
    return (
        <Link href={to} passHref prefetch={prefetch || false}>
            <a {...props} ref={ref} />
        </Link>
    );
});
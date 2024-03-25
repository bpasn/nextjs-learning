'use client';
import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils';
import { Minus, Plus } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MenuItemProps {
    item: Category & {
        expanded?: boolean;

    },
    slug: string
}
const MenuItem = ({
    item,
    slug,
}: MenuItemProps) => {
    const [expanded, setExpanded] = useState(item.expanded || false);

    const handleToggle = () => {
        setExpanded(!expanded);
    };
    const pathName = usePathname();
    useEffect(() => {
        if (!expanded && (pathName === `/shop/${slug}` || pathName === `/shop/${item.slug}`)) {
            handleToggle();
        }
    }, [expanded]);
    return (
        <li >
            {item.categories.length
                ? (
                    <div className="flex flex-row  py-2" onClick={handleToggle}>
                        <span className={cn(expanded ? 'font-medium text-black' : 'font-normal text-foreground/60')}>{item.name}</span>
                        <div className="ml-auto">
                            {expanded ? <Minus size={18} /> : <Plus size={18} />}
                        </div>
                    </div>
                )
                : (
                    <Link href={{
                        pathname: `/shop/${slug}`,
                        query: {
                            ref: "list",
                            page: "0",
                            limit: "30"
                        }
                    }} className={
                        cn(
                            "text-normal text-foreground/60",
                            pathName === `/shop/${slug}` ? "border-b border-foreground/80" : ''
                        )
                    }>{item.name}</Link>
                )
            }
            {expanded && item.categories && (
                <ul className='space-y-4 font-medium list-none ml-[10px] py-2'>
                    {item.categories.length && (
                        <li>
                            <Link href={{
                                pathname: `/shop/${item.slug}`,
                                query: {
                                    ref: "list",
                                    page: "0",
                                    limit: "30"
                                }
                            }} className={
                                cn(
                                    "text-normal text-foreground/60",
                                    pathName === `/shop/${item.slug}` && 'border-b border-foreground/80'
                                )
                            }>All {item.name}</Link>
                        </li>
                    )}
                    {item.categories.map(c => (
                        <MenuItem key={c.id} item={c} slug={`${slug}/${c.slug}`} />
                    ))}
                </ul>
            )}

        </li>
    )
}

export default MenuItem
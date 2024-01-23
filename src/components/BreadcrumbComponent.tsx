'use client';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React from 'react'

type Props = {}

const BreadcrumbComponent = (props: Props) => {
    const pathname = usePathname();
    const router = useRouter();
    return (
        <nav className=" py-8 grid grid-cols-4 h-20">
            <ul className='flex flex-row flex-wrap'>
                {pathname.split("/").map((p, i) => p && (
                    <li className='flex items-center space-x-4'>
                        <span>{p}</span>
                        <code>{<ChevronRight size={12} className='text-gray-400' />}</code>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default BreadcrumbComponent
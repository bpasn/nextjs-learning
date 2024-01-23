'use client';
import React, { useState } from 'react'
import Image from 'next/image';
import { Input } from './ui/input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from './ui/select';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
import { EachElement } from '@/EachElement';

const BannerComponent = ({
    category
}: {
    category: CategoryModel[]
}) => {
    const [searchState, setSearchState] = useState<{
        categoryId?: string;
        name?: string;
    }>();
    const router = useRouter();
    const handleSearch = () => {
        const { categoryId, name } = searchState!;
        let url = '/shop?';
        if (categoryId) url = url.concat(`&categoryId=${categoryId}`);
        if (name) url = url.concat(`&productName=${name}`);
        return router.push(url);
    }
    return (
        <div className="relative w-full h-[500px]">
            <Image
                src={'https://www.free-css.com/assets/files/free-css-templates/preview/page287/eflyer/assets/images/banner-bg.png'}
                alt='banner'
                fill
                className='object-cover'
            />
        </div>
    )
}

export default BannerComponent
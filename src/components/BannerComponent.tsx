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
            <div className='absolute  top-0  w-full container p-2 md:p-[10rem]'>
                <div className="items-center space-x-5 justify-center hidden md:flex">
                    <Select onValueChange={(categoryId) => setSearchState(e => ({ ...e, categoryId }))}>
                        <SelectTrigger className="w-[180px] focus:outline-none focus:ring-none">
                            <SelectValue placeholder="Category" />
                        </SelectTrigger>
                        <SelectContent>
                            <EachElement
                                render={(item: CategoryModel, index: number) => (
                                    <SelectItem key={index} value={item.id}>{item.name}</SelectItem>
                                )}
                                of={category}
                            />
                        </SelectContent>
                    </Select>
                    <Input placeholder='Search this blog' onChange={(e) => setSearchState(old => ({ ...old, name: e.target.value }))} />
                    <Button variant={"default"} onClick={handleSearch}>Search</Button>
                </div>
            </div>
            <div className='absolute  top-[150px]  w-full container p-2 md:hidden'>
                <div className="md:hidden grid grid-cols-1 gap-3">
                    <Input placeholder='Search this blog' className='' />
                    <Select >
                        <SelectTrigger >
                            <SelectValue placeholder="Category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Man">Man</SelectItem>
                            <SelectItem value="Woman">Woman</SelectItem>
                            <SelectItem value="Electronic">Electronic</SelectItem>
                        </SelectContent>
                    </Select>
                    <Button variant={"default"}>Search</Button>
                </div>
            </div>
        </div>
    )
}

export default BannerComponent
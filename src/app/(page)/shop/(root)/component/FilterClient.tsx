'use client';
import React, { useState } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import MenuItem from './MenuItem';
import { BrandsItem } from '../action/queryBrand';
import { Category } from '../action/fetchCategories';

interface FilterClientProps {
    brands: BrandsItem[];
    categories: Category[];
}

const FilterClient = ({
    brands,
    categories
}: FilterClientProps) => {
    const [value,setValue] = useState<string[]>(['categories']);
    return (
        <Accordion type="multiple" onValueChange={setValue} value={value}  className="w-full">
            <AccordionItem value="categories">
                <AccordionTrigger className='sticky top-0'>CATEGORIES</AccordionTrigger>
                <AccordionContent  className='max-h-[350px] overflow-auto'>
                    {categories.map((item) => {
                        return (
                            <ul key={item.id} className="text-lg cursor-pointer space-y-2">
                                <MenuItem slug={item.slug} item={{ ...item, expanded: false }} />
                            </ul>
                        )
                    })}
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="brands">
                <AccordionTrigger className='sticky top-0'>BRAND</AccordionTrigger>
                <AccordionContent className='max-h-[350px] overflow-auto'>
                    {brands.map((item) => (
                        <div className="space-x-2 flex items-baseline space-y-3" key={item.name}>
                            <Checkbox id={item.name} value={item.slug} className='w-5 h-5 border-2' />
                            <label
                                htmlFor={item.name}
                                className="text-lg  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                {item.name}
                            </label>
                        </div>
                    ))}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

export default FilterClient
'use client';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useSearchParams } from 'next/navigation';
import React from 'react'

interface PageTitleContainerProps {
    countResult?: number;
}

const PageTitleContainer = ({
    countResult
}: PageTitleContainerProps) => {
    const searchParams = useSearchParams();
    const q = searchParams.get("q")
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
            <div className="block-result text-start">
                <h1 className="text-2xl font-medium">{q ? `Result for "${q}"`  : "All Products"}</h1>
                <span className="text-[18px] text-foreground/30">{countResult} results found</span>
            </div>
            <div className="ml-auto">
                <div className="flex flex-row space-x-4">
                    <p className="text-xl text-foreground/20" >
                        sort by :
                    </p>
                    <Select >
                        <SelectTrigger className="w-[180px] focus-visible:outline-none">
                            <SelectValue placeholder="Select a fruit" />
                        </SelectTrigger>
                        <SelectContent className="focus-visible:outline-none">
                            <SelectGroup>
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                                <SelectItem value="blueberry">Blueberry</SelectItem>
                                <SelectItem value="grapes">Grapes</SelectItem>
                                <SelectItem value="pineapple">Pineapple</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    )
}

export default PageTitleContainer
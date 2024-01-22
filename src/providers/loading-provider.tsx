'use client';
import { EachElement } from '@/EachElement';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import React from 'react'

interface LoadingProviderProps {
    count: number;
}

const LoadingProvider = ({
    count
}: LoadingProviderProps) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mb-10 mt-10'>
            <EachElement
                render={(item) => (
                    <Card key={item}>
                        <CardHeader>
                            <CardTitle className="shadow-none bg-gray-200 border-r-4 h-7 gap-4 items-center p-2 rounded" />
                            <CardTitle className='shadow-none bg-gray-200 border-r-4 h-7 gap-4 items-center p-2 rounded w-20' />
                        </CardHeader>
                        <CardContent className='shadow-none bg-gray-200 border-r-4 gap-4 items-center p-2 rounded h-[150px]' />
                        <CardFooter className='flex justify-between px-5 py-3 z-10'>
                            <h1 className="shadow-none bg-gray-200 border-r-4 h-10 gap-4 items-center p-2 rounded w-20" />
                            <button
                                className={
                                    cn(
                                        "bg-gray-200 text-white hover:scale-[1.15]  shadow-none w-20 border-r-4 h-10 gap-4 items-center p-2 rounded hover:transition-all hover:duration-200 duration-200 z-10"
                                    )
                                }
                            />
                        </CardFooter>
                    </Card>
                )}
                of={Array.from(Array(count).keys(), i => i + 1)}
            />
        </div>

    )
}

export default LoadingProvider
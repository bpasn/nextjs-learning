import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import React from 'react';

const Loading = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
                <div className="text-start">
                    <h1 className="text-2xl font-medium shadow-none w-[50%] bg-gray-200 border-r-4 h-7 gap-4 items-center p-2 rounded mb-3"></h1>
                    <span className="text-[18px] text-foreground/30 block w-[25%] shadow-none bg-gray-200 border-r-4 h-7 gap-4 items-center p-2 rounded"></span>
                </div>
                <div className="md:ml-auto">
                    <div className="flex flex-row space-x-4">
                        <p className="text-xl text-foreground/20 w-[100px] shadow-none bg-gray-200 border-r-4 h-7 gap-4 items-center p-2 rounded" />
                        <div className='w-[180px]  shadow-none bg-gray-200 border-r-4 h-7 gap-4 items-center p-2 rounded'/>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mb-10 mt-10'>
                {Array.from(Array(10).keys(), i => i + 1).map(item => (
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
                ))}
            </div>
        </div>

    );
};

export default Loading;
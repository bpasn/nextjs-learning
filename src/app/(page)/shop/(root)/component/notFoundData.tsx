'use client';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const NotFound = ({
    error
}: {
    error: Error
}) => {
    const err = JSON.parse(error.message) as {
        message:string;
        title:string
    };
    return (
        <div className="container text-center grid place-items-center h-[350px]">
            <Image
                src={"https://www.bnn.in.th/_nuxt/img/icon-search-not-found.5976b67.svg"}
                alt="no-result"
                width={350}
                height={350}
                className="w-50 h-auth"
            />
            <h1 className="text-2xl">{err.title}</h1>
            <p className="text-lg">{err.message}</p>
            <Link href={"/"} className='border p-3 rounded hover:bg-foreground/10 transition-all duration-200 text-destructive'> Go to shopping</Link>
        </div>
    )
}

export default NotFound
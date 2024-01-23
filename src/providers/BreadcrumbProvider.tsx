"use client";
import BreadcrumbComponent from '@/components/BreadcrumbComponent';
import React, { useEffect, useState } from 'react'

type Props = {}

const BreadcrumbProvider = (props: Props) => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;
    return (
        <BreadcrumbComponent />
    )
}

export default BreadcrumbProvider
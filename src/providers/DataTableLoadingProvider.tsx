'use client';
import DataTable from '@/components/ui/data-table';
import { columnSkeleton } from '@/lib/columnSkeleton';
import React, { useEffect, useState } from 'react'

type Props = {}

const DataTableLoadingProvider = (props: Props) => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;
    return <DataTable data={[
        {
            colOne: "1",
            colTwo: "1",
            colTree: "1",
            colFour: "1",
            colFive: "1",
        },

    ]} columns={columnSkeleton} />
}

export default DataTableLoadingProvider
'use client';
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    ColumnFilter,
    useReactTable,
    PaginationOptions,
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./pagination";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";



interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    isPagination?: boolean;
    renderPagination?: () => React.ReactNode;
    pagination?: {
        pageIndex: number;
        pageSize: number;
    };
    pageCount?: number;
}
function DataTable<TData, TValue>({
    columns,
    data,
    isPagination = false,
    pagination,
    renderPagination,
}: DataTableProps<TData, TValue>) {
    const table = useReactTable(
        {
            data,
            columns,
            getCoreRowModel: getCoreRowModel(),
            getPaginationRowModel: getPaginationRowModel(),
            initialState: {
                pagination
            },
        });
    return (
        <div>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map(header => {
                                    return (
                                        (
                                            <TableHead key={header.id}>
                                                {header.isPlaceholder
                                                    ? null
                                                    : flexRender(
                                                        header.column.columnDef.header
                                                        , header.getContext())}
                                            </TableHead>
                                        )
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => {
                                return (
                                    (
                                        <TableRow
                                            key={row.id}
                                            data-state={row.getIsSelected() && "selected"}
                                        >
                                            {row.getVisibleCells().map((cell) => (
                                                <TableCell key={cell.id}>
                                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    )
                                )
                            })
                        ) : (
                            <TableRow >
                                <TableCell colSpan={columns.length} className={"h-24 text-center"}>No Results</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>

            </div>
            
        </div>
    )
}


const generatePagination = (count: number, ellipsis: string = "...") => (page: number, total: number) => {
    const { max, min, floor } = Math;
    const range = (lo: number, hi: number) => Array.from({ length: hi - lo }, (_, i) => i + lo);
    const start = max(1, min(page - floor((count - 3) / 2), total - count + 2));
    const end = min(total, max(page + floor((count - 2) / 2), count - 1));
    return [
        ...(start > 2 ? [1, ellipsis] : start > 1 ? [1] : []),
        ...range(start, end + 1),
        ...(end < total - 1 ? [ellipsis, total] : end < total ? [total] : [])
    ]
}
export default DataTable
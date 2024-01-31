import React from 'react'
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from './ui/pagination'
import { cn } from '@/lib/utils'
import { count } from 'console'

interface PaginationProps {
    pageIndex: number;
    pageSize: number;
    count: number;
}

const PaginationComponent = ({
    pageIndex,
    pageSize,
    count
}: PaginationProps) => {
    return (
        <Pagination className="mt-10 justify-end">
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href={`?page=${pageIndex - 1}&pageSize=${pageSize}`} />
                </PaginationItem>
                {paginate(pageIndex, Math.ceil(count / pageSize)).map(e => {
                    return e === null ? (
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                    ) : (
                        <PaginationItem >
                            <PaginationLink
                                className={
                                    cn(
                                        pageIndex === e ? "bg-foreground text-white" : ""
                                    )
                                }
                                href={{
                                    pathname: "",
                                    query: {
                                        page: e,
                                        pageSize: 10
                                    }
                                }}>{e}</PaginationLink>
                        </PaginationItem>
                    )
                })}
                <PaginationItem>
                    <PaginationNext href={`?page=${pageIndex + 1}&pageSize=${pageSize}`} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}
function paginate(current: number, max: number): (number | null)[] {
    let items: (number | null)[] = [];

    items.push(1);

    if (current === 1 && max === 1) return items;
    if (current > 4) items.push(null)

    let r = 2, r1 = current - r, r2 = current + r

    for (let i = r1 > 2 ? r1 : 2; i <= Math.min(max, r2); i++) items.push(i)

    if (r2 + 1 < max) items.push(null)
    if (r2 < max) items.push(max)

    return items
}
export default PaginationComponent
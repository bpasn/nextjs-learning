import DataTable from "@/components/ui/data-table"
import { ColumnDef } from "@tanstack/react-table"

interface TableSkeltonProps<TData> {
    columns: ColumnDef<TData, unknown>[];
    data: TData[]
}
const TableSkeleton = <TData,>({
    columns,
    data
}: TableSkeltonProps<TData>) => {
    return (
        <DataTable
            data={data}
            columns={columns}
        />
    )
}

export default TableSkeleton
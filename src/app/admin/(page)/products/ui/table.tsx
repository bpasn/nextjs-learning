import DataTable from "@/components/ui/data-table";
import { fetchData } from "../action/fetch";
import { productColumn } from "../column/productColumn";
import { delay } from "@/lib/utils";

export default async function ProductTable({
    page,
    pageSize
}: {
    page: number;
    pageSize: number;
}) {
    await delay(2 * 1000)
    const product = await fetchData(page, pageSize);
    return (
        <DataTable
            data={product}
            columns={productColumn}
        />
    )
}
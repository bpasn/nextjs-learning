import DataTable from "@/components/ui/data-table";
import { fetchData } from "../action";
import { categoriesColumn } from "../column/categoriesColumn";
import { delay } from "@/lib/utils";

export default async function CategoryTable({
    page,
    pageSize
}: {
    page: number;
    pageSize: number;
}) {
    await delay(2 * 1000)
    const category = await fetchData(page, pageSize);
    return (
        <DataTable
            data={category}
            columns={categoriesColumn}
        />
    )
}
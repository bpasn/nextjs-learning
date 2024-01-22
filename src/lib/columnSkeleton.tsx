import { ColumnDef } from "@tanstack/react-table"

export const columnSkeleton: ColumnDef<{
    colOne: string;
    colTwo: string;
    colTree: string;
    colFour: string;
    colFive: string;
}>[] = [
        {
            "accessorKey": "colOne",
            "header": () => <div className="shadow-none bg-gray-200 border-r-4  h-7 gap-4 items-center p-2 rounded"></div>,
            cell() {
                return <div className="shadow-none bg-gray-200 border-r-4 h-[150px] gap-4 items-center p-2 rounded"></div>
            }
        },
        {
            "accessorKey": "colTwo",
            "header": () => <div className="shadow-none bg-gray-200 border-r-4 h-7 gap-4 items-center p-2 rounded"></div>,
            cell() {
                return <div className="shadow-none bg-gray-200 border-r-4 h-7 gap-4 items-center p-2 rounded"></div>
            }
        },
        {
            "accessorKey": "colTree",
            "header": () => <div className="shadow-none bg-gray-200 border-r-4 h-7 gap-4 items-center p-2 rounded"></div>,
            cell() {
                return <div className="shadow-none bg-gray-200 border-r-4 h-7 gap-4 items-center p-2 rounded"></div>
            }
        },
        {
            "accessorKey": "colFour",
            "header": () => <div className="shadow-none bg-gray-200 border-r-4 h-7 gap-4 items-center p-2 rounded"></div>,
            cell() {
                return <div className="shadow-none bg-gray-200 border-r-4 h-7 gap-4 items-center p-2 rounded"></div>
            }
        },
        {
            "accessorKey": "colFive",
            "header": () => <div className="shadow-none bg-gray-200 border-r-4 h-7 gap-4 items-center p-2 rounded"></div>,
            cell() {
                return <div className="shadow-none bg-gray-200 border-r-4 h-7 gap-4 items-center p-2 rounded"></div>
            }
        },

    ]
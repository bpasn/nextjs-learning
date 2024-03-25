"use client";

import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

const Header = () => {
    const router = useRouter();
    return (
        <div className="flex items-center justify-between mb-10">
            <Heading
                title={`Categories`}
                description='SubCategorys'
            />
            <Button onClick={() => router.push(`/admin/categories/new`)}>
                <Plus className="mr-2 h-4 w-4" />
                Add New
            </Button>
        </div>
    )
}

export default Header
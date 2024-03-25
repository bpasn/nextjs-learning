'use client';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form';
import Heading from "@/components/ui/heading";
import { Input } from '@/components/ui/input';
import { CategoryInfer, CategoryResover } from "@/schemas/categories";
import { Category } from '@prisma/client';
import { useForm } from "react-hook-form";

interface CategoriesForm {
    categories?: Category | null
}
const CategoriesForm = ({
    categories
}: CategoriesForm) => {
    const form = useForm<CategoryInfer>({
        resolver: CategoryResover,
        defaultValues: categories ? categories : {
            categories: [],
            name: "",
            slug: ""
        }
    });
    const onSubmit = async (data: CategoryInfer) => {
        const result = await fetch("/api/admin/categories", {
            method: "POST",
            body: JSON.stringify(data)
        });
        if (result.ok) {
            window.location.href = "/admin/categories";
        }
        alert(result.status)
    }
    return (
        <div>
            <Heading
                title="Create Categories"
                description="You can create categories here!."
            />
            <div className="mt-10">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
                        <div className="grid grid-cols-1 gap-8">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Category label" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <Button className="ml-auto" type="submit">
                            Save Changed
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default CategoriesForm
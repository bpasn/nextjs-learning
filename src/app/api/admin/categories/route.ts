import { NextResponse } from "next/server"
import { createCategories } from "./action";
import { categorySchema } from "@/schemas/categories";

export const POST = async (req: Request) => {
    const body = await req.json();
    const validate = categorySchema.parse(body);
    try {
        console.log(validate)
        await createCategories(validate);
        return NextResponse.json({
            success: false,
            message: body
        })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error
        })
    }
}
import { NextResponse } from "next/server"

interface RouterProps {
    params: {
        name: string;
    }
}
export const GET = async (req: Request, { params }: RouterProps) => {
    const url = new URL(req.url);
    return NextResponse.json({ method: req.method, searchParams: url.searchParams });
}

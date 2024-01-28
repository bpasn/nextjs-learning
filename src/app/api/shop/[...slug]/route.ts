// pattern slug is all params is categories and last params is product name
export const GET = async (
    req: Request,
    { params }: {
        params: {
            slug: string[];
        };
    }
) => {
    let categories = params.slug;
    let productName = categories.pop(); // last element of slug is product
    console.log({
        categories,
        productName
    })
    try {

    } catch (error) {

    }
    return Response.json({});
};
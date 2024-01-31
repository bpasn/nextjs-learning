

export const fetchData = async (page: number = 1, limit: number = 10): Promise<ProductModel[]> => {
    'use server';
    const result = await fetch(`https://api.escuelajs.co/api/v1/products?limit=${limit}&offset=${((Number(page)) * Number(limit)) - Number(limit)}`);
    if (result.ok) {
        const data: ProductModel[] = await result.json();
        return data;
    }
    return [];
};
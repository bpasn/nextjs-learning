

export const fetchData = async (page: number, limit: number): Promise<ProductModel[]> => {
    'use server';
    const result = await fetch("https://api.escuelajs.co/api/v1/products");
    if (result.ok) {
        const data: ProductModel[] = await result.json();
        return data;
    }
    return [];
};
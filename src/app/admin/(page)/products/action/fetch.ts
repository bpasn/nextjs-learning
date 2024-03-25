

export const fetchData = async (page: number = 1, limit: number = 10): Promise<ProductModel[]> => {
    'use server';
    const query = new URLSearchParams({
        limit: String(limit),
        offset: String(((Number(page)) * Number(limit)) - Number(limit))
    });
    let url = `https://api.escuelajs.co/api/v1/products?&` + query;
    const result = await fetch(url);
    if (result.ok) {
        const data: ProductModel[] = await result.json();
        return data;
    }
    return [];
};

export const fetchTotalPage = async (): Promise<number> => {
    'use server';
    const result = await fetch(`https://api.escuelajs.co/api/v1/products`);
    if (result.ok) {
        const data = await result.json();
        return data.length;
    }
    return 0;
}
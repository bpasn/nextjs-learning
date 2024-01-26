export const fetchData = async (categoryId?: string, q?: string, p?: string, l?: string): Promise<ProductModel[]> => {
  'use server';
  let url = `https://api.escuelajs.co/api/v1/products/?&offset=${Number(l ? l : 10) * Number(p ?? 0)}&limit=${l ?? 10}`;
  if (categoryId) url = url.concat(`&categoryId=${categoryId}`);
  if (q) url = url.concat(`&title=${q}`);

  console.log(url)
  const response = await fetch(url);
  return await response.json() as ProductModel[];
}
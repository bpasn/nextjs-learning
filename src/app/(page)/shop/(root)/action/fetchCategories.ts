import { delay } from '@/lib/utils';
import { categories } from './category';
export interface Category {
    id: number;
    slug: string;
    name: string;
    categories: Category[];
    custom_url: string | null;
    media: Media
}
export interface Media {
    icons: Icons[];
}
export interface Icons {
    id: number;
    name: string;
    file_name: string;
    type: string;
    url: string;
    covers: Covers;
}
export interface Covers {
    original: string;
    thumbnail: string;
    square_small: string;
    square_medium: string;
}
export const getCategories = async (): Promise<Category[]> => {
    'use server';
    await delay(1.5 * 1000);
    return categories;
}
import { delay } from '@/lib/utils';
import { categories } from './category';

export const getCategories = async (): Promise<Category[]> => {
    'use server';
    await delay(1.5 * 1000);
    return categories;
}
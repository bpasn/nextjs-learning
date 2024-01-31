interface Category {
    id: number;
    slug: string;
    name: string;
    categories: Category[];
    custom_url: string | null;
    media?: Media;
}
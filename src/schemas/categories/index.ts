import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const baseCategorySchema = z.object({
  name: z.string().min(1, {
    message: "Please enter your name category",
  }),
  slug: z.string(),
});

type CategoryZod = z.infer<typeof baseCategorySchema> & {
  categories: CategoryZod[];
}

export const categorySchema: z.ZodType<CategoryZod> = baseCategorySchema.extend({
  categories: z.lazy(() => categorySchema.array())
})
export type CategoryInfer = z.infer<typeof categorySchema>;

export const CategoryResover = zodResolver(categorySchema);

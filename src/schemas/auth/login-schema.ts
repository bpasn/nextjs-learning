import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
export const loginSchema = zod.object({
    email: zod.string().min(1),
    password: zod.string().min(1)
});
export type loginSchemaInfer = zod.infer<typeof loginSchema>;

export const loginSchemaResove = zodResolver(loginSchema);
import { z } from "zod";

export const addPlateSchema = z.object({
    name: z.string(),
    price: z.number(),
    available: z.boolean().default(false),
    description: z.string(),
    ingredients: z.array(z.string()).optional(),
    category: z.string()
});

export const updatePlateSchema = z.object({
    name: z.string().optional(),
    price: z.number().optional(),
    available: z.boolean().optional(),
    description: z.string().optional(),
    ingredients: z.array(z.string()).optional(),
    category: z.string().optional()
})
import { z } from "zod";

export const CreateTodoSchema = z.object({
    title: z.string().min(3, "O título deve ter no mínimo 3 caracteres").max(100),
    description: z.string().optional(),
})

export type CreateTodoInput = z.infer<typeof CreateTodoSchema>;

export const UpdateTodoSchema = z.object({
    title: z.string().min(3, "O título deve ter no mínimo 3 caracteres").max(100).optional(),
    description: z.string().optional(),
    completed: z.boolean().optional(),
})

export type UpdateTodoInput = z.infer<typeof UpdateTodoSchema>;

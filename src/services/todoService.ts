import { Todo } from "../models/Todo";
import prisma from "../database";

export class TodoService {
    async createTodo(title: string, description?: string): Promise<Todo> {
        return await prisma.task.create({
            data: {
                title,
                description,
                createdAt: new Date(),
            },
        });
    }

    async updateTodo(id: number, title?: string, description?: string, completed?: boolean): Promise<Todo> {
        return await prisma.task.update({
            where: { id },
            data: {
                title,
                description,
                completed,
            },
        });
    }


    async getTodos(): Promise<Todo[]> {
        return await prisma.task.findMany();
    }
}
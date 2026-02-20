import { Todo } from "../core/Todo";
import prisma from "../database";
import { ITodoRepository } from "../core/ITodoRepository";

export class TodoRepository implements ITodoRepository {
    async create(todoData: Todo): Promise<Todo> {
        return await prisma.task.create({ data: todoData })
    }

    async update(id: string, title?: string, description?: string, completed?: boolean): Promise<Todo> {
        return await prisma.task.update({
            where: { id },
            data: {
                title,
                description,
                completed
            }
        });
    }

    async findAll(): Promise<Todo[]> {
        return await prisma.task.findMany();
    }
}

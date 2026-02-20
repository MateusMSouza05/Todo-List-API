import { Todo } from "../core/Todo";
import { ITodoRepository } from "../core/ITodoRepository";
import { CreateTodoInput, CreateTodoSchema, UpdateTodoInput, UpdateTodoSchema } from "./todoSchema";
import { v4 as uuid } from "uuid";

export class TodoUseCases {
    constructor(private todoRepo: ITodoRepository) { }

    async createTodo(data: CreateTodoInput): Promise<Todo> {
        const { title, description } = CreateTodoSchema.parse(data);

        const todo: Todo = {
            id: uuid(),
            title,
            description,
            completed: false,
            createdAt: new Date()
        };

        await this.todoRepo.create(todo);
        return todo;
    }

    async updateTodo(id: string, data: UpdateTodoInput): Promise<Todo> {
        const { title, description, completed } = UpdateTodoSchema.parse(data);
        const todo = await this.todoRepo.update(id, title, description, completed);
        return todo;
    }

    async listTodos(): Promise<Todo[]> {
        const todos = await this.todoRepo.findAll();
        return todos;
    }
}

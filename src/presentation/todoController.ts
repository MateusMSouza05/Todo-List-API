import { Request, Response } from "express";
import { TodoUseCases } from "../application/todoUseCases";

export class TodoController {
    constructor(private useCases: TodoUseCases) { }

    async handleCreateTodo(req: Request, res: Response) {
        try {
            const todo = await this.useCases.createTodo(req.body);
            return res.status(201).json(todo);
        } catch (error: any) {
            return res.status(400).json({
                error: error.message || "Erro ao criar tarefa"
            });
        }
    }

    async updateTodo(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const updatedTodo = await this.useCases.updateTodo(id, req.body);
            return res.status(200).json(updatedTodo);
        } catch (error: any) {
            return res.status(400).json({
                error: error.message || "Erro ao atualizar tarefa"
            });
        }
    }

    async getTodos(req: Request, res: Response) {
        try {
            const todos = await this.useCases.listTodos();
            return res.status(200).json(todos);
        } catch (error: any) {
            return res.status(500).json({
                error: error.message || "Erro ao buscar tarefas"
            });
        }
    }
}

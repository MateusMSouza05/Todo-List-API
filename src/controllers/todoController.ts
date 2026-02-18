import { Request, Response } from "express";
import { TodoService } from "../services/todoService";

const todoService = new TodoService();

export class TodoController {
    async createTodo(req: Request, res: Response) {
        try {
            const { title, description } = req.body;

            if (!title) {
                return res.status(400).json({ error: "O título é obrigatório" });
            }

            const newTodo = await todoService.createTodo(title, description);
            return res.status(201).json(newTodo);
        } catch (error) {
            return res.status(500).json({ error: "Erro ao criar tarefa" });
        }
    }

    async updateTodo(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { title, description, completed } = req.body;
            const updatedTodo = await todoService.updateTodo(Number(id), title, description, completed);
            return res.status(200).json(updatedTodo);
        } catch (error) {
            return res.status(500).json({ error: "Erro ao atualizar tarefa" });
        }
    }

    async getTodos(req: Request, res: Response) {
        try {
            const todos = await todoService.getTodos();
            return res.status(200).json(todos);
        } catch (error) {
            return res.status(500).json({ error: "Erro ao buscar tarefas" });
        }
    }
}
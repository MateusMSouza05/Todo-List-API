import { Router } from 'express';
import { TodoController } from '../presentation/todoController';
import { TodoRepository } from '../infrastructure/TodoRepository';
import { TodoUseCases } from '../application/todoUseCases';


const router = Router();
const repo = new TodoRepository();
const useCases = new TodoUseCases(repo);
const controller = new TodoController(useCases);

router.post('/todos', controller.handleCreateTodo.bind(controller));
router.put('/todos/:id', controller.updateTodo.bind(controller));
router.get('/todos', controller.getTodos.bind(controller));

export default router;

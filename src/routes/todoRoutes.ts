import { Router } from 'express';
import { TodoController } from '../controllers/todoController';

const router = Router();
const todoController = new TodoController();

router.post('/todos', todoController.createTodo);
router.put('/todos/:id', todoController.updateTodo);

export default router;

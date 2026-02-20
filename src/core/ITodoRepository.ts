import { Todo } from './Todo';

export interface ITodoRepository {
    create(todo: Todo): Promise<Todo>;
    update(id: string, title?: string, description?: string, completed?: boolean): Promise<Todo>;
    findAll(): Promise<Todo[]>;
}

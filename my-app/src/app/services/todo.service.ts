import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [];
  private STORAGE_KEY = 'todos';
  constructor() {
    this.loadTodos();
  }

  private loadTodos(): void {
    const storedTodos = localStorage.getItem(this.STORAGE_KEY);
    this.todos = storedTodos ? JSON.parse(storedTodos) : [];
  }

  private saveTodos(): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.todos));
  }

  getTodos(filter: 'all' | 'active' | 'completed' = 'all'): Todo[] {
    if (filter === 'active') {
      return this.todos.filter((todo) => !todo.complete);
    } else if (filter === 'completed') {
      return this.todos.filter((todo) => todo.complete);
    }
    return this.todos;
  }

  addTodos(title: string): void {
    const todo: Todo = {
      id: this.todos.length ? Math.max(...this.todos.map((t) => t.id)) + 1 : 1,
      title,
      complete: false,
    };
    this.todos.push(todo);
    this.saveTodos();
  }

  toggleTodo(id: number): void {
    const todo = this.todos.find((t) => t.id === id);
    if (todo) {
      todo.complete = !todo.complete;
      this.saveTodos();
    }
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter((t) => t.id !== id);
    this.saveTodos();
  }
}

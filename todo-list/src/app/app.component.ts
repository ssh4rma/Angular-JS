import { Component } from '@angular/core';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  template: `
    <h1>Simple To-Do List</h1>
    <div>
      <input
        type="text"
        [(ngModel)]="newTodo"
        placeholder="Enter a new task"
        (keyup.enter)="addTodo()"
      />
      <button (click)="addTodo()">Add Task</button>
    </div>
    <ul>
      <li *ngFor="let todo of todos" [class.completed]="todo.completed">
        <span (click)="toggleTodo(todo.id)">{{ todo.text }}</span>
        <button (click)="deleteTodo(todo.id)">Delete</button>
      </li>
    </ul>
  `,
  styles: [
    `
      h1 {
        text-align: center;
        font-size: 24px;
        margin-bottom: 20px;
      }
      div {
        margin: 20px 0;
        text-align: center;
      }
      input {
        padding: 5px;
        font-size: 16px;
        margin-right: 10px;
      }
      button {
        padding: 5px 10px;
        font-size: 16px;
        cursor: pointer;
      }
      ul {
        list-style: none;
        padding: 0;
        max-width: 400px;
        margin: 0 auto;
      }
      li {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        border-bottom: 1px solid #ccc;
      }
      li.completed span {
        text-decoration: line-through;
        color: #888;
      }
      li span {
        cursor: pointer;
      }
    `,
  ],
})
export class AppComponent {
  todos: Todo[] = [];
  newTodo: string = '';

  addTodo() {
    if (this.newTodo.trim()) {
      this.todos.push({
        id: this.todos.length + 1,
        text: this.newTodo,
        completed: false,
      });
      this.newTodo = '';
    }
  }

  toggleTodo(id: number) {
    const todo = this.todos.find((t) => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((t) => t.id !== id);
  }
}

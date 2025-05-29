import { Component, Input } from '@angular/core';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) name?: string;
  @Input({ required: true }) userId?: string;
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Build Angular Project',
      summary:
        'Apply Angular skills by building a full-featured project with routing, services, and components',
      dueDate: '15/06/25',
    },

    {
      id: 't2',
      userId: 'u2',
      title: 'Learn RxJS',
      summary:
        'Understand reactive programming and how to use RxJS operators effectively in Angular',
      dueDate: '15/06/25',
    },
  ];

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}

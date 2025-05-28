import { Component, Input, Output, EventEmitter } from '@angular/core';

// interface User {
//   id: string;
//   avatar: string;
//   name: string;
// }

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// };

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  @Input({ required: true }) user!: {
    id: string;
    avatar: string;
    name: string;
  };
  @Output()
  select = new EventEmitter();

  get imagePath() {
    return 'users/' + this.user.avatar;
  }

  onSelectUser(): void {
    this.select.emit(this.user.id);
  }
}

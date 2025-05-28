import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';

const randIdx = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  selectUser = signal(DUMMY_USERS[randIdx]);

  imagePath = computed(() => 'users/' + this.selectUser().avatar);
  // get imagePath() {
  //   return 'users/' + this.selectUser().avatar;
  // }

  //event listner on button click
  onSelectUser() {
    const randIdx = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectUser.set(DUMMY_USERS[randIdx]);
  }
}

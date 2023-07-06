import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-staff-list',
  template: `
    <ul class="user-list">
      <li class="user-card" *ngFor="let user of users$ | async">
        <div class="user-name">{{ user.name }}</div>
        <div>{{ user.email }} - <span class="details">More details</span></div>
      </li>
    </ul>
  `,
  styles: [
    `
      .user-card {
        padding: 10px 15px;
        border-radius: 5px;
        border: #c8d0ff 1px solid;
        margin-bottom: 5px;
      }
      .user-list {
        padding: 0;
        list-style: none;
      }
      .user-name {
        font-weight: bold;
        margin-bottom: 3px;
      }
      .details {
        color: blue;
        text-decoration: underline;
        cursor: pointer;
      }
    `,
  ],
})
export class StaffListComponent {
  users$ = this.usersService.getUsers();
  constructor(private usersService: UsersService) {}
}

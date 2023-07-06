import { Component } from '@angular/core';

@Component({
  selector: 'app-user-management',
  template: `
    <div style="margin-bottom: 2rem;">
      <a mat-button [routerLink]="['user-list']">User List</a>
      <a mat-button>Photo List</a>
    </div>
    <div style="display: flex; gap: 2rem">
      <aside style="width: 400px;" class="sidebar">
        <router-outlet></router-outlet>
      </aside>
      <section style="flex: 1" class="details">
        <router-outlet name="details"></router-outlet>
      </section>
    </div>
  `,
})
export class UserManagementComponent {}

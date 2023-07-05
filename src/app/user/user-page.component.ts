import { Component } from '@angular/core';

@Component({
  selector: 'app-user-page',
  template: `
    <div style="display: flex; gap: 2rem">
      <aside style="width: 400px;" class="sidebar">
        <app-user-sidebar></app-user-sidebar>
      </aside>
      <section style="flex: 1" class="details">
        <router-outlet></router-outlet>
      </section>
    </div>
  `,
})
export class UserPageComponent {}

import { Component } from '@angular/core';

@Component({
  selector: 'app-user-page',
  template: `
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
export class UserPageComponent {}

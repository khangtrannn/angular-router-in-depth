import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-settings',
  template: `
    <div style="margin-bottom: 2rem;">
      <a mat-button routerLink="general">General Settings</a>
      <a mat-button routerLink="billing">Billing Settings</a>
      <a mat-button routerLink="dashboard">Dashboard Settings</a>
    </div>
    <router-outlet></router-outlet>
  `,
  standalone: true,
  imports: [MatButtonModule, RouterModule],
})
export class SettingsComponent {}
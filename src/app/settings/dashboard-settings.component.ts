import { Component } from "@angular/core";

@Component({
  selector: 'app-dashboard-settings',
  template: `
    <h1>Dashboard Settings</h1>
    <p>Only <b>authorized</b> and <b>page owner</b> can see this page</p>
  `,
  standalone: true,
})
export class DashboardSettingsComponent {}
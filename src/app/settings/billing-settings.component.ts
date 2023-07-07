import { AsyncPipe, CommonModule, NgIf } from "@angular/common";
import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs";

@Component({
  selector: 'app-billing-settings',
  template: `
    <h1>Bill Settings</h1>
    <p *ngIf="(user$ | async) as user">Some User Data: <b>{{user?.name}}</b></p>
    <p>Only <b>authorized</b> and <b>page owner</b> can see this page</p>
  `,
  standalone: true,
  imports: [NgIf, AsyncPipe],
})
export class BillingSettingsComponent {
  user$ = inject(ActivatedRoute).data.pipe(map(({ user }) => user));
}
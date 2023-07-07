import { CommonModule } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs";

@Component({
  selector: 'app-general-settings',
  template: `
    <h1>General Settings</h1>
    <p *ngIf="(user$ | async) as user">Some User Data: <b>{{user?.email}}</b></p>
    <p>Only <b>authorized</b> and <b>page owner</b> can see this page</p>
  `,
  standalone: true,
  imports: [CommonModule],
})
export class GeneralSettingsComponent {
  user$ = inject(ActivatedRoute).data.pipe(map(({ user }) => user));
}
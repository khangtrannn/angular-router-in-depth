import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  template: `
    <img
      width="300"
      src="https://cdn-icons-png.flaticon.com/512/3408/3408591.png"
      alt="Admin Dashboard"
    />
    <h3>Admin Dashboard</h3>
    <a routerLink="" class="back">Go Back</a>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      .back {
        text-decoration: none;
        color: black;
        opacity: 0.6;
        padding: 10px 15px;
        border: rgba($color: #000000, $alpha: 0.5) solid 1px;
        border-radius: 7px;
      }
    `,
  ],
  standalone: true,
})
export class AdminDashboardComponent {}

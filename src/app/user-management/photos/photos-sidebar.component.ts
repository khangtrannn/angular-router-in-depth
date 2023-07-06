import { Observable } from "rxjs";
import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { HttpClient } from "@angular/common/http";

interface Photo {
  id: string;
  thumbnailUrl: string;
}

@Component({
  selector: "app-photos-sidebar",
  template: `
    <ul style="list-style: none;">
      <li *ngFor="let photo of photos$ | async" style="margin-top: 1rem;" class="user">
        <a
          class="link"
          [routerLink]="['/users', { outlets: { details: ['photo', photo.id] } }]"
        >
          <img [src]="photo.thumbnailUrl" alt="" width="150" />
        </a>
      </li>
    </ul>
  `,
  styles: [
    `
      .link {
        display: inline-flex;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotosSidebarComponent implements OnInit {
  photos$!: Observable<Photo[]>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.photos$ = this.http.get<Photo[]>(
      `https://jsonplaceholder.typicode.com/photos?_limit=5`
    );
  }
}
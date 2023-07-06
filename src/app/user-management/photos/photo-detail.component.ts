import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subject, takeUntil } from "rxjs";

@Component({
  template: `
    <div>
      {{ image }}
      <h1>Photo Detail</h1>
      <img *ngFor="let i of [image]" style="max-width: 500px;" src="https://source.unsplash.com/random/?person" alt="Random Photo">
    </div>
  `,
})
export class PhotoDetailComponent implements OnInit, OnDestroy {
  image = 9;

  private destroy$ = new Subject<void>();

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.image++;
      console.log('image: ', this.image);
    });
  }
  
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
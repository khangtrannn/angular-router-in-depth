import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthPreloadStrategy implements PreloadingStrategy {
  constructor(private auth: AuthService) {}
  // The 'fn' function is responsible for load the lazy load module we request
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    return this.auth
      .isLoggedIn()
      .pipe(switchMap((isUserLogged) => (isUserLogged ? fn() : of(null))));
  }
}

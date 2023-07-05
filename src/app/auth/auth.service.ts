import { Injectable } from "@angular/core";
import { delay, of } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn() {
    return of(true).pipe(delay(500));
  }

  hasPermissions() {
    return of(true);
  }
}
import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated$ = new BehaviorSubject(true);
  authUser$ = inject(HttpClient).get(`https://jsonplaceholder.typicode.com/users/9`);
}
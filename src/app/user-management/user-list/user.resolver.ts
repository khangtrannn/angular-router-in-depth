import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { EMPTY, Observable, catchError, delay } from 'rxjs';
import { User } from './user';
import { UsersService } from '../../services/users.service';

/**
 * Drawback
 * - There will be some delay before the content showing to users
 */

@Injectable({
  providedIn: 'root',
})
export class UserResolver {
  constructor(private users: UsersService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    return this.users.getUser(route.params?.['id']).pipe(
      delay(1000),
      catchError(() => {
        this.router.navigate(['']);
        return EMPTY;
      })
    );
  }
}

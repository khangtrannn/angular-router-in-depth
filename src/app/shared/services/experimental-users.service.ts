import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../../user-management/user-list/user';

@Injectable({
  providedIn: 'root',
})
export class ExperimentalUsersService {
  getUsers(): Observable<User[]> {
    return of([
      { id: 0, name: 'Dummy', username: 'dummy004', email: 'dummy@dummy.com' },
    ]);
  }
}

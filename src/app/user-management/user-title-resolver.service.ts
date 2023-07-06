import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { map, Observable, of, pluck } from 'rxjs';
import { UsersService } from '../shared/services/users.service';

/**
 * This resolver doesn't work with named router outlet
 */

@Injectable({
  providedIn: 'root',
})
export class UserTitleResolverService implements Resolve<string> {
  constructor(private usersService: UsersService) {}

  resolve(route: ActivatedRouteSnapshot): string | Observable<string> | Promise<string> {
    console.log('User detail title resolve is running...');

    // return this.usersService.getUser(+route.paramMap.get('id')!).pipe(
    //   pluck('name'),
    //   map(name => `User - ${name}`)
    // )

    return of('Khang HED');
  }
}

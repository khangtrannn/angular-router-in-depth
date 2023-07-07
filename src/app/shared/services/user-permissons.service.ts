import { Injectable } from "@angular/core";
import { BehaviorSubject, of } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class UserPermissionsService {
  isAdmin$ = of(false);
  isProfileOwner$ = new BehaviorSubject<boolean>(true);
}
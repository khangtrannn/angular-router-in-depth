import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { SaveData } from './save-data.interface';

@Injectable({
  providedIn: 'root'
})
export class FormGuard {
  constructor(private dialog: MatDialog) {}

  canDeactivate(
    component: SaveData,
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
      if (!component.isDataSaved()) {
        const dialogRef = this.dialog.open(ConfirmDialogComponent);

        // This function will return an observable stream
        // Either falsy value if we click cancel or true if click Forward button
        return dialogRef.afterClosed();
      }

      return of(true);
  }
}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

import { UserListComponent } from './user-list.component';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';

@NgModule({
  declarations: [UserComponent, UserListComponent],
  imports: [CommonModule, RouterModule, MatButtonModule, UserRoutingModule],
})
export class UserModule {}

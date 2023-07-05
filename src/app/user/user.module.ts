import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

import { UserListComponent } from './user-list.component';
import { UserPageComponent } from './user-page.component';
import { UserRoutingModule } from './user-routing.module';
import { UserSidebarComponent } from './user-sidebar.component';
import { UserComponent } from './user.component';

@NgModule({
  declarations: [
    UserPageComponent,
    UserComponent,
    UserListComponent,
    UserSidebarComponent,
  ],
  imports: [CommonModule, RouterModule, MatButtonModule, UserRoutingModule],
})
export class UserModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { PhotosSidebarComponent } from './photos/photos-sidebar.component';

import { UserListComponent } from './user-list/user-list.component';
import { UserManagementComponent } from './user-management.component';
import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserSidebarComponent } from './user-list/user-sidebar.component';
import { UserComponent } from './user-list/user.component';

@NgModule({
  declarations: [
    UserManagementComponent,
    UserComponent,
    UserListComponent,
    UserSidebarComponent,
    PhotosSidebarComponent,
  ],
  imports: [CommonModule, RouterModule, MatButtonModule, UserManagementRoutingModule],
})
export class UserManagementModule {}

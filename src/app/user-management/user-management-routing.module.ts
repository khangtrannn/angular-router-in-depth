import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSidebarComponent } from './user-list/user-sidebar.component';
import { UserComponent } from './user-list/user.component';
import { UserResolver } from './user-list/user.resolver';
import { UserManagementComponent } from './user-management.component';

const routes: Routes = [
  {
    path: '',
    component: UserManagementComponent,
    children: [
      {
        path: 'user-list',
        children: [
          {
            path: '',
            component: UserSidebarComponent,
          },
          {
            path: 'user/:id',
            component: UserComponent,
            outlet: 'details',
            resolve: {
              /**
               * Besides UserResolver, we can use as many resolver as we need
               * Child route will not get this data, so if you have child route and you want to get access to this resolve
               * you have to use this.activatedRoute.parent
               */
              user: UserResolver,
            },
          },
        ]
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserManagementRoutingModule {}

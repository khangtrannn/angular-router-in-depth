import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormGuard } from '../auth/form.guard';
import { PermissionsGuard } from '../auth/permissions.guard';
import { ExperimentalUsersService } from '../services/experimental-users.service';
import { UsersService } from '../services/users.service';
import { AddProductComponent } from './add-product/add-product.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ListComponent } from './list/list.component';
import { StaffListExperimentalComponent } from './staff-list-experimental/staff-list-experimental.component';
import { StaffListComponent } from './staff-list/staff-list.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes = [
  {
    path: '',
    component: WelcomeComponent,
    // The same behavior with add canActivate: [PermissionsGuard] to every child
    // canActivateChild: [PermissionsGuard],
    // children: [
    //   { path: 'add-user', component: AddUserComponent },
    //   { path: 'add-product', component: AddProductComponent }
    // ]

    /**
     * Pattern Component-Less Route
     */
    children: [
      {
        // So we have kind of middleware route which is has empty string
        // Using this kind of middleware to group some routes under the specific guard
        // With this approach, we can mix between normal routes and guard routes
        path: '',
        canActivateChild: [PermissionsGuard],
        children: [
          {
            path: 'add-user',
            canDeactivate: [FormGuard],
            component: AddUserComponent,
          },
          {
            path: 'add-product',
            canDeactivate: [FormGuard],
            component: AddProductComponent,
          },
        ],
      },
      {
        path: 'list',
        component: ListComponent,
      },
      {
        path: 'staff-list',
        component: StaffListComponent,
      },
      {
        path: 'staff-list-experimental',
        component: StaffListExperimentalComponent,
        providers: [
          {
            provide: UsersService,
            useExisting: ExperimentalUsersService,
          }
        ]
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

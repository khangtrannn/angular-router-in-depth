import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './admin/welcome/welcome.component';
import { AuthenticationGuard } from './auth/authentication.guard';
import { PermissionsGuard } from './auth/permissions.guard';
import { ListComponent } from './admin/list/list.component';

const routes: Routes = [
  {
    path: 'admin',
    component: WelcomeComponent,
    canActivate: [AuthenticationGuard],
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
          { path: 'add-user', component: AddUserComponent },
          { path: 'add-product', component: AddProductComponent },
        ]
      },
      {
        path: 'list',
        component: ListComponent,
      }
    ]
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

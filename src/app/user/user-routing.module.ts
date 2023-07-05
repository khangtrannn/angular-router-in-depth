import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list.component';
import { UserComponent } from './user.component';
import { UserResolver } from './user.resolver';

const routes: Routes = [
  { path: '', component: UserListComponent },
  {
    path: 'user/:id',
    component: UserComponent,
    resolve: {
      user: UserResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}

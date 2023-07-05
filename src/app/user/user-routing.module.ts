import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from './user-page.component';
import { UserComponent } from './user.component';
import { UserResolver } from './user.resolver';

const routes: Routes = [
  {
    path: '',
    component: UserPageComponent,
    children: [
      {
        path: ':id',
        component: UserComponent,
        resolve: {
          /**
           * Besides UserResolver, we can use as many resolver as we need
           * Child route will not get this data, so if you have child route and you want to get access to this resolve
           * you have to use this.activatedRoute.parent
           */
          user: UserResolver,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}

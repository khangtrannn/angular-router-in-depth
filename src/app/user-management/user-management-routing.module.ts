import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoDetailComponent } from './photos/photo-detail.component';
import { PhotosSidebarComponent } from './photos/photos-sidebar.component';
import { UserSidebarComponent } from './user-list/user-sidebar.component';
import { UserComponent } from './user-list/user.component';
import { UserResolver } from './user-list/user.resolver';
import { UserManagementComponent } from './user-management.component';
import { UserTitleResolverService } from './user-title-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: UserManagementComponent,
    title: 'User Management',
    children: [
      {
        path: 'user-list',
        title: 'User List',
        component: UserSidebarComponent,
      },
      {
        path: 'user/:id',
        component: UserComponent,
        outlet: 'details',
        // TODO: the title resolve service is not working properly
        title: UserTitleResolverService,
        resolve: {
          /**
           * Besides UserResolver, we can use as many resolver as we need
           * Child route will not get this data, so if you have child route and you want to get access to this resolve
           * you have to use this.activatedRoute.parent
           */
          user: UserResolver,
          title: UserTitleResolverService,
        },
      },
      {
        path: 'photo-list',
        component: PhotosSidebarComponent,
        title: 'Photo List',
      },
      {
        path: 'photo/:id',
        title: 'Photo Detail',
        component: PhotoDetailComponent,
        outlet: 'details',
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserManagementRoutingModule {}

import { inject, NgModule } from '@angular/core';
import { Route, Router, RouterModule, Routes, UrlSegment } from '@angular/router';
import { AuthPreloadStrategy } from './auth/auth-preload-strategy';
import { HomeComponent } from './home/home.component';
import { AuthService } from './shared/services/auth.service';

import { UserPermissionsService } from './shared/services/user-permissons.service';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    // If we use canActivate here, it means even user isn't authorized, the app module js will be still loaded
    // canActivate: [AuthenticationGuard],
    // canLoad: [LoadGuard],
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/admin-dashboard.component').then((c) => c.AdminDashboardComponent),
    canMatch: [(route: Route, segments: UrlSegment[]) => {
      const router = inject(Router);
      // return inject(UserPermissionsService).isAdmin$.pipe(
      //   map(isAdmin => isAdmin || router.createUrlTree(['']))
      // );

      return inject(UserPermissionsService).isAdmin$;
    }]
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/user-dashboard.component').then((c) => c.UserDashboardComponent),
  },
  {
    path: 'users',
    loadChildren: () => import('./user-management/user-management.module').then((m) => m.UserManagementModule),
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings-routes').then((r) => r.SettingsRoutes),
  },
  {
    path: '',
    title: 'Homepage',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    /**
     * preloadAllModules strategy doesn't work with canLoad
     * why doesn't happen? Because it is by design preloadAllModules strategy doesn't work with canLoad guard
     * And it is basically makes sense because pre-loading happens when we start the application, at this point of time
     * we cannot detect if user as example logged in and that's why we have to resolve it at the run time later on
     * when we explicitly navigate to this router, so that's why it doesn't work together
     */
    // preloadingStrategy: PreloadAllModules,
    preloadingStrategy: AuthPreloadStrategy
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

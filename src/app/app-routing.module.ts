import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthPreloadStrategy } from './auth/auth-preload-strategy';
import { LoadGuard } from './auth/load.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
    // If we use canActivate here, it means even user isn't authorized, the app module js will be still loaded
    // canActivate: [AuthenticationGuard],
    // canLoad: [LoadGuard],
  },
  {
    path: 'users',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: '',
    component: HomeComponent
  }
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

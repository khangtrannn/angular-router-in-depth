import { inject } from "@angular/core";
import { Routes } from "@angular/router";
import { AuthService } from "../shared/services/auth.service";
import { UserPermissionsService } from "../shared/services/user-permissons.service";

export const SettingsRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./settings.component').then((c) => c.SettingsComponent),
    canActivate: [() => inject(AuthService).isAuthenticated$],
    children: [
      {
        path: '',
        resolve: {
          user: () => inject(AuthService).authUser$,
        },
        canActivate: [
          () => inject(UserPermissionsService).isProfileOwner$,
        ],
        children: [
          {
            path: 'general',
            loadComponent: () => import('./general-settings.component').then((c) => c.GeneralSettingsComponent),
          },
          {
            path: 'billing',
            loadComponent: () => import('./billing-settings.component').then((c) => c.BillingSettingsComponent),
          },
        ]
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./dashboard-settings.component').then((c) => c.DashboardSettingsComponent),
      }
    ]
  },
]
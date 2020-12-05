import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthModule, IsAuthGuard, NotAuthGuard } from '../../core/auth';

import { LandingPage } from './landing.page';

const routes: Routes = [
  {
    path: '',
    component: LandingPage,
    children: [
      {
        canActivate: [NotAuthGuard],
        matcher: () => !localStorage.getItem('keplis:token') ? ({ consumed: [] }) : null,
        loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule),
      },
      {
        canActivate: [IsAuthGuard],
        matcher: () => localStorage.getItem('keplis:token') ? ({ consumed: [] }) : null,
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), AuthModule],
  exports: [RouterModule],
})
export class LandingRoutingModule { }

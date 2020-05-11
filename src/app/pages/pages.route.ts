import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent, data: { name: 'Dashboard'} },
      {path: 'progress', component: ProgressComponent, data: { name: 'Progress'} },
      {path: 'graficas1', component: Graficas1Component, data: { name: 'Gráficas'} },
      {path: 'promesas', component: PromesasComponent, data: { name: 'Promesas'} },
      {path: 'rxjs', component: RxjsComponent, data: { name: 'RxJs'}},
      {path: 'account-settings', component: AccountSettingsComponent, data: { name: 'Configuración Temas'}},
      {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
    ]
  }
];

export const PAGES_ROUTE = RouterModule.forChild(pagesRoutes);

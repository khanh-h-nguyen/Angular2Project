import {provideRoutes, } from '@angular/router'
import { AppComponent } from '../../app.component';

const routes = [
  { path: '', component: AppComponent },
  { path: ':state/:city', component: AppComponent}
];
export const appRouterProviders = [
  provideRoutes(routes)
];

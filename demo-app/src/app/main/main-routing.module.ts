import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { SettingsModule } from './settings/settings.module';
import { CustomersTreeModule } from './customers-tree/customers-tree.module';


export function loadHomeModule() {
  return HomeModule;
}

export function loadAboutModule() {
  return AboutModule;
}

export function loadSettingsModule() {
  return SettingsModule;
}

export function loadCustomersTreeModule() {
  return CustomersTreeModule;
}

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: loadHomeModule },
      { path: 'about', loadChildren: loadAboutModule },
      { path: 'settings', loadChildren: loadSettingsModule },
      { path: 'customersTree', loadChildren: loadCustomersTreeModule }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

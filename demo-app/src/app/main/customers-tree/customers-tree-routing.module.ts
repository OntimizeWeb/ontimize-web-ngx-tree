import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersTreeHomeComponent } from './home/customers-tree-home.component';
import { CustomersDetailComponent } from './detail/customers-detail.component';
import { AccountsModule } from '../accounts/accounts.module';

export function loadAccountsModule() {
  return AccountsModule;
}

export const CUSTOMERS_TREE_MODULE_DECLARATIONS = [
  CustomersTreeHomeComponent,
  CustomersDetailComponent
];

export const routes: Routes = [{
  path: '',
  component: CustomersTreeHomeComponent,
  children: [
    { path: 'accounts', loadChildren: loadAccountsModule },
    { path: ':CUSTOMERID', component: CustomersDetailComponent },
    { path: ':CUSTOMERID/accounts', loadChildren: loadAccountsModule }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersTreeRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersTreeHomeComponent } from './home/customers-tree-home.component';
import { CustomersDetailComponent } from './detail/customers-detail.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';

export const DETAIL_MODULE_DECLARATIONS = [
  AccountDetailComponent,
  CustomersTreeHomeComponent,
  CustomersDetailComponent
];

export const routes: Routes = [{
  path: '',
  component: CustomersTreeHomeComponent,
  children: [
    { path: ':CUSTOMERID', component: CustomersDetailComponent },
    { path: 'accounts/:ACCOUNTID', component: AccountDetailComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersTreeRoutingModule { }

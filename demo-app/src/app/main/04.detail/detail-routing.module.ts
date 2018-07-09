import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersTreeHomeComponent } from './home/customers-tree-home.component';
import { CustomersDetailComponent } from './detail/customers-detail.component';

export const DETAIL_MODULE_DECLARATIONS = [
  CustomersTreeHomeComponent,
  CustomersDetailComponent
];

export const routes: Routes = [{
  path: '',
  component: CustomersTreeHomeComponent,
  children: [
    { path: ':CUSTOMERID', component: CustomersDetailComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersTreeRoutingModule { }

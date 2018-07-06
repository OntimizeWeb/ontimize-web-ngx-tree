import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { OFileManagerModule} from 'ontimize-web-ngx-filemanager';
import { OTreeModule} from 'ontimize-web-ngx-tree';
import { SharedModule } from '../../shared/shared.module';
import { CustomersTreeRoutingModule, CUSTOMERS_TREE_MODULE_DECLARATIONS } from './customers-tree-routing.module';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    OFileManagerModule,
    OTreeModule,
    CustomersTreeRoutingModule
  ],
  declarations: CUSTOMERS_TREE_MODULE_DECLARATIONS,
  exports: CUSTOMERS_TREE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CustomersTreeModule { }

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { OTreeModule} from 'ontimize-web-ngx-tree';
import { SharedModule } from '../../shared/shared.module';
import { CustomersTreeRoutingModule, DETAIL_MODULE_DECLARATIONS } from './detail-routing.module';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    OTreeModule,
    CustomersTreeRoutingModule
  ],
  declarations: DETAIL_MODULE_DECLARATIONS,
  exports: DETAIL_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DetailModule { }

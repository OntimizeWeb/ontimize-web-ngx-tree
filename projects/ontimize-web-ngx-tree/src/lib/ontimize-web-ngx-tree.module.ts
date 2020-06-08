import { NgModule } from '@angular/core';

import { OTreeNodeComponentModule } from './components/tree/o-tree-node.component';
import { OTreeComponentModule } from './components/tree/o-tree.component';


@NgModule({
  imports: [
    OTreeComponentModule,
    OTreeNodeComponentModule
  ],
  exports: [
    OTreeComponentModule,
    OTreeNodeComponentModule
  ]
})
export class OTreeModule {
}

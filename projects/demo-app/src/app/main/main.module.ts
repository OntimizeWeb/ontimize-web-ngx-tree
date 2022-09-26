import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { OTreeModule } from 'ontimize-web-ngx-tree';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { TreeBasicComponent } from './01.basic/tree-basic.component';
import { TreeNodesComponent } from './02.nodes/tree-nodes.component';
import { TreeStaticComponent } from './03.static/tree-static.component';
import { TreeRecursiveComponent } from './05.recursive/tree-recursive.component';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    OTreeModule,
    MainRoutingModule
  ],
  declarations: [
    MainComponent,
    TreeBasicComponent,
    TreeNodesComponent,
    TreeStaticComponent,
    TreeRecursiveComponent
  ]
})
export class MainModule { }

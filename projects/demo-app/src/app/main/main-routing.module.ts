import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TreeBasicComponent } from './01.basic/tree-basic.component';
import { TreeNodesComponent } from './02.nodes/tree-nodes.component';
import { TreeStaticComponent } from './03.static/tree-static.component';
import { TreeRecursiveComponent } from './05.recursive/tree-recursive.component';
import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
      { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
      { path: 'basic', component: TreeBasicComponent },
      { path: 'nodes', component: TreeNodesComponent },
      { path: 'static', component: TreeStaticComponent },
      { path: 'detail', loadChildren: () => import('./04.detail/detail.module').then(m => m.DetailModule) },
      { path: 'recursive', component: TreeRecursiveComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

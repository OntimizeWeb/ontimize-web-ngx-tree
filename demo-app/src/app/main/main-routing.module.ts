import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { TreeBasicComponent } from './01.basic/tree-basic.component';
import { TreeNodesComponent } from './02.nodes/tree-nodes.component';
import { TreeStaticComponent } from './03.static/tree-static.component';
import { DetailModule } from './04.detail/detail.module';
import { TreeRecursiveComponent } from './05.recursive/tree-recursive.component';

export function loadHomeModule() {
  return HomeModule;
}

export function loadAboutModule() {
  return AboutModule;
}

export function loadDetailModule() {
  return DetailModule;
}

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'about', loadChildren: loadAboutModule },
      { path: 'home', loadChildren: loadHomeModule },
      { path: 'basic', component: TreeBasicComponent },
      { path: 'nodes', component: TreeNodesComponent },
      { path: 'static', component: TreeStaticComponent },
      { path: 'detail', loadChildren: loadDetailModule },
      { path: 'recursive', component: TreeRecursiveComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

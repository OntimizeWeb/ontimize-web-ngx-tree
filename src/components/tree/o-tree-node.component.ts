import { Component, OnInit, Injector, Optional, Inject, forwardRef, OnDestroy, SkipSelf, ElementRef, NgModule, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  OntimizeWebModule,
  Util,
  OSharedModule,
  OFormComponent,
  OntimizeService,
  dataServiceFactory
} from 'ontimize-web-ngx';

import { OTreeComponent } from './o-tree.component';

@Component({
  selector: 'o-tree-node',
  template: ' ',
  inputs: OTreeComponent.DEFAULT_BASIC_INPUTS_O_TREE,
  outputs: OTreeComponent.DEFAULT_OUTPUTS_O_TREE,
  providers: [
    { provide: OntimizeService, useFactory: dataServiceFactory, deps: [Injector] }
  ],
})

export class OTreeNodeComponent extends OTreeComponent implements OnInit, OnDestroy {
  public static DEFAULT_INPUTS_O_TREE_NODE = OTreeComponent.DEFAULT_BASIC_INPUTS_O_TREE;
  public static DEFAULT_OUTPUTS_O_TREE_NODE = OTreeComponent.DEFAULT_OUTPUTS_O_TREE;

  onNodeSelected: EventEmitter<any> = new EventEmitter();
  // onNodeMoved: EventEmitter<any> = new EventEmitter();
  // onNodeCreated: EventEmitter<any> = new EventEmitter();
  // onNodeRemoved: EventEmitter<any> = new EventEmitter();
  // onNodeRenamed: EventEmitter<any> = new EventEmitter();
  onNodeExpanded: EventEmitter<any> = new EventEmitter();
  onNodeCollapsed: EventEmitter<any> = new EventEmitter();
  onLoadNextLevel: EventEmitter<any> = new EventEmitter();

  forcedShowRoot: boolean = false;

  constructor(
    injector: Injector,
    elRef: ElementRef,
    @Optional() @Inject(forwardRef(() => OFormComponent)) form: OFormComponent,
    @Optional() @Inject(forwardRef(() => OTreeComponent)) public oTree: OTreeComponent,
    @SkipSelf() @Optional() public parentNode: OTreeNodeComponent
  ) {
    super(injector, elRef, form);
  }

  ngOnInit(): void {
    super.initialize();
    this.queryOnBind = true;
    this.queryOnInit = false;

    if (Util.isDefined(this.parentNode)) {
      this.parentNode.registerChildNode(this);
    } else if (Util.isDefined(this.oTree)) {
      this.oTree.registerTreeNode(this);
    }
  }

  registerChildNode(child: OTreeNodeComponent) {
    this.treeNodes.push(child);
  }

  onLanguageChangeCallback() {
    // empty
  }

}

@NgModule({
  declarations: [OTreeNodeComponent],
  imports: [OntimizeWebModule, OSharedModule, CommonModule],
  exports: [OTreeNodeComponent]
})
export class OTreeNodeComponentModule {
}


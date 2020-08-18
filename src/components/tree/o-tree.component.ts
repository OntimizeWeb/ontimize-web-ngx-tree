import { Component, OnInit, ViewEncapsulation, NgModule, Injector, ElementRef, Optional, Inject, forwardRef, OnDestroy, ViewChild, AfterViewInit, EventEmitter, SimpleChange, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { TreeModule, TreeModel, Ng2TreeSettings, TreeComponent, Tree, NodeSelectedEvent, NodeCollapsedEvent, NodeExpandedEvent, NodeMovedEvent, NodeCreatedEvent, NodeRemovedEvent, NodeRenamedEvent, TreeController } from 'o-ngx-tree';
import { LoadNextLevelEvent } from 'o-ngx-tree/src/tree.events';
import { Subscription } from 'rxjs';
import {
  OntimizeWebModule,
  InputConverter,
  LocalStorageService,
  DialogService,
  Util,
  OSharedModule,
  ServiceUtils,
  OServiceBaseComponent,
  Codes,
  ISQLOrder,
  OFormComponent,
  FilterExpressionUtils,
  OSearchInputModule,
  OntimizeService,
  dataServiceFactory,
  OTranslateService,
  OSearchInputComponent
} from 'ontimize-web-ngx';

import { OTreeNodeComponent } from './o-tree-node.component';

export const DEFAULT_BASIC_INPUTS_O_TREE = [
  ...OServiceBaseComponent.DEFAULT_INPUTS_O_SERVICE_BASE_COMPONENT,

  // sort-columns [string]: initial sorting, with the format column:[ASC|DESC], separated by ';'. Default: no value.
  'sortColumns: sort-columns',

  'descriptionColumns: description-columns',

  'separator',

  'parentColumn: parent-column',

  'showRoot: show-root',

  'rootTitle: root-title',

  'recursive',

  'recursiveLevels: recursive-levels',

  'translate',

  'route'
];


export const DEFAULT_INPUTS_O_TREE = [
  ...DEFAULT_BASIC_INPUTS_O_TREE,

  'oTitle: title',

  'controls',

  // 'static',

  // 'rightMenu: right-menu',

  'refreshButton: refresh-button',

  // quick-filter [no|yes]: show quick filter. Default: yes.
  'quickFilter: quick-filter',

  // quick-filter-columns [string]: columns of the filter, separated by ';'. Default: no value.
  'quickFilterColumns: quick-filter-columns',

  // filter [yes|no|true|false]: filter si case sensitive. Default: no.
  'filterCaseSensitive: filter-case-sensitive',

  // show-buttons-text [yes|no|true|false]: show text of header buttons. Default: yes.
  'showButtonsText: show-buttons-text'
];

export const DEFAULT_OUTPUTS_O_TREE = [
  'onNodeSelected',
  // 'onNodeMoved',
  // 'onNodeCreated',
  // 'onNodeRemoved',
  // 'onNodeRenamed',
  'onNodeExpanded',
  'onNodeCollapsed',
  'onLoadNextLevel'
];

@Component({
  moduleId: module.id,
  selector: 'o-tree',
  templateUrl: './o-tree.component.html',
  styleUrls: ['./o-tree.component.scss'],
  inputs: DEFAULT_INPUTS_O_TREE,
  outputs: DEFAULT_OUTPUTS_O_TREE,
  encapsulation: ViewEncapsulation.None,
  providers: [
    { provide: OntimizeService, useFactory: dataServiceFactory, deps: [Injector] }
  ],
  host: {
    '[class.o-tree]': 'true'
  }
})
export class OTreeComponent extends OServiceBaseComponent implements OnInit, AfterViewInit, OnDestroy {

  static DEFAULT_INPUTS_O_TREE = DEFAULT_INPUTS_O_TREE;
  static DEFAULT_BASIC_INPUTS_O_TREE = DEFAULT_BASIC_INPUTS_O_TREE;
  static DEFAULT_OUTPUTS_O_TREE = DEFAULT_OUTPUTS_O_TREE;
  static DEFAULT_ROOT_ROUTE = 'home';

  /* inputs variables */
  protected sortColumns: string;
  protected descriptionColumns: string;
  protected separator: string = Codes.HYPHEN_SEPARATOR;
  protected parentColumn: string;
  @InputConverter()
  showRoot: boolean = true;
  protected rootTitle: string;
  @InputConverter()
  recursive: boolean = false;
  @InputConverter()
  recursiveLevels: number = 1;
  @InputConverter()
  translate: boolean = false;
  protected route: string;
  @InputConverter()
  controls: boolean = true;
  // @InputConverter()
  static: boolean = true;
  // @InputConverter()
  rightMenu: boolean = false;
  @InputConverter()
  refreshButton: boolean = true;
  @InputConverter()
  quickFilter: boolean = false;
  quickFilterColumns: string;
  @InputConverter()
  filterCaseSensitive: boolean = false;
  @InputConverter()
  showButtonsText: boolean = true;
  /* end of variables */

  /* parsed input variables */
  protected sortColArray: Array<ISQLOrder> = [];
  protected descriptionColArray: Array<string> = [];
  protected quickFilterColArray: string[];
  protected dataResponseArray: any[] = [];
  protected expandedNodesIds: any[] = [];
  oTitle: string;
  treeNodes: OTreeNodeComponent[] = [];

  onNodeSelected: EventEmitter<any> = new EventEmitter();
  // onNodeMoved: EventEmitter<any> = new EventEmitter();
  // onNodeCreated: EventEmitter<any> = new EventEmitter();
  // onNodeRemoved: EventEmitter<any> = new EventEmitter();
  // onNodeRenamed: EventEmitter<any> = new EventEmitter();
  onNodeExpanded: EventEmitter<any> = new EventEmitter();
  onNodeCollapsed: EventEmitter<any> = new EventEmitter();
  onLoadNextLevel: EventEmitter<any> = new EventEmitter();

  @ViewChild('treeComponent') treeComponent: TreeComponent;
  rootTreeModel: TreeModel;
  settings: Ng2TreeSettings;
  selectedNode: Tree;

  protected localStorageService: LocalStorageService;
  protected dialogService: DialogService;
  protected router: Router;
  protected actRoute: ActivatedRoute;
  protected translating: boolean;

  protected translateService: OTranslateService;
  protected onLanguageChangeSubscription: Subscription;

  @ViewChildren(OSearchInputComponent)
  searchInput: QueryList<OSearchInputComponent>;
  protected filteringTree: boolean = false;
  resetingTree: boolean = false;

  constructor(
    injector: Injector,
    protected elRef: ElementRef,
    @Optional() @Inject(forwardRef(() => OFormComponent)) protected form: OFormComponent
  ) {
    super(injector);
    this.router = this.injector.get(Router);
    this.actRoute = this.injector.get(ActivatedRoute);
    this.translateService = this.injector.get(OTranslateService);
  }

  getComponentKey(): string {
    return 'OTreeComponent_' + this.oattr;
  }

  getDataToStore() {
    let dataToStore = {
    };
    return dataToStore;
  }

  ngOnInit(): void {
    this.initialize();
    this.onLanguageChangeSubscription = this.translateService.onLanguageChanged.subscribe(() => {
      this.onLanguageChangeCallback();
    });
  }

  ngAfterViewInit() {
    if (this.elRef) {
      this.elRef.nativeElement.removeAttribute('title');
    }
    if (this.queryOnInit) {
      this.queryData();
    }
  }

  ngOnDestroy() {
    super.destroy();
    if (this.onLanguageChangeSubscription) {
      this.onLanguageChangeSubscription.unsubscribe();
    }
  }

  ngOnChanges(changes: { [propName: string]: SimpleChange }) {
    if (Util.isDefined(this.rootTreeModel) && Util.isDefined(this.treeComponent)) {
      super.ngOnChanges(changes);
    }
  }

  initialize(): void {
    this.sortColArray = ServiceUtils.parseSortColumns(this.sortColumns);
    this.descriptionColArray = Util.parseArray(this.descriptionColumns, true);
    super.initialize();

    if (this.quickFilterColumns) {
      this.quickFilterColArray = Util.parseArray(this.quickFilterColumns, true);
    } else {
      this.quickFilterColArray = this.colArray;
    }
  }

  onLanguageChangeCallback() {
    this.translating = true;
    this.treeComponent.getController().rename(this.translateService.get(this.rootTitle));
    this.translateChildren(this.rootTreeModel);
    this.translating = false;
  }

  protected translateChildren(treeModel: TreeModel) {
    const self = this;
    treeModel.children.forEach(child => {
      const controller: TreeController = self.treeComponent.getControllerByNodeId(child.id);
      if (controller) {
        const innerTreeModel: TreeModel = controller.toTreeModel();
        if (innerTreeModel) {
          const comp = innerTreeModel.treeNodeComponent;
          if (comp) {
            if (innerTreeModel.loadChildren && (comp.showRoot || comp.forcedShowRoot)) {
              controller.rename(self.translateService.get(comp.rootTitle));
            } else if (!innerTreeModel.loadChildren && comp.translate) {
              controller.rename(comp.getNodeDescription(innerTreeModel.data));
            }
          }
          if (controller.isExpanded()) {
            if (innerTreeModel.children && innerTreeModel.children.length) {
              self.translateChildren(innerTreeModel);
            }
          }
        }
      }
    });
  }

  setDataArray(data: any): void {
    super.setDataArray(data);
    this.setData(this.dataArray);
  }

  registerTreeNode(oTreeNode: OTreeNodeComponent) {
    this.treeNodes.push(oTreeNode);
  }

  getComponentFilter(existingFilter: any = {}): any {
    let filter = existingFilter;
    if (this.recursive && this.parentColumn !== undefined) {
      const parentItemExpr = FilterExpressionUtils.buildExpressionFromObject(filter);
      const parentNotNullExpr = FilterExpressionUtils.buildExpressionIsNull(this.parentColumn);
      const filterExpr = FilterExpressionUtils.buildComplexExpression(parentItemExpr, parentNotNullExpr, FilterExpressionUtils.OP_AND);
      filter = {};
      filter[FilterExpressionUtils.FILTER_EXPRESSION_KEY] = filterExpr;
    }
    return super.getComponentFilter(filter);
  }

  getRecursiveChildren(id: any, callback) {
    // let queryMethodName = this.pageable ? this.paginatedQueryMethod : this.queryMethod;
    let queryMethodName = this.queryMethod;
    if (!this.dataService || !(queryMethodName in this.dataService) || !this.entity) {
      return;
    }
    const parentItem = ServiceUtils.getParentKeysFromForm(this._pKeysEquiv, this.form);
    let filter = (parentItem !== undefined) ? parentItem : {};
    filter[this.parentColumn] = id;

    let queryArguments = [filter, this.colArray, this.entity];
    this.doChildQuery(queryMethodName, queryArguments, callback);
  }

  getTreeNodesChildren(itemdata: any, callback) {
    let children = [];
    this.treeNodes.forEach((childNode: OTreeNodeComponent) => {
      let treeNode = {
        data: itemdata,
        route: this.route,
        value: this.translateService.get(childNode.rootTitle),
        id: childNode.oattr,
        treeNodeComponent: childNode,
        emitLoadNextLevel: false,
        loadChildren: (childNodeCallback) => {
          let queryMethodName = childNode.queryMethod;
          if (!childNode.dataService || !(queryMethodName in childNode.dataService) || !childNode.entity) {
            return;
          }
          let filter = ServiceUtils.getFilterUsingParentKeys(itemdata, childNode._pKeysEquiv);
          let queryArguments = [filter, childNode.colArray, childNode.entity];
          childNode.doChildQuery(queryMethodName, queryArguments, childNodeCallback);
        }
      };
      children.push(treeNode);
    });
    if (this.treeNodes.length === 1 && !this.treeNodes[0].showRoot) {
      children[0].loadChildren(callback);
    } else {
      this.treeNodes.forEach((childNode: OTreeNodeComponent) => {
        childNode.forcedShowRoot = true;
      });
      callback(children);
    }
  }

  protected doChildQuery(queryMethodName: string, queryArguments: any[], callback: any) {
    const self = this;
    this.dataService[queryMethodName].apply(this.dataService, queryArguments).subscribe(resp => {
      let children = [];
      if (resp && resp.data && resp.data.length > 0) {
        for (let i = 0, len = resp.data.length; i < len; i++) {
          let child = this.mapTreeNode(resp.data[i], self);
          children.push(child);
        }
      }
      callback(children);
    });
  }

  protected mapTreeNode(itemdata: any = {}, treeNodeComponent?: OTreeComponent): TreeModel {
    let treeNode = {
      data: itemdata,
      value: this.getNodeDescription(itemdata),
      id: this.getNodeId(itemdata),
      route: this.route,
      treeNodeComponent: treeNodeComponent
    };
    if (this.recursive) {
      treeNode['loadChildren'] = (callback) => this.getRecursiveChildren(itemdata[this.keysArray[0]], callback);
    } else if (this.treeNodes.length > 0) {
      treeNode['loadChildren'] = (callback) => this.getTreeNodesChildren(itemdata, callback);
    }
    return treeNode;
  }

  protected getNodeId(item: any = {}) {
    let id = '';
    this.keysArray.forEach(key => {
      id += item[key];
    });
    return this.keys + ':' + id;
  }

  protected getNodeDescription(item: any = {}) {
    let descTxt = '';
    const self = this;
    this.descriptionColArray.forEach((col, index) => {
      let txt = item[col];
      if (txt) {
        if (self.translate && self.translateService) {
          txt = self.translateService.get(txt);
        }
        descTxt += txt;
      }
      if (index < self.descriptionColArray.length - 1) {
        descTxt += self.separator;
      }
    });
    return descTxt;
  }

  reloadData() {
    // if (this.unstructuredData) {
    //   this.static = true;
    //   this.rightMenu = false;
    //   this.setTreefromDirtyArray(this.unstructuredData);
    // } else if (this.data) {
    //   this.setTree(this.data);
    // } else {
    this.queryData();
    if (this.searchInput.length === 1) {
      const filter = this.searchInput.first.getValue();
      if (filter && filter.length > 1) {
        this.onSearch(filter);
      }
    }
    // }
  }

  protected setData(treeArray: any[]) {//, sqlTypes?: any) {
    this.dataResponseArray = treeArray;
    let childrenArray: TreeModel[] = [];

    treeArray.forEach(el => {
      childrenArray.push(this.mapTreeNode(el));
    });

    this.rootTreeModel = {
      value: this.translateService.get(this.rootTitle),
      id: 0,
      children: childrenArray,
      settings: {
        rightMenu: this.rightMenu,
        static: this.static,
        cssClasses: {
          expanded: 'material-icons expanded-node',
          collapsed: 'material-icons collapsed-node'
        }
      }
    };

    this.settings = {
      rootIsVisible: this.showRoot
    };
  }

  protected resetTree() {
    this.resetingTree = true;
    this.setData(this.dataResponseArray);
    const self = this;
    setTimeout(() => {
      self.expandedNodesIds.forEach((id: any, index: number) => {
        setTimeout(() => {
          const controller: TreeController = self.treeComponent.getControllerByNodeId(id);
          if (controller) {
            controller.expand();
          }
        }, index * 75);
      });
    }, 0);
  }

  onSearch(textValue: string) {
    if (this.pageable) {
      return;
    }
    this.resetTree();
    const self = this;
    setTimeout(() => {
      if (textValue && textValue.length > 0) {
        setTimeout(() => {
          self.filterTreeUsingFilter(textValue);
          self.resetingTree = false;
        }, (self.expandedNodesIds.length + 1) * 75);
      } else {
        self.resetingTree = false;
      }
    }, 75);
  }

  nodeSelected(event: NodeSelectedEvent) {
    if (event && event.node && Util.isDefined(event.node.id)) {
      const node: Tree = event.node;
      const controller: TreeController = this.treeComponent.getControllerByNodeId(node.id);
      if (controller) {
        const innerTreeModel: TreeModel = controller.toTreeModel();
        if (innerTreeModel && innerTreeModel.treeNodeComponent) {
          const nodeModel = innerTreeModel.data;
          innerTreeModel.treeNodeComponent.innerNodeSelected(nodeModel, node/*(controller as any).tree*/);
          return;
        }
      }
      const nodeModel = node.node ? (node.node as any).data : node;
      this.innerNodeSelected(nodeModel, node);
    }
  }

  protected innerNodeSelected(data: any, node: Tree) {
    this.onNodeSelected.emit(data);
    this.selectedNode = node;

    if (Util.isDefined((node.node as any).route) || (node.id === 0)) {
      let route = undefined;
      if (node.id === 0) {
        // route = OTreeComponent.DEFAULT_ROOT_ROUTE;
      } else {
        let nodeRoute = (node.node as any).route;
        let routeArray = nodeRoute.split(Codes.ROUTE_SEPARATOR);
        for (let i = 0, len = routeArray.length; i < len; i++) {
          if (routeArray[i].startsWith(Codes.ROUTE_VARIABLE_CHAR)) {
            routeArray[i] = data[routeArray[i].substring(1)];
          }
        }
        route = routeArray.join(Codes.ROUTE_SEPARATOR);
      }
      if (Util.isDefined(route)) {
        const extras = {
          relativeTo: this.actRoute
        };
        this.router.navigate([route], extras);
      }
    }
  }

  nodeMoved(event: NodeMovedEvent) {
    if (event && event.node && event.node.id) {
      // if (e.node.parent.id !== e.previousParent.id)
      // const node: Tree = event.node;
      // this.onNodeMoved(node);
    }

    // let nodeToUpdate = {}, data = {};
    // nodeToUpdate[this.valueColumn] = e.node.id;
    // data[this.parentColumn] = e.node.parent.id;
    // if (this.service && this.entity) {
    //   this.dataService.update(nodeToUpdate, data, this.entity).subscribe(resp => {
    //     if (resp && resp.code === Codes.ONTIMIZE_SUCCESSFUL_CODE) {
    //       this.dialogService.info('INFO', e.node.value + ' ha sido trasladado de ' + e.previousParent.value + ' a ' + e.node.parent.value);
    //     } else {
    //       this.dialogService.error('ERROR', 'Ha ocurrido un error a trasladar ' + e.node.value)
    //     }
    //   });
    // }

  }

  nodeCreated(event: NodeCreatedEvent) {
    console.log(event);
    // if (node && node.node && node.node.value.length > 0 && this.dataService) {
    //   let nodeObject: Tree = node.node;
    //   let nodeToInsert = {};
    // nodeToInsert[this.nodeDescription] = nodeObject.value;
    // if (nodeObject.parent && nodeObject.parent.id) {
    //   nodeToInsert[this.parentColumn] = nodeObject.parent.id;
    // }
    // if (this.codeColumn) {
    //   nodeToInsert[this.codeColumn] = node.node.value.toUpperCase().replace(/[&\/\\#,+()$~%.'":*?<>{} ]/g, '-');
    // }
    // if (this.parentItem) {
    //   nodeToInsert = Object.assign({}, nodeToInsert, this.parentItem);
    // }
    // this.subscriber = this.dataService.insert(nodeToInsert, this.entity).subscribe(resp => {
    //   if (resp && resp.data && resp.data[this.valueColumn]) {
    //     console.log('Element inserted successfully!', resp)
    //     node.node.id = resp.data[this.valueColumn];
    //   }
    // }, err => {
    //   this.dialogService.info('ERROR', 'Ha ocurrido un error a insertar el elemento!');
    //   nodeObject.removeItselfFromParent();
    // });
    // }
  }

  nodeRemoved(event: NodeRemovedEvent) {
    if (!this.filteringTree) {
      console.log(event);
    }
    // if (node && node.node && node.node.id && this.dataService) {
    // // this.dialogService.confirm('CONFIRM', 'MESSAGES.CONFIRM_DELETE_TREE_NODE').then(
    // //     res => {
    // //         if (res === true) {
    // let nodeObject: Tree = node.node;
    // let nodeToDelete = {};
    // nodeToDelete[this.valueColumn] = nodeObject.id;
    // this.subscriber = this.dataService.delete(nodeToDelete, this.entity).subscribe(resp => {
    //   if (resp) {
    //     console.log('Element deleted successfully!', resp.data)
    //   }
    // }, err => {
    //   this.dialogService.info('ERROR', 'Ha ocurrido un error a remover el elemento!');

    // });
    // //     }
    // // });
    // }
  }

  nodeRenamed(event: NodeRenamedEvent) {
    if (!this.translating) {
      console.log(event);
    }
    // if (node && node.node && node.node.id && node.node.value.length > 0 && this.dataService) {
    //   // let nodeObject: Tree = node.node;
    //   // let nodeToRename = {};
    //   // nodeToRename[this.valueColumn] = nodeObject.id;
    //   // let data = {};
    //   // data[this.nodeDescription] = nodeObject.value;
    //   // this.subscriber = this.dataService.update(nodeToRename, data, this.entity).subscribe(resp => {
    //   //     if (resp) {
    //   //         console.log('Element renamed successfully!', resp)
    //   //     }
    //   // }, err => {
    //   //     this.dialogService.info('ERROR', 'Ha ocurrido un error a renombrar el elemento!');
    //   // });
    // }
  }

  nodeExpanded(event: NodeExpandedEvent) {
    if (!this.resetingTree && event && event.node && event.node.id) {
      const node: Tree = event.node;
      if (this.expandedNodesIds.indexOf(node.id) === -1) {
        this.expandedNodesIds.push(node.id);
      }
      this.onNodeExpanded.emit(node);
    }
  }

  nodeCollapsed(event: NodeCollapsedEvent) {
    if (event && event.node && event.node.id) {
      const node: Tree = event.node;
      this.expandedNodesIds.splice(this.expandedNodesIds.indexOf(node.id), 1);
      this.onNodeCollapsed.emit(node);
    }
  }

  nextLevelLoaded(event: LoadNextLevelEvent) {
    if (event && event.node && event.node.id) {
      const node: Tree = event.node;
      this.onLoadNextLevel.emit(node);
    }
  }

  executeNodeActionById(id: number | string, action: string) {
    const treeController = this.treeComponent.getControllerByNodeId(id);
    if (treeController && typeof treeController[action] === 'function') {
      treeController[action]();
    } else {
      console.log('There isn`t a controller for a node with id - ' + id);
    }
  }

  hasTitle(): boolean {
    return this.oTitle !== undefined;
  }

  useQuickFilter(): boolean {
    return this.quickFilter;// && !this.recursive && this.treeNodes.length === 0;
  }

  protected filterTreeUsingFilter(filter: any) {
    this.filteringTree = true;
    if (!this.filterCaseSensitive) {
      filter = filter.toLowerCase();
    }
    this.rootTreeModel.children.forEach((item: TreeModel) => {
      this.filterNodesUsingFilter(item, filter);
    });
    this.filteringTree = false;
  }

  protected filterNodesUsingFilter(item: TreeModel, filter: string) {
    const controller = this.treeComponent.getControllerByNodeId(item.id);
    if (controller && controller.isExpanded()) {
      this.filterBranch(item, filter);
    } else if (controller) {
      this.filterLeaf(item, filter);
    }
  }

  protected filterBranch(item: TreeModel, filter: string) {
    const controller: TreeController = this.treeComponent.getControllerByNodeId(item.id);
    const children = controller.toTreeModel().children;

    children.forEach((child: TreeModel) => {
      this.filterNodesUsingFilter(child, filter);
    });

    let notNullChildren = children.filter((child: TreeModel) => {
      return Util.isDefined(this.treeComponent.getControllerByNodeId(child.id));
    });

    if (notNullChildren.length === 0) {
      this.filterLeaf(item, filter);
    }
  }

  protected filterLeaf(item: TreeModel, filter: string) {
    let searchStr = this.getStringForSearch(item);
    if (!this.filterCaseSensitive) {
      searchStr = searchStr.toLowerCase();
    }
    const remove = searchStr.indexOf(filter) === -1;
    if (remove) {
      const treeController: TreeController = this.treeComponent.getControllerByNodeId(item.id);
      if (treeController) {
        treeController.remove();
      }
    }
  }

  protected getStringForSearch(item: TreeModel) {
    let resultArr = [];
    let columns = item.treeNodeComponent ? item.treeNodeComponent.quickFilterColArray : this.quickFilterColArray;
    resultArr = columns.map((col: string) => {
      return item.data[col];
    });
    if (Util.isDefined(item.loadChildren)) {
      resultArr.push(item.value);
    }
    return resultArr.join(' ');
  }
}

@NgModule({
  declarations: [OTreeComponent],
  imports: [
    OntimizeWebModule,
    OSharedModule,
    OSearchInputModule,
    CommonModule,
    TreeModule,
    RouterModule
  ],
  exports: [OTreeComponent]
})
export class OTreeComponentModule {
}

import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Inject,
  Injector,
  NgModule,
  OnDestroy,
  OnInit,
  Optional,
  SimpleChange,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import {
  Ng2TreeSettings,
  NodeCollapsedEvent,
  NodeCreatedEvent,
  NodeExpandedEvent,
  NodeMovedEvent,
  NodeRemovedEvent,
  NodeRenamedEvent,
  NodeSelectedEvent,
  Tree,
  TreeComponent,
  TreeController,
  TreeModel,
  TreeModule
} from 'o-ngx-tree';
import { LoadNextLevelEvent } from 'o-ngx-tree/src/tree.events';
import {
  Codes,
  DEFAULT_INPUTS_O_SERVICE_BASE_COMPONENT,
  DialogService,
  FilterExpressionUtils,
  InputConverter,
  LocalStorageService,
  NavigationService,
  OFormComponent,
  OntimizeServiceProvider,
  OntimizeWebModule,
  OSearchInputModule,
  OServiceComponent,
  OSharedModule,
  OTranslateService,
  ServiceUtils,
  SQLOrder,
  Util
} from 'ontimize-web-ngx';
import { Subscription } from 'rxjs';

import { OTreeNodeComponent } from './o-tree-node.component';

export const DEFAULT_BASIC_INPUTS_O_TREE = [
  ...DEFAULT_INPUTS_O_SERVICE_BASE_COMPONENT,

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

  'route',

  'expandAllNodes: expand-all'
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
  'onNodeExpanded',
  'onNodeCollapsed',
  'onLoadNextLevel'
];

@Component({
  selector: 'o-tree',
  templateUrl: './o-tree.component.html',
  styleUrls: ['./o-tree.component.scss'],
  inputs: DEFAULT_INPUTS_O_TREE,
  outputs: DEFAULT_OUTPUTS_O_TREE,
  encapsulation: ViewEncapsulation.None,
  providers: [
    OntimizeServiceProvider
  ],
  host: {
    '[class.o-tree]': 'true'
  }
})
export class OTreeComponent extends OServiceComponent implements OnInit, AfterViewInit, OnDestroy {

  static DEFAULT_INPUTS_O_TREE = DEFAULT_INPUTS_O_TREE;
  static DEFAULT_BASIC_INPUTS_O_TREE = DEFAULT_BASIC_INPUTS_O_TREE;
  static DEFAULT_OUTPUTS_O_TREE = DEFAULT_OUTPUTS_O_TREE;
  static DEFAULT_ROOT_ROUTE = 'home';

  /* inputs variables */
  protected sortColumns: string;
  protected descriptionColumns: string;
  @InputConverter()
  protected expandAllNodes: boolean = false;
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
  protected sortColArray: Array<SQLOrder> = [];
  protected descriptionColArray: Array<string> = [];
  protected quickFilterColArray: string[];
  protected dataResponseArray: any[] = [];
  protected expandedNodesIds: any[] = [];
  oTitle: string;
  treeNodes: OTreeNodeComponent[] = [];

  onNodeSelected: EventEmitter<any> = new EventEmitter();
  onNodeExpanded: EventEmitter<any> = new EventEmitter();
  onNodeCollapsed: EventEmitter<any> = new EventEmitter();
  onLoadNextLevel: EventEmitter<any> = new EventEmitter();

  @ViewChild('treeComponent', { static: false }) treeComponentRef: TreeComponent;
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

  protected filteringTree: boolean = false;
  resetingTree: boolean = false;

  protected navigationService: NavigationService;

  constructor(
    injector: Injector,
    protected elRef: ElementRef,
    @Optional() @Inject(forwardRef(() => OFormComponent)) protected form: OFormComponent
  ) {
    super(injector, elRef, form);
    this.router = this.injector.get(Router);
    this.actRoute = this.injector.get(ActivatedRoute);
    this.translateService = this.injector.get(OTranslateService);
    this.navigationService = this.injector.get(NavigationService);
  }

  get treeComponent(): TreeComponent {
    return this.treeComponentRef;
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
    this.afterViewInit();
    if (this.searchInputComponent) {
      this.registerQuickFilter(this.searchInputComponent);
    }
  }

  afterViewInit() {
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

    if (!this.quickFilterColumns) {
      this.quickFilterColumns = this.columns;
    }
    this.quickFilterColArray = Util.parseArray(this.quickFilterColumns, true);
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
      if (children.length > 0) {
        this.expandAll(children);
      }
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
    this.queryData();
    if (this.searchInputComponent) {
      const filter = this.searchInputComponent.getValue();
      if (filter && filter.length > 1) {
        this.filterData(filter);
      }
    }
  }

  protected setData(treeArray: any[]) {
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

    this.expandAll(this.rootTreeModel.children);
  }


  protected expandAll(nodes: TreeModel[]) {
    if (this.expandAllNodes) {
      setTimeout(() => {
        nodes.forEach((node: any) => {
          const controller: TreeController = this.treeComponent.getControllerByNodeId(node.id);
          if (controller) {
            controller.expand();
          }
        });
      }, 100);
    }
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

  filterData(value?: string, loadMore?: boolean): void {
    if (this.pageable) {
      return;
    }
    this.resetTree();
    const self = this;
    setTimeout(() => {
      if (value && value.length > 0) {
        setTimeout(() => {
          self.filterTreeUsingFilter(value);
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
        this.storeNavigationFormRoutes('detailFormRoute', this.getQueryConfiguration());
        this.router.navigate([route], extras);
      }
    }
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

  protected getQueryConfiguration(): any {
    let result = {
      keysValues: this.getKeysValues()
    };
    if (this.pageable) {
      result = Object.assign({
        serviceType: this.serviceType,
        queryArguments: this.queryArguments,
        entity: this.entity,
        service: this.service,
        queryMethod: this.pageable ? this.paginatedQueryMethod : this.queryMethod,
        totalRecordsNumber: this.getTotalRecordsNumber(),
        queryRows: this.queryRows,
        queryRecordOffset: Math.max(this.state.queryRecordOffset - this.queryRows, 0)
      }, result);
    }
    return result;
  }

  protected getKeysValues(): any[] {
    const data = this.dataArray;
    const self = this;
    return data.map((row) => {
      const obj = {};
      self.keysArray.forEach((key) => {
        if (row[key] !== undefined) {
          obj[key] = row[key];
        }
      });
      return obj;
    });
  }

  protected storeNavigationFormRoutes(activeMode: string, queryConf?: any): void {
    this.navigationService.storeFormRoutes({
      mainFormLayoutManagerComponent: false,
      isMainNavigationComponent: true,
      detailFormRoute: undefined,
      editFormRoute: undefined,
      insertFormRoute: Codes.DEFAULT_INSERT_ROUTE
    }, activeMode, queryConf);
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

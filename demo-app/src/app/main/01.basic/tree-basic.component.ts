import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { OTranslateService, SnackBarService, OSnackBarConfig } from 'ontimize-web-ngx';

const TREE_HTML_DATA = `
<o-tree #treeview fxFlex service="customers" entity="customer" keys="CUSTOMERID" query-on-init="true"
  columns="CUSTOMERID;SURNAME;NAME" description-columns="SURNAME;NAME" service-type="DummyService"
  separator=", " recursive="no" root-title="CUSTOMERS" [title]="{title}"
  [controls]="{controls}" [quick-filter]="{quickFilter}" [refresh-button]="{refreshButton}"
  (onNodeSelected)="nodeSelected($event)"
  (onNodeExpanded)="nodeExpanded($event)"
  (onNodeCollapsed)="nodeCollapsed($event)">
</o-tree>
`;

const TREE_TS_DATA = `

`;

@Component({
  selector: 'tree-basic',
  templateUrl: './tree-basic.component.html',
  styleUrls: ['./tree-basic.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.tree-basic]': 'true'
  }
})
export class TreeBasicComponent implements OnInit {

  @ViewChild('treeview')
  tree: any;

  @ViewChild('controlsToggle')
  controlsToggle: any;

  @ViewChild('quickFilterToggle')
  quickFilterToggle: any;

  @ViewChild('refreshButtonToggle')
  refreshButtonToggle: any;

  @ViewChild('treeTitle')
  treeTitle: any;

  treeEvents: Array<any> = [];

  files = {
    // 'html': {
    //   'data': undefined
    // },
    'scss': {
      'data': undefined
    },
    'typescript': {
      'data': undefined
    }
  };

  constructor() {
    //
  }

  ngOnInit() {
    //
  }

  onShowSource(exampleComp?: any) {
    const itemData: any = {
      title: this.treeTitle.nativeElement.value,
      controls: this.controlsToggle.checked,
      quickFilter: this.quickFilterToggle.checked,
      refreshButton: this.refreshButtonToggle.checked
    };
    exampleComp.html = this.getHtml(itemData);
  }

  public getHtml(data: any) {
    let tpl = TREE_HTML_DATA.replace('{title}', data.title)
      .replace('{controls}', data.controls)
      .replace('{quickFilter}', data.quickFilter)
      .replace('{refreshButton}', data.refreshButton);
    return tpl;
  }

  nodeSelected(arg: any) {
    this.treeEvents.push({
      event: 'onNodeSelected',
      data: arg
    });
  }

  nodeExpanded(arg: any) {
    this.treeEvents.push({
      event: 'onNodeExpanded',
      data: arg
    });
  }

  nodeCollapsed(arg: any) {
    this.treeEvents.push({
      event: 'onNodeCollapsed',
      data: arg
    });
  }

  nextLevelLoaded(arg: any) {
    this.treeEvents.push({
      event: 'onLoadNextLevel',
      data: arg
    });
  }

}

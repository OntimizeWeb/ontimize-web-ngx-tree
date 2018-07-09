import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OTranslateService, SnackBarService, OSnackBarConfig } from 'ontimize-web-ngx';

const TREE_HTML_DATA = `
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

  onShowSource(tree?: any, exampleComp?: any) {
    //
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

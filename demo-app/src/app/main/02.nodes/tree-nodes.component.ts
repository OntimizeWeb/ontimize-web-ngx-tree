import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OTranslateService, SnackBarService, OSnackBarConfig } from 'ontimize-web-ngx';
const TREE_HTML_DATA = `
`;

const TREE_TS_DATA = `

`;

@Component({
  selector: 'tree-nodes',
  templateUrl: './tree-nodes.component.html',
  styleUrls: ['./tree-nodes.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.tree-nodes]': 'true'
  }
})
export class TreeNodesComponent implements OnInit {

  files = {
    'html': {
      'data': TREE_HTML_DATA
    },
    'scss': {
      'data': undefined
    },
    'typescript': {
      'data': undefined
    }
  };

  constructor(
    protected translateService: OTranslateService,
    protected snackBarService: SnackBarService) {
  }

  ngOnInit() {
    //
  }

  onShowSource(tree?: any, exampleComp?: any) {
    //
  }

}

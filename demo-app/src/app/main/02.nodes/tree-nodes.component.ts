import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OTranslateService, SnackBarService, OSnackBarConfig } from 'ontimize-web-ngx';

const TREE_HTML_DATA = `
<o-tree #treeview fxFlex root-title="CUSTOMERS" service-type="DummyService" service="customers"
  entity="customer" keys="CUSTOMERID" columns="CUSTOMERID;SURNAME;NAME"
  description-columns="SURNAME;NAME" separator=", " query-on-init="true">

  <o-tree-node root-title="ACCOUNTS" show-root="no" service-type="DummyService"
    service="customers" entity="customerAccount" columns="ACCOUNTID;CUSTOMERID;ACCOUNT"
    description-columns="ACCOUNT" keys="ACCOUNTID" parent-keys="CUSTOMERID">

    <o-tree-node root-title="ACCOUNT_CONCEPTS" show-root="no" service-type="DummyService"
      service="branches" entity="accountConcepts" columns="CONCEPT;ACCOUNTID"
      description-columns="CONCEPT" keys="CONCEPT;ACCOUNTID" parent-keys="ACCOUNTID">
    </o-tree-node>

    <o-tree-node root-title="ACCOUNT_MOVEMENTTYPES" show-root="no" service-type="DummyService"
      service="branches" entity="accountMovementTypes" columns="DESCRIPTION;ACCOUNTID"
      description-columns="DESCRIPTION" keys="DESCRIPTION;ACCOUNTID" parent-keys="ACCOUNTID">
    </o-tree-node>

  </o-tree-node>

</o-tree>
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

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OTranslateService, SnackBarService } from 'ontimize-web-ngx';

const TREE_HTML_DATA = `
<o-tree #treeview fxFlex root-title="CUSTOMERS" [static-data]="getCustomers()"
    keys="CUSTOMERID" columns="CUSTOMERID;SURNAME;NAME"
    description-columns="SURNAME;NAME" separator=", ">
</o-tree>
`;

const TREE_TS_DATA = `
protected _customers: any[] = [{
  SURNAME: 'Lawrence',
  CUSTOMERID: 7511,
  NAME: 'Daisy'
}, {
  SURNAME: 'Buttercup',
  CUSTOMERID: 10808,
  NAME: 'Billy'
}, {
  SURNAME: 'Galouzeau',
  CUSTOMERID: 19343,
  NAME: 'Jeanne'
}, {
  SURNAME: 'Nikopolidis',
  CUSTOMERID: 19350,
  NAME: 'Andromeda'
}];

getCustomers(): any[] {
  return this._customers;
}
`;

@Component({
  selector: 'tree-static',
  templateUrl: './tree-static.component.html',
  styleUrls: ['./tree-static.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.tree-static]': 'true'
  }
})
export class TreeStaticComponent implements OnInit {

  protected _customers: any[] = [{
    SURNAME: 'Lawrence',
    CUSTOMERID: 7511,
    NAME: 'Daisy'
  }, {
    SURNAME: 'Buttercup',
    CUSTOMERID: 10808,
    NAME: 'Billy'
  }, {
    SURNAME: 'Galouzeau',
    CUSTOMERID: 19343,
    NAME: 'Jeanne'
  }, {
    SURNAME: 'Nikopolidis',
    CUSTOMERID: 19350,
    NAME: 'Andromeda'
  }];

  protected _accounts: any[] = [{
    ACCOUNT: '2095 0002 34 0000000010',
    ACCOUNTID: 1,
    CUSTOMERID: 7511
  }, {
    ACCOUNT: '2095 0102 02 4605329055',
    ACCOUNTID: 19959,
    CUSTOMERID: 7511
  }, {
    ACCOUNT: '2095 0000 00 0000000003',
    ACCOUNTID: 3,
    CUSTOMERID: 10808
  }, {
    ACCOUNT: '2095 0001 00 0000000005',
    ACCOUNTID: 7,
    CUSTOMERID: 10808
  }, {
    ACCOUNT: '2095 0070 28 7437156202',
    ACCOUNTID: 7300,
    CUSTOMERID: 10808
  }, {
    ACCOUNT: '2095 0002 68 1919405004',
    ACCOUNTID: 19630,
    CUSTOMERID: 19343
  }];

  protected _concepts: any[] = [{
    CONCEPT: 'Renting',
    ACCOUNTID: 19959
  }, {
    CONCEPT: 'Salary',
    ACCOUNTID: 19959
  }, {
    CONCEPT: 'Taxes',
    ACCOUNTID: 19959
  }, {
    CONCEPT: 'Maintenance',
    ACCOUNTID: 19959
  }, {
    CONCEPT: 'Automatic restore',
    ACCOUNTID: 19959
  }, {
    CONCEPT: 'Purchase',
    ACCOUNTID: 19959
  }, {
    CONCEPT: 'Inital transfer',
    ACCOUNTID: 3
  }, {
    CONCEPT: 'open',
    ACCOUNTID: 7
  }, {
    CONCEPT: 'September salary',
    ACCOUNTID: 7
  }, {
    CONCEPT: 'Salary',
    ACCOUNTID: 7300
  }, {
    CONCEPT: 'Taxes',
    ACCOUNTID: 7300
  }, {
    CONCEPT: 'Maintenance',
    ACCOUNTID: 7300
  }, {
    CONCEPT: 'Automatic restore',
    ACCOUNTID: 7300
  }, {
    CONCEPT: 'Sight account',
    ACCOUNTID: 19630
  }, {
    CONCEPT: 'Unknow',
    ACCOUNTID: 19630
  }, {
    CONCEPT: 'Purchase',
    ACCOUNTID: 19630
  }, {
    CONCEPT: 'Salary',
    ACCOUNTID: 19630
  }, {
    CONCEPT: 'Budget',
    ACCOUNTID: 19630
  }, {
    CONCEPT: 'Taxes',
    ACCOUNTID: 19630
  }];

  protected _movementtypes: any[] = [{
    DESCRIPTION: 'Automatic Cash',
    ACCOUNTID: 19959
  }, {
    DESCRIPTION: 'Salary',
    ACCOUNTID: 19959
  }, {
    DESCRIPTION: 'Banking fees',
    ACCOUNTID: 19959
  }, {
    DESCRIPTION: 'Transfer',
    ACCOUNTID: 19959
  }, {
    DESCRIPTION: 'Direct debit',
    ACCOUNTID: 19959
  }, {
    DESCRIPTION: 'Transfer',
    ACCOUNTID: 3
  }, {
    DESCRIPTION: 'Transfer',
    ACCOUNTID: 7
  }, {
    DESCRIPTION: 'Salary',
    ACCOUNTID: 7
  }, {
    DESCRIPTION: 'Salary',
    ACCOUNTID: 7300
  }, {
    DESCRIPTION: 'Banking fees',
    ACCOUNTID: 7300
  }, {
    DESCRIPTION: 'Transfer',
    ACCOUNTID: 7300
  }, {
    DESCRIPTION: 'Automatic Cash',
    ACCOUNTID: 7300
  }, {
    DESCRIPTION: 'Automatic Cash',
    ACCOUNTID: 19630
  }, {
    DESCRIPTION: 'Direct debit',
    ACCOUNTID: 19630
  }, {
    DESCRIPTION: 'Salary',
    ACCOUNTID: 19630
  }, {
    DESCRIPTION: 'Banking fees',
    ACCOUNTID: 19630
  }, {
    DESCRIPTION: 'Transfer',
    ACCOUNTID: 19630
  }];


  files = {
    html: {
      data: TREE_HTML_DATA
    },
    scss: {
      data: undefined
    },
    typescript: {
      data: TREE_TS_DATA
    }
    // ,
    // files: [{
    //   'label': 'customers',
    //   'type': 'typescript',
    //   data: this._customers
    // }]
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

  getCustomers(): any[] {
    return this._customers;
  }

  getAccounts(): any[] {
    return this._accounts;
  }

  getConcepts(): any[] {
    return this._concepts;
  }

  getMovementTypes(): any[] {
    return this._movementtypes;
  }


}

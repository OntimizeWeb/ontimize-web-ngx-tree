import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart, GuardsCheckStart } from '@angular/router';

const TREE_HTML_DATA = `
<div fxLayout="row" fxLayoutAlign="center stretch" fxFlexFill>
  <div fxLayout="column" fxLayoutAlign="center stretch" fxFlex="25">

    <o-tree #treeview fxFlex root-title="CUSTOMERS" service-type="DummyService" service="customers" entity="customer" keys="CUSTOMERID"
      columns="CUSTOMERID;SURNAME;NAME" description-columns="SURNAME;NAME" separator=", " query-on-init="true" route=":CUSTOMERID">

      <o-tree-node root-title="ACCOUNTS" show-root="no" service-type="DummyService" service="customers" entity="customerAccount"
        columns="ACCOUNTID;CUSTOMERID;ACCOUNT" description-columns="ACCOUNT" keys="ACCOUNTID" parent-keys="CUSTOMERID" route="accounts/:ACCOUNTID">

        <o-tree-node root-title="ACCOUNT_CONCEPTS" show-root="no" service-type="DummyService" service="branches" entity="accountConcepts"
          translate="yes" columns="CONCEPT;ACCOUNTID" description-columns="CONCEPT" keys="CONCEPT;ACCOUNTID" parent-keys="ACCOUNTID">
        </o-tree-node>

        <o-tree-node root-title="ACCOUNT_MOVEMENTTYPES" show-root="no" service-type="DummyService" service="branches" entity="accountMovementTypes"
          translate="yes" columns="DESCRIPTION;ACCOUNTID" description-columns="DESCRIPTION" keys="DESCRIPTION;ACCOUNTID"
          parent-keys="ACCOUNTID">
        </o-tree-node>


      </o-tree-node>

    </o-tree>

  </div>

  <div fxLayout="column" fxLayoutAlign="center stretch" fxFlex="75">
    <router-outlet></router-outlet>
  </div>
</div>
`;

const TREE_TS_DATA = `

`;

const ROUTING_TS_DATA = `
  ...

  export const routes: Routes = [{
    path: '',
    component: CustomersTreeHomeComponent,
    children: [
      { path: ':CUSTOMERID', component: CustomersDetailComponent },
      { path: 'accounts/:ACCOUNTID', component: AccountDetailComponent }
    ]
  }];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CustomersTreeRoutingModule { }
`;

const CUSTOMER_DETAIL_HTML_DATA = `
<o-form service="customers" entity="customer" show-header="yes" header-actions="R;I;U;D" #oDetailForm keys="CUSTOMERID" keys-sql-types="INTEGER"
  columns="ID_DMS_DOC" editable-detail="yes" service-type="DummyService" label-header="CUSTOMER">


  <div fxLayout="column" fxLayoutGap="24px" layout-padding>

    <o-row attr="row1" title-label="CUSTOMER_DATA" layout-padding layout-align="start center" class="rounded-panel">
      <o-text-input attr="NAME" class="margin-right-24" fxFlex.lg="30" fxFlex.xl="30" fxFlex="50"></o-text-input>
      <o-text-input attr="SURNAME" fxFlex="50"></o-text-input>
    </o-row>

    <o-column attr="other_data" title-label="CONTACT_DATA" layout-padding layout-align="start stretch" class="rounded-panel">
      <o-table #accountsTable service-type="DummyService" service="customers" entity="customerAccount" parent-keys="CUSTOMERID"
        keys="ACCOUNTID" detail-form-route="accounts" edit-form-route="accounts" columns="ACCOUNTID;ENTITYID;OFFICEID;CDID;ANID;ACCOUNT;BALANCE;CUSTOMERID;STARTDATE;ENDDATE"
        visible-columns="ACCOUNT;BALANCE;STARTDATE;ENDDATE" title="ACCOUNTS" sort-columns="STARTDATE" query-on-init="false"
        query-rows="6" quick-filter="yes" pageable="no" insert-button="no" row-height="medium" class="vertical-padding-8">

        <o-table-column attr="ACCOUNT" title="ACCOUNT" class="o-table-column-centered"></o-table-column>
        <o-table-column attr="STARTDATE" title="STARTDATE" type="date" format="LL"></o-table-column>
        <o-table-column attr="BALANCE" title="BALANCE" type="currency" currency-symbol="€" currency-symbol-position="right" thousand-separator="."
          decimal-separator=",">
        </o-table-column>
        <o-table-column attr="ENDDATE" title="ENDDATE" type="date" format="LL"></o-table-column>
      </o-table>
    </o-column>

  </div>

</o-form>
`;

const ACCOUNT_DETAIL_HTML_DATA = `
<o-form service="branches" entity="account" keys="ACCOUNTID" keys-sql-types="INTEGER" columns="ACCOUNTID;BALANCE;ENTITYID;OFFICEID;CDID;ANID;ACCOUNTTYP"
  fxLayout="column" show-header="yes" header-actions="R;U;D" #oForm label-header="ACCOUNT" service-type="DummyService">

  <div fxLayout="column" fxLayoutGap="24px" layout-padding>

    <o-row attr="row1" title-label="CUSTOMER_DATA" layout-padding layout-align="start center" class="rounded-panel">
      <o-currency-input attr="BALANCE" class="margin-right-24"></o-currency-input>
      <o-date-input attr="STARTDATE" class="margin-right-24"></o-date-input>
      <o-date-input attr="ENDDATE"></o-date-input>
    </o-row>

    <o-column attr="other_data" title-label="TRANSACTIONS" layout-padding layout-align="start stretch" class="rounded-panel">

      <o-table fxFlex service-type="DummyService" service="movements" entity="movement" keys="MOVEMENTID" parent-keys="ACCOUNTID"
        detail-form-route="transactions" insert-form-route="transactions/new" edit-form-route="transactions"
        columns="ACCOUNTID;MOVEMENTID;DATE_;CONCEPT;MOVEMENT;MOVEMENTTYPES"
        visible-columns="DATE_;CONCEPT;MOVEMENT;MOVEMENTTYPES" title="MOVEMENTS" sort-columns="DATE_" query-on-init="false"
        query-rows="5" quick-filter="yes" pageable="no">

        <o-table-columns-filter></o-table-columns-filter>

        <o-table-column attr="DATE_" title="DATE_" type="date" format="LL" width="30%"></o-table-column>
        <o-table-column attr="CONCEPT" title="CONCEPT" width="18%"></o-table-column>
        <o-table-column attr="MOVEMENT" title="MOVEMENT" width="18%" type="currency" currency-symbol="€" currency-symbol-position="right"
          thousand-separator="." decimal-separator=","></o-table-column>
        <o-table-column attr="MOVEMENTTYPES" title="MOVEMENTTYPES">
        </o-table-column>
      </o-table>
    </o-column>

  </div>

</o-form>
`;

@Component({
  selector: 'customers-tree-home',
  templateUrl: './customers-tree-home.component.html',
  styleUrls: ['./customers-tree-home.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.customers-tree-home]': 'true'
  }
})
export class CustomersTreeHomeComponent implements OnInit {

  files = {
    'html': {
      'data': TREE_HTML_DATA
    },
    'scss': {
      'data': undefined
    },
    'typescript': {
      'data': undefined
    },
    files: [{
      label: 'routing.module.ts',
      type: 'typescript',
      data: ROUTING_TS_DATA
    }, {
      label: 'customer-detail.component.html',
      type: 'html',
      data: CUSTOMER_DETAIL_HTML_DATA
    }, {
      label: 'account-detail.component.html',
      type: 'html',
      data: ACCOUNT_DETAIL_HTML_DATA
    }]
  };


  constructor(
    protected router: Router,
    protected actRoute: ActivatedRoute
  ) {
    //
  }

  ngOnInit() {
    //
  }

}

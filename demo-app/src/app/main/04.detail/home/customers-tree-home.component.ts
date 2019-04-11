import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart, GuardsCheckStart } from '@angular/router';

const TREE_HTML_DATA = `
<div fxLayout="row" fxLayoutAlign="center stretch" fxFlexFill>
  <div fxLayout="column" fxLayoutAlign="center stretch" fxFlex="25">

    <o-tree #treeview fxFlex root-title="CUSTOMERS" service-type="DummyService"
      service="customers" entity="customer" keys="CUSTOMERID"
      columns="CUSTOMERID;SURNAME;NAME" description-columns="SURNAME;NAME"
      separator=", " query-on-init="true" route=":CUSTOMERID">

      <o-tree-node root-title="ACCOUNTS" show-root="no" service-type="DummyService"
        service="customers" entity="customerAccount" columns="ACCOUNTID;CUSTOMERID;ACCOUNT"
        description-columns="ACCOUNT" keys="ACCOUNTID" parent-keys="CUSTOMERID"
        route="accounts/:ACCOUNTID">
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
<o-form service="customers" entity="customer" show-header="yes" header-actions="R;I;U;D"
  #oDetailForm keys="CUSTOMERID" keys-sql-types="INTEGER" columns="ID_DMS_DOC"
  editable-detail="yes" service-type="DummyService" label-header="CUSTOMER">

  <div fxLayout="column" fxLayoutGap="24px" layout-padding>

    <o-row attr="row1" title="CUSTOMER_DATA" layout-padding layout-align="start center" class="rounded-panel">
      <o-text-input attr="NAME" class="margin-right-24" fxFlex.lg="30" fxFlex.xl="30" fxFlex="50"></o-text-input>
      <o-text-input attr="SURNAME" fxFlex="50"></o-text-input>
    </o-row>

    <o-column attr="other_data" title="CONTACT_DATA" layout-padding layout-align="start stretch" class="rounded-panel">
      <o-table #accountsTable service-type="DummyService" service="customers" entity="customerAccount" parent-keys="CUSTOMERID"
        keys="ACCOUNTID" detail-form-route="accounts" edit-form-route="accounts"
        columns="ACCOUNTID;ENTITYID;OFFICEID;CDID;ANID;ACCOUNT;BALANCE;CUSTOMERID;STARTDATE;ENDDATE"
        visible-columns="ACCOUNT;BALANCE;STARTDATE;ENDDATE" title="ACCOUNTS" sort-columns="STARTDATE" query-on-init="false"
        query-rows="6" quick-filter="yes" pageable="no" insert-button="no" row-height="medium" class="vertical-padding-8">

        <o-table-column attr="ACCOUNT" title="ACCOUNT" class="o-table-column-centered"></o-table-column>
        <o-table-column attr="STARTDATE" title="STARTDATE" type="date" format="LL"></o-table-column>
        <o-table-column attr="BALANCE" title="BALANCE" type="currency" currency-symbol="€"
          currency-symbol-position="right" thousand-separator="." decimal-separator=",">
        </o-table-column>
        <o-table-column attr="ENDDATE" title="ENDDATE" type="date" format="LL"></o-table-column>
      </o-table>
    </o-column>

  </div>

</o-form>
`;

const ACCOUNT_DETAIL_HTML_DATA = `
<o-form service="branches" entity="account" keys="ACCOUNTID" keys-sql-types="INTEGER"
  columns="ACCOUNTID;BALANCE;ENTITYID;OFFICEID;CDID;ANID;ACCOUNTTYP" fxLayout="column"
  show-header="yes" header-actions="R;U;D" #oForm label-header="ACCOUNT" service-type="DummyService">

  <div fxLayout="column" fxLayoutGap="24px" layout-padding>

    <o-row attr="row1" title="CUSTOMER_DATA" layout-padding layout-align="start center" class="rounded-panel">
      <o-currency-input attr="BALANCE" class="margin-right-24"></o-currency-input>
      <o-date-input attr="STARTDATE" class="margin-right-24"></o-date-input>
      <o-date-input attr="ENDDATE"></o-date-input>
    </o-row>

    <o-column attr="other_data" title="TRANSACTIONS" layout-padding layout-align="start stretch" class="rounded-panel">

      <o-table fxFlex service-type="DummyService" service="movements" entity="movement"
        keys="MOVEMENTID" parent-keys="ACCOUNTID" detail-form-route="transactions"
        insert-form-route="transactions/new" edit-form-route="transactions"
        columns="ACCOUNTID;MOVEMENTID;DATE_;CONCEPT;MOVEMENT;MOVEMENTTYPES"
        visible-columns="DATE_;CONCEPT;MOVEMENT;MOVEMENTTYPES" title="MOVEMENTS" sort-columns="DATE_"
        query-on-init="false" query-rows="5" quick-filter="yes" pageable="no">

        <o-table-columns-filter></o-table-columns-filter>

        <o-table-column attr="DATE_" title="DATE_" type="date" format="LL" width="30%">
        </o-table-column>
        <o-table-column attr="CONCEPT" title="CONCEPT" width="18%"></o-table-column>
        <o-table-column attr="MOVEMENT" title="MOVEMENT" width="18%" type="currency" currency-symbol="€"
          currency-symbol-position="right" thousand-separator="." decimal-separator=",">
        </o-table-column>
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
    },{
      label: 'customers',
      type: 'typescript',
      data: CUSTOMERS_DATA
    },{
      label: 'accounts',
      type: 'typescript',
      data: ACCOUNTS_DATA
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

const CUSTOMERS_DATA = `
[
  {
    "SURNAME": "Lawrence",
    "CUSTOMERID": 7511,
    "NAME": "Daisy"
  },
  {
    "SURNAME": "Alan",
    "CUSTOMERID": 10602,
    "NAME": "James"
  },
  {
    "SURNAME": "Smith",
    "CUSTOMERID": 10603,
    "NAME": "Lucie"
  },
  {
    "SURNAME": "Bugle",
    "CUSTOMERID": 10604,
    "NAME": "Mark"
  },
  {
    "SURNAME": "Murray",
    "CUSTOMERID": 10605,
    "NAME": "Clarette"
  },
  {
    "SURNAME": "Baños Márqueza",
    "CUSTOMERID": 10606,
    "NAME": "Tomás Miguel"
  },
  {
    "SURNAME": "Buendía Lorente",
    "CUSTOMERID": 10607,
    "NAME": "Lidya Esther"
  },
  {
    "SURNAME": "Buttercup",
    "CUSTOMERID": 10808,
    "NAME": "Billy"
  },
  {
    "SURNAME": "C.Johnson",
    "CUSTOMERID": 10810,
    "NAME": "Marie"
  },
  {
    "SURNAME": "Fernández Blanco",
    "CUSTOMERID": 10811,
    "NAME": "Pablo"
  },
  {
    "SURNAME": "Windflower",
    "CUSTOMERID": 10812,
    "NAME": "Abie"
  },
  {
    "SURNAME": "Poppy",
    "CUSTOMERID": 10813,
    "NAME": "Chistine"
  },
  {
    "SURNAME": "Rose",
    "CUSTOMERID": 10814,
    "NAME": "Bernice"
  },
  {
    "SURNAME": "Corbirock",
    "CUSTOMERID": 10815,
    "NAME": "Bridget"
  },
  {
    "SURNAME": "Green",
    "CUSTOMERID": 10834,
    "NAME": "John"
  },
  {
    "SURNAME": "Schwarzkopf",
    "CUSTOMERID": 19270,
    "NAME": "Adolph"
  },
  {
    "SURNAME": "Engels",
    "CUSTOMERID": 19271,
    "NAME": "Aubrey"
  },
  {
    "SURNAME": "Schmidt",
    "CUSTOMERID": 19272,
    "NAME": "Egbert"
  },
  {
    "SURNAME": "Müller",
    "CUSTOMERID": 19273,
    "NAME": "Frieda"
  },
  {
    "SURNAME": "Meyer",
    "CUSTOMERID": 19274,
    "NAME": "Gretchen"
  },
  {
    "SURNAME": "Fischer",
    "CUSTOMERID": 19320,
    "NAME": "Heidi"
  },
  {
    "SURNAME": "Schneider",
    "CUSTOMERID": 19321,
    "NAME": "Helmuth"
  },
  {
    "SURNAME": "Metzger",
    "CUSTOMERID": 19322,
    "NAME": "Lancelot"
  },
  {
    "SURNAME": "Töpfer",
    "CUSTOMERID": 19323,
    "NAME": "Luther"
  },
  {
    "SURNAME": "Weffer",
    "CUSTOMERID": 19324,
    "NAME": "Erick"
  },
  {
    "SURNAME": "Matius",
    "CUSTOMERID": 19325,
    "NAME": "Adelbert"
  },
  {
    "SURNAME": "Smit",
    "CUSTOMERID": 19326,
    "NAME": "Hiltrud"
  },
  {
    "SURNAME": "Jansen",
    "CUSTOMERID": 19327,
    "NAME": "Kees"
  },
  {
    "SURNAME": "van Bruggen",
    "CUSTOMERID": 19328,
    "NAME": "Piet"
  },
  {
    "SURNAME": " de Groot",
    "CUSTOMERID": 19329,
    "NAME": "Sjon"
  },
  {
    "SURNAME": "Van Rijn",
    "CUSTOMERID": 19330,
    "NAME": "Maikol"
  },
  {
    "SURNAME": "van Wijk",
    "CUSTOMERID": 19331,
    "NAME": "Sjaak"
  },
  {
    "SURNAME": "van Serooskerken",
    "CUSTOMERID": 19332,
    "NAME": "Petrik"
  },
  {
    "SURNAME": "Van Dyck",
    "CUSTOMERID": 19333,
    "NAME": "Steve"
  },
  {
    "SURNAME": "Timmerman",
    "CUSTOMERID": 19334,
    "NAME": "Olinda"
  },
  {
    "SURNAME": "Van Dijk",
    "CUSTOMERID": 19335,
    "NAME": "Nixie"
  },
  {
    "SURNAME": "De Jong",
    "CUSTOMERID": 19336,
    "NAME": "Marlene"
  },
  {
    "SURNAME": "Bakker",
    "CUSTOMERID": 19337,
    "NAME": "Louise"
  },
  {
    "SURNAME": "Visser",
    "CUSTOMERID": 19338,
    "NAME": "Schmetterling"
  },
  {
    "SURNAME": "de Gaulle",
    "CUSTOMERID": 19339,
    "NAME": "Jacques"
  },
  {
    "SURNAME": "d'Orléans",
    "CUSTOMERID": 19340,
    "NAME": "Jean"
  },
  {
    "SURNAME": "d'Estaing",
    "CUSTOMERID": 19341,
    "NAME": "Marie"
  },
  {
    "SURNAME": "Vieuville ",
    "CUSTOMERID": 19342,
    "NAME": "Julia"
  },
  {
    "SURNAME": "Galouzeau",
    "CUSTOMERID": 19343,
    "NAME": "Jeanne"
  },
  {
    "SURNAME": "al-Fulan",
    "CUSTOMERID": 19344,
    "NAME": "Abbud"
  },
  {
    "SURNAME": "Khalid",
    "CUSTOMERID": 19345,
    "NAME": "Abdel Khâliq"
  },
  {
    "SURNAME": "Sharifah",
    "CUSTOMERID": 19346,
    "NAME": "Baraka"
  },
  {
    "SURNAME": "Khalid",
    "CUSTOMERID": 19347,
    "NAME": "Jawhar"
  },
  {
    "SURNAME": "Papamakarios",
    "CUSTOMERID": 19348,
    "NAME": "Adelphos"
  },
  {
    "SURNAME": "Thalassinos",
    "CUSTOMERID": 19349,
    "NAME": "Ambrosine"
  },
  {
    "SURNAME": "Nikopolidis",
    "CUSTOMERID": 19350,
    "NAME": "Andromeda"
  },
  {
    "SURNAME": "Kirgyakos",
    "CUSTOMERID": 19351,
    "NAME": "Adonis"
  },
  {
    "SURNAME": "Christopoulos",
    "CUSTOMERID": 19352,
    "NAME": "Elektra"
  },
  {
    "SURNAME": "Mao",
    "CUSTOMERID": 19353,
    "NAME": "Tsang"
  },
  {
    "SURNAME": "Qian",
    "CUSTOMERID": 19354,
    "NAME": "Zedong"
  },
  {
    "SURNAME": "Pérez Miguelez",
    "CUSTOMERID": 19355,
    "NAME": "Paco"
  },
  {
    "SURNAME": "Vazquez Santos",
    "CUSTOMERID": 19356,
    "NAME": "Paula"
  },
  {
    "SURNAME": "Míguez Martinez",
    "CUSTOMERID": 19357,
    "NAME": "Ana"
  },
  {
    "SURNAME": "López Piñeiro",
    "CUSTOMERID": 19358,
    "NAME": "Jose"
  },
  {
    "SURNAME": "Dominguez ",
    "CUSTOMERID": 19359,
    "NAME": "Juan"
  },
  {
    "SURNAME": "Nuñez Fernandez",
    "CUSTOMERID": 19360,
    "NAME": "Maria"
  },
  {
    "SURNAME": "Santos Rodríguez",
    "CUSTOMERID": 19361,
    "NAME": "Carlos Manuel"
  },
  {
    "SURNAME": "Brown",
    "CUSTOMERID": 19362,
    "NAME": "Philippe"
  },
  {
    "SURNAME": "Calaghan",
    "CUSTOMERID": 19363,
    "NAME": "Michael"
  },
  {
    "SURNAME": "Ashworth",
    "CUSTOMERID": 19364,
    "NAME": "Sue"
  },
  {
    "SURNAME": "Andersen",
    "CUSTOMERID": 19365,
    "NAME": "Wing"
  },
  {
    "SURNAME": "Martínez Kirsten",
    "CUSTOMERID": 19381,
    "NAME": "Pablo"
  },
  {
    "SURNAME": "Londhe",
    "CUSTOMERID": 19387,
    "NAME": "vikas"
  },
  {
    "SURNAME": "Ignacio",
    "CUSTOMERID": 19393,
    "NAME": "Salinas"
  },
  {
    "SURNAME": "Genaro",
    "CUSTOMERID": 19395,
    "NAME": "Iglesias"
  },
  {
    "SURNAME": "Rogelia",
    "CUSTOMERID": 19397,
    "NAME": "Fecha"
  },
  {
    "SURNAME": "Eladio",
    "CUSTOMERID": 19398,
    "NAME": "Martínez"
  },
  {
    "SURNAME": "Agustín",
    "CUSTOMERID": 19399,
    "NAME": "Lorenzo"
  },
  {
    "SURNAME": "Jacinto",
    "CUSTOMERID": 19400,
    "NAME": "Villar"
  },
  {
    "SURNAME": "Eudaldo",
    "CUSTOMERID": 19401,
    "NAME": "Hernandez"
  },
  {
    "SURNAME": "Cristina",
    "CUSTOMERID": 19403,
    "NAME": "Cifuentes"
  },
  {
    "SURNAME": "Jesucristo",
    "CUSTOMERID": 19404,
    "NAME": "Pérez"
  },
  {
    "SURNAME": "Plácido",
    "CUSTOMERID": 19405,
    "NAME": "Domingo"
  },
  {
    "SURNAME": "Gonzalo",
    "CUSTOMERID": 19406,
    "NAME": "López"
  },
  {
    "SURNAME": "Carlos",
    "CUSTOMERID": 19407,
    "NAME": "Puente"
  },
  {
    "SURNAME": "Martínez",
    "CUSTOMERID": 19421,
    "NAME": "Gonzalo"
  }
]
`;

const ACCOUNTS_DATA = `
[
  {
    "STARTDATE": 991692000000,
    "OFFICEID": "0002",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Savings account",
    "ANID": "0000000010",
    "INTERESRATE": 0.009899999999999999,
    "ACCOUNTID": 1,
    "BALANCE": 17835,
    "CDID": "34"
  },
  {
    "STARTDATE": 966722400000,
    "OFFICEID": "0000",
    "ENTITYID": "2095",
    "ENDDATE": 1072825200000,
    "ACCOUNTTYP": "Savings account",
    "ANID": "0000000002",
    "INTERESRATE": 0.009899999999999999,
    "ACCOUNTID": 2,
    "BALANCE": 1958.2299999999998,
    "CDID": "00"
  },
  {
    "STARTDATE": 1215554400000,
    "OFFICEID": "0000",
    "ENTITYID": "2095",
    "ENDDATE": 1224626400000,
    "ACCOUNTTYP": "Personal account",
    "ANID": "0000000003",
    "INTERESRATE": 0.0125,
    "ACCOUNTID": 3,
    "BALANCE": 15000,
    "CDID": "00"
  },
  {
    "STARTDATE": 1049493600000,
    "OFFICEID": "0001",
    "ENTITYID": "2095",
    "ENDDATE": 1072825200000,
    "ACCOUNTTYP": "Personal account",
    "ANID": "0000000001",
    "INTERESRATE": 0.0125,
    "ACCOUNTID": 5,
    "BALANCE": 20000,
    "CDID": "00"
  },
  {
    "STARTDATE": 995320800000,
    "OFFICEID": "0001",
    "ENTITYID": "2095",
    "ENDDATE": 1009753200000,
    "ACCOUNTTYP": "Savings account",
    "ANID": "0000000004",
    "INTERESRATE": 0.043,
    "ACCOUNTID": 6,
    "BALANCE": 660.13,
    "CDID": "00"
  },
  {
    "STARTDATE": 1061071200000,
    "OFFICEID": "0001",
    "ENTITYID": "2095",
    "ENDDATE": 1072825200000,
    "ACCOUNTTYP": "Savings account",
    "ANID": "0000000005",
    "INTERESRATE": 0.043,
    "ACCOUNTID": 7,
    "BALANCE": 11500,
    "CDID": "00"
  },
  {
    "STARTDATE": 1049407200000,
    "OFFICEID": "0001",
    "ENTITYID": "2095",
    "ENDDATE": 1221602400000,
    "ACCOUNTTYP": "Time deposit account",
    "ANID": "0000000006",
    "INTERESRATE": 0.15,
    "ACCOUNTID": 8,
    "BALANCE": 1937,
    "CDID": "00"
  },
  {
    "STARTDATE": 1049493600000,
    "OFFICEID": "0001",
    "ENTITYID": "2095",
    "ENDDATE": 1072825200000,
    "ACCOUNTTYP": "Time deposit account",
    "ANID": "0000000007",
    "INTERESRATE": 0.15,
    "ACCOUNTID": 9,
    "BALANCE": 834.77,
    "CDID": "00"
  },
  {
    "STARTDATE": 1049493600000,
    "OFFICEID": "0001",
    "ENTITYID": "2095",
    "ENDDATE": 1072825200000,
    "ACCOUNTTYP": "Personal account",
    "ANID": "0000000008",
    "INTERESRATE": 0.0097,
    "ACCOUNTID": 10,
    "BALANCE": 799,
    "CDID": "00"
  },
  {
    "STARTDATE": 1064008800000,
    "OFFICEID": "0001",
    "ENTITYID": "2095",
    "ENDDATE": 1072825200000,
    "ACCOUNTTYP": "Personal account",
    "ANID": "0000000009",
    "INTERESRATE": 0.0097,
    "ACCOUNTID": 11,
    "BALANCE": 1058.92,
    "CDID": "00"
  },
  {
    "STARTDATE": 1049493600000,
    "OFFICEID": "0001",
    "ENTITYID": "2095",
    "ENDDATE": 1072825200000,
    "ACCOUNTTYP": "Individual Savings account",
    "ANID": "0001125411",
    "INTERESRATE": 0.0175,
    "ACCOUNTID": 27,
    "BALANCE": 1196.0900000000001,
    "CDID": "00"
  },
  {
    "STARTDATE": 1049493600000,
    "OFFICEID": "0001",
    "ENTITYID": "2095",
    "ENDDATE": 1072825200000,
    "ACCOUNTTYP": "Individual Savings account",
    "ANID": "0015811111",
    "INTERESRATE": 0.0175,
    "ACCOUNTID": 36,
    "BALANCE": 6296,
    "CDID": "00"
  },
  {
    "STARTDATE": 1144188000000,
    "OFFICEID": "0003",
    "ENTITYID": "2095",
    "ENDDATE": 1167519600000,
    "ACCOUNTTYP": "Tax-Exempt Special Savings account",
    "ANID": "0000251442",
    "INTERESRATE": 0.0125,
    "ACCOUNTID": 41,
    "BALANCE": 963,
    "CDID": "00"
  },
  {
    "STARTDATE": 1053234420250,
    "OFFICEID": "0070",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Tax-Exempt Special Savings account",
    "ANID": "5734988462",
    "INTERESRATE": 0.0125,
    "ACCOUNTID": 7040,
    "BALANCE": 863,
    "CDID": "31"
  },
  {
    "STARTDATE": 1074079201493,
    "OFFICEID": "0103",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Automatic transfer service account",
    "ANID": "1009255260",
    "INTERESRATE": 0.033,
    "ACCOUNTID": 7041,
    "BALANCE": 1069,
    "CDID": "43"
  },
  {
    "STARTDATE": 1187338822991,
    "OFFICEID": "0103",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Automatic transfer service account",
    "ANID": "7856003780",
    "INTERESRATE": 0.033,
    "ACCOUNTID": 7090,
    "BALANCE": 11483,
    "CDID": "74"
  },
  {
    "STARTDATE": 1170523224949,
    "OFFICEID": "0101",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Numbered bank account",
    "ANID": "0054733541",
    "INTERESRATE": 0.022000000000000002,
    "ACCOUNTID": 7091,
    "BALANCE": 27649,
    "CDID": "47"
  },
  {
    "STARTDATE": 1156452100775,
    "OFFICEID": "0000",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Numbered bank account",
    "ANID": "5400649868",
    "INTERESRATE": 0.022000000000000002,
    "ACCOUNTID": 7123,
    "BALANCE": 15990,
    "CDID": "17"
  },
  {
    "STARTDATE": 975281277139,
    "OFFICEID": "0004",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Nostro and vostro account",
    "ANID": "5615307257",
    "INTERESRATE": 0.012,
    "ACCOUNTID": 7124,
    "BALANCE": 26948,
    "CDID": "47"
  },
  {
    "STARTDATE": 1053445107923,
    "OFFICEID": "0070",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Nostro and vostro account",
    "ANID": "6393721816",
    "INTERESRATE": 0.012,
    "ACCOUNTID": 7125,
    "BALANCE": 8272,
    "CDID": "43"
  },
  {
    "STARTDATE": 962152328991,
    "OFFICEID": "0003",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Personal account",
    "ANID": "5796260745",
    "INTERESRATE": 0.023,
    "ACCOUNTID": 7126,
    "BALANCE": 71194,
    "CDID": "42"
  },
  {
    "STARTDATE": 1058939804422,
    "OFFICEID": "0102",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Personal account",
    "ANID": "5907669950",
    "INTERESRATE": 0.023,
    "ACCOUNTID": 7223,
    "BALANCE": 41612,
    "CDID": "42"
  },
  {
    "STARTDATE": 1009222158375,
    "OFFICEID": "0002",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Negotiable Order of Withdrawal account",
    "ANID": "4760933257",
    "INTERESRATE": 0.0333,
    "ACCOUNTID": 7224,
    "BALANCE": 20374,
    "CDID": "28"
  },
  {
    "STARTDATE": 1228652552357,
    "OFFICEID": "0102",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Negotiable Order of Withdrawal account",
    "ANID": "3646418053",
    "INTERESRATE": 0.0333,
    "ACCOUNTID": 7225,
    "BALANCE": 3935,
    "CDID": "93"
  },
  {
    "STARTDATE": 1182355333624,
    "OFFICEID": "0102",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Money market deposit account",
    "ANID": "7151447929",
    "INTERESRATE": 0.02,
    "ACCOUNTID": 7226,
    "BALANCE": 10959,
    "CDID": "18"
  },
  {
    "STARTDATE": 1053968411700,
    "OFFICEID": "0002",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Money market deposit account",
    "ANID": "5292426114",
    "INTERESRATE": 0.02,
    "ACCOUNTID": 7296,
    "BALANCE": 6094,
    "CDID": "39"
  },
  {
    "STARTDATE": 1122273298191,
    "OFFICEID": "0101",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Transaction deposit account",
    "ANID": "0679526807",
    "INTERESRATE": 0.055005,
    "ACCOUNTID": 7297,
    "BALANCE": 10571,
    "CDID": "46"
  },
  {
    "STARTDATE": 1056838880305,
    "OFFICEID": "0070",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Transaction deposit account",
    "ANID": "8821432025",
    "INTERESRATE": 0.055005,
    "ACCOUNTID": 7298,
    "BALANCE": 4969,
    "CDID": "30"
  },
  {
    "STARTDATE": 1008725583899,
    "OFFICEID": "0101",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Transaction deposit account",
    "ANID": "2610413611",
    "INTERESRATE": 0.023700000000000002,
    "ACCOUNTID": 7299,
    "BALANCE": 280613,
    "CDID": "72"
  },
  {
    "STARTDATE": 1085966756772,
    "OFFICEID": "0070",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Transaction deposit account",
    "ANID": "7437156202",
    "INTERESRATE": 0.023700000000000002,
    "ACCOUNTID": 7300,
    "BALANCE": 5333,
    "CDID": "28"
  },
  {
    "STARTDATE": 1112375151091,
    "OFFICEID": "0000",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Low-cost account",
    "ANID": "3151615919",
    "INTERESRATE": 0.0025,
    "ACCOUNTID": 7301,
    "BALANCE": 6548,
    "CDID": "34"
  },
  {
    "STARTDATE": 957678068844,
    "OFFICEID": "0070",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Low-cost account",
    "ANID": "0784642399",
    "INTERESRATE": 0.0025,
    "ACCOUNTID": 7302,
    "BALANCE": 1039,
    "CDID": "07"
  },
  {
    "STARTDATE": 1035875932028,
    "OFFICEID": "0004",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Money market deposit account",
    "ANID": "5890104123",
    "INTERESRATE": 0.0255,
    "ACCOUNTID": 7303,
    "BALANCE": 29346,
    "CDID": "63"
  },
  {
    "STARTDATE": 1221922078355,
    "OFFICEID": "0070",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Money market deposit account",
    "ANID": "8171065567",
    "INTERESRATE": 0.0255,
    "ACCOUNTID": 7304,
    "BALANCE": 3860,
    "CDID": "76"
  },
  {
    "STARTDATE": 1149211402290,
    "OFFICEID": "0103",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Savings account",
    "ANID": "8856734200",
    "INTERESRATE": 0.0510001,
    "ACCOUNTID": 7305,
    "BALANCE": 4490,
    "CDID": "86"
  },
  {
    "STARTDATE": 1169840985855,
    "OFFICEID": "0070",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Savings account",
    "ANID": "7682391175",
    "INTERESRATE": 0.0510001,
    "ACCOUNTID": 7306,
    "BALANCE": 15960,
    "CDID": "35"
  },
  {
    "STARTDATE": 1110868468501,
    "OFFICEID": "0103",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Personal account",
    "ANID": "1303828703",
    "INTERESRATE": 0.010025,
    "ACCOUNTID": 7307,
    "BALANCE": 15216,
    "CDID": "10"
  },
  {
    "STARTDATE": 1189082658474,
    "OFFICEID": "0101",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Personal account",
    "ANID": "8843583505",
    "INTERESRATE": 0.010025,
    "ACCOUNTID": 7308,
    "BALANCE": 25459,
    "CDID": "11"
  },
  {
    "STARTDATE": 1166959651145,
    "OFFICEID": "0003",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Transactional account",
    "ANID": "5506824885",
    "INTERESRATE": 0.01236,
    "ACCOUNTID": 7309,
    "BALANCE": 33768,
    "CDID": "25"
  },
  {
    "STARTDATE": 1137173367571,
    "OFFICEID": "0002",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Transactional account",
    "ANID": "1061103749",
    "INTERESRATE": 0.01236,
    "ACCOUNTID": 7310,
    "BALANCE": 2510,
    "CDID": "95"
  },
  {
    "STARTDATE": 1231820229157,
    "OFFICEID": "0004",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Personal account",
    "ANID": "0264511022",
    "INTERESRATE": 0.01256,
    "ACCOUNTID": 19370,
    "BALANCE": 2770,
    "CDID": "11"
  },
  {
    "STARTDATE": 1101633766855,
    "OFFICEID": "0004",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Personal account",
    "ANID": "3219639760",
    "INTERESRATE": 0.01256,
    "ACCOUNTID": 19371,
    "BALANCE": 12441,
    "CDID": "19"
  },
  {
    "STARTDATE": 1025370437958,
    "OFFICEID": "0002",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Time deposit account",
    "ANID": "0790946410",
    "INTERESRATE": 0.041205,
    "ACCOUNTID": 19372,
    "BALANCE": 25098,
    "CDID": "84"
  },
  {
    "STARTDATE": 1201228946973,
    "OFFICEID": "0070",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Time deposit account",
    "ANID": "2918720775",
    "INTERESRATE": 0.041205,
    "ACCOUNTID": 19373,
    "BALANCE": 15239,
    "CDID": "68"
  },
  {
    "CDID": "02",
    "BALANCE": 8603,
    "ACCOUNTID": 19374,
    "OFFICEID": "0070",
    "ENTITYID": "2095",
    "ANID": "4876711204",
    "STARTDATE": 962022729246
  },
  {
    "CDID": "70",
    "BALANCE": 13148,
    "ACCOUNTID": 19375,
    "OFFICEID": "0003",
    "ENTITYID": "2095",
    "ANID": "3960900384",
    "STARTDATE": 1126321401856
  },
  {
    "STARTDATE": 1111544555609,
    "OFFICEID": "0002",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Numbered bank account",
    "ANID": "7146388530",
    "INTERESRATE": 0.0123,
    "ACCOUNTID": 19376,
    "BALANCE": 13384,
    "CDID": "26"
  },
  {
    "STARTDATE": 1208773231728,
    "OFFICEID": "0103",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Numbered bank account",
    "ANID": "4522491902",
    "INTERESRATE": 0.0123,
    "ACCOUNTID": 19377,
    "BALANCE": 8921,
    "CDID": "72"
  },
  {
    "STARTDATE": 1192170454297,
    "OFFICEID": "0003",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Individual Savings account",
    "ANID": "5486025482",
    "INTERESRATE": 0.0093025,
    "ACCOUNTID": 19378,
    "BALANCE": 40256,
    "CDID": "01"
  },
  {
    "STARTDATE": 1033818304179,
    "OFFICEID": "0070",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Individual Savings account",
    "ANID": "1694955564",
    "INTERESRATE": 0.0093025,
    "ACCOUNTID": 19379,
    "BALANCE": 2873,
    "CDID": "07"
  },
  {
    "STARTDATE": 1228370895544,
    "OFFICEID": "0070",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Personal account",
    "ANID": "0311077857",
    "INTERESRATE": 0.023639999999999998,
    "ACCOUNTID": 19380,
    "BALANCE": 11042,
    "CDID": "04"
  },
  {
    "STARTDATE": 1103610833325,
    "OFFICEID": "0101",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Personal account",
    "ANID": "3331790023",
    "INTERESRATE": 0.023639999999999998,
    "ACCOUNTID": 19381,
    "BALANCE": 9747,
    "CDID": "83"
  },
  {
    "STARTDATE": 1205103600000,
    "OFFICEID": "0103",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Personal account",
    "ANID": "0815179651",
    "INTERESRATE": 0.0155,
    "ACCOUNTID": 19382,
    "BALANCE": 25536,
    "CDID": "85"
  },
  {
    "STARTDATE": 1089413399549,
    "OFFICEID": "0102",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Personal account",
    "ANID": "3283180626",
    "INTERESRATE": 0.0155,
    "ACCOUNTID": 19383,
    "BALANCE": 1981,
    "CDID": "88"
  },
  {
    "CDID": "09",
    "BALANCE": 23276,
    "ACCOUNTID": 19384,
    "OFFICEID": "0003",
    "ENTITYID": "2095",
    "ANID": "5956339559",
    "STARTDATE": 1128635482965
  },
  {
    "CDID": "43",
    "BALANCE": 2771,
    "ACCOUNTID": 19620,
    "OFFICEID": "0102",
    "ENTITYID": "2095",
    "ANID": "2597878157",
    "STARTDATE": 1111736427679
  },
  {
    "CDID": "80",
    "BALANCE": 9004,
    "ACCOUNTID": 19621,
    "OFFICEID": "0070",
    "ENTITYID": "2095",
    "ANID": "1877871185",
    "STARTDATE": 1001193688122
  },
  {
    "CDID": "62",
    "BALANCE": 4393,
    "ACCOUNTID": 19622,
    "OFFICEID": "0103",
    "ENTITYID": "2095",
    "ANID": "2713917110",
    "STARTDATE": 997108415623
  },
  {
    "STARTDATE": 1082443492957,
    "OFFICEID": "0102",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Personal account",
    "ANID": "8699077909",
    "INTERESRATE": 0.01369,
    "ACCOUNTID": 19623,
    "BALANCE": 1205,
    "CDID": "23"
  },
  {
    "STARTDATE": 1041903749813,
    "OFFICEID": "0101",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Personal account",
    "ANID": "4122324281",
    "INTERESRATE": 0.01369,
    "ACCOUNTID": 19624,
    "BALANCE": 14658,
    "CDID": "69"
  },
  {
    "STARTDATE": 965422636150,
    "OFFICEID": "0004",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Individual Savings account",
    "ANID": "4118651334",
    "INTERESRATE": 0.0213,
    "ACCOUNTID": 19625,
    "BALANCE": 4203,
    "CDID": "14"
  },
  {
    "STARTDATE": 1203364100689,
    "OFFICEID": "0002",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Individual Savings account",
    "ANID": "8963572716",
    "INTERESRATE": 0.0213,
    "ACCOUNTID": 19626,
    "BALANCE": 12980,
    "CDID": "39"
  },
  {
    "STARTDATE": 982945971159,
    "OFFICEID": "0070",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Low-cost account",
    "ANID": "1609792624",
    "INTERESRATE": 0.011000000000000001,
    "ACCOUNTID": 19627,
    "BALANCE": 6626,
    "CDID": "32"
  },
  {
    "STARTDATE": 1175229947418,
    "OFFICEID": "0103",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Low-cost account",
    "ANID": "9219409060",
    "INTERESRATE": 0.011000000000000001,
    "ACCOUNTID": 19628,
    "BALANCE": 12644,
    "CDID": "86"
  },
  {
    "STARTDATE": 1105507139121,
    "OFFICEID": "0102",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Savings account",
    "ANID": "0364507162",
    "INTERESRATE": 0.0325601,
    "ACCOUNTID": 19629,
    "BALANCE": 2031,
    "CDID": "61"
  },
  {
    "STARTDATE": 963999686545,
    "OFFICEID": "0002",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Savings account",
    "ANID": "1919405004",
    "INTERESRATE": 0.0325601,
    "ACCOUNTID": 19630,
    "BALANCE": 9846,
    "CDID": "68"
  },
  {
    "STARTDATE": 995994600370,
    "OFFICEID": "0000",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Negotiable Order of Withdrawal account",
    "ANID": "3141858187",
    "INTERESRATE": 0.0225,
    "ACCOUNTID": 19631,
    "BALANCE": 21531,
    "CDID": "47"
  },
  {
    "STARTDATE": 1096408035482,
    "OFFICEID": "0003",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Negotiable Order of Withdrawal account",
    "ANID": "4985800838",
    "INTERESRATE": 0.0225,
    "ACCOUNTID": 19632,
    "BALANCE": 7337,
    "CDID": "68"
  },
  {
    "STARTDATE": 951521205315,
    "OFFICEID": "0103",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Personal account",
    "ANID": "6052276283",
    "INTERESRATE": 0.0225005,
    "ACCOUNTID": 19633,
    "BALANCE": 12316,
    "CDID": "98"
  },
  {
    "STARTDATE": 1047328814425,
    "OFFICEID": "0004",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Personal account",
    "ANID": "9418619951",
    "INTERESRATE": 0.0225005,
    "ACCOUNTID": 19634,
    "BALANCE": 17893,
    "CDID": "54"
  },
  {
    "STARTDATE": 967446751313,
    "OFFICEID": "0101",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Savings account",
    "ANID": "1484647739",
    "INTERESRATE": 0.0225,
    "ACCOUNTID": 19635,
    "BALANCE": 28605,
    "CDID": "72"
  },
  {
    "STARTDATE": 1131806680674,
    "OFFICEID": "0004",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Savings account",
    "ANID": "1406348359",
    "INTERESRATE": 0.0225,
    "ACCOUNTID": 19636,
    "BALANCE": 27938,
    "CDID": "24"
  },
  {
    "STARTDATE": 1170149428176,
    "OFFICEID": "0101",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Savings account",
    "ANID": "0553724082",
    "INTERESRATE": 0.03421,
    "ACCOUNTID": 19637,
    "BALANCE": 13258,
    "CDID": "70"
  },
  {
    "STARTDATE": 960876392278,
    "OFFICEID": "0003",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Savings account",
    "ANID": "5456101212",
    "INTERESRATE": 0.03421,
    "ACCOUNTID": 19638,
    "BALANCE": 30524,
    "CDID": "67"
  },
  {
    "STARTDATE": 1001255025435,
    "OFFICEID": "0103",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Transaction deposit account",
    "ANID": "5677591967",
    "INTERESRATE": 0.0225,
    "ACCOUNTID": 19639,
    "BALANCE": 7869,
    "CDID": "15"
  },
  {
    "STARTDATE": 1204999252987,
    "OFFICEID": "0002",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Transaction deposit account",
    "ANID": "4247489358",
    "INTERESRATE": 0.0225,
    "ACCOUNTID": 19920,
    "BALANCE": 567,
    "CDID": "07"
  },
  {
    "STARTDATE": 1061154627926,
    "OFFICEID": "0102",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Low-cost account",
    "ANID": "3313229402",
    "INTERESRATE": 0.012350000000000002,
    "ACCOUNTID": 19921,
    "BALANCE": 9147,
    "CDID": "92"
  },
  {
    "STARTDATE": 1168179976868,
    "OFFICEID": "0003",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Low-cost account",
    "ANID": "5524444709",
    "INTERESRATE": 0.012350000000000002,
    "ACCOUNTID": 19922,
    "BALANCE": 19839,
    "CDID": "36"
  },
  {
    "STARTDATE": 1218258313025,
    "OFFICEID": "0102",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Personal account",
    "ANID": "5860431398",
    "INTERESRATE": 0.01234,
    "ACCOUNTID": 19923,
    "BALANCE": 30994,
    "CDID": "71"
  },
  {
    "STARTDATE": 1228326708019,
    "OFFICEID": "0000",
    "ENTITYID": "2095",
    "ACCOUNTTYP": "Personal account",
    "ANID": "6642910070",
    "INTERESRATE": 0.01234,
    "ACCOUNTID": 19924,
    "BALANCE": 15572,
    "CDID": "07"
  },
  {
    "CDID": "41",
    "BALANCE": 8539,
    "ACCOUNTID": 19925,
    "OFFICEID": "0070",
    "ENTITYID": "2095",
    "ANID": "1535474400",
    "STARTDATE": 1186182782088
  },
  {
    "CDID": "86",
    "BALANCE": 10469,
    "ACCOUNTID": 19926,
    "OFFICEID": "0003",
    "ENTITYID": "2095",
    "ANID": "8769929713",
    "STARTDATE": 1083112999944
  },
  {
    "CDID": "81",
    "BALANCE": 8521,
    "ACCOUNTID": 19927,
    "OFFICEID": "0102",
    "ENTITYID": "2095",
    "ANID": "4750522587",
    "STARTDATE": 1157762864354
  },
  {
    "CDID": "74",
    "BALANCE": 24237,
    "ACCOUNTID": 19928,
    "OFFICEID": "0103",
    "ENTITYID": "2095",
    "ANID": "4472677340",
    "STARTDATE": 1144707652816
  },
  {
    "CDID": "41",
    "BALANCE": 804,
    "ACCOUNTID": 19929,
    "OFFICEID": "0003",
    "ENTITYID": "2095",
    "ANID": "4023149711",
    "STARTDATE": 1053983453089
  },
  {
    "CDID": "61",
    "BALANCE": 22796,
    "ACCOUNTID": 19930,
    "OFFICEID": "0002",
    "ENTITYID": "2095",
    "ANID": "2615755060",
    "STARTDATE": 1142685848073
  },
  {
    "CDID": "61",
    "BALANCE": 15414,
    "ACCOUNTID": 19931,
    "OFFICEID": "0000",
    "ENTITYID": "2095",
    "ANID": "1102863800",
    "STARTDATE": 1119154811892
  },
  {
    "CDID": "14",
    "BALANCE": 4327,
    "ACCOUNTID": 19932,
    "OFFICEID": "0003",
    "ENTITYID": "2095",
    "ANID": "4586421586",
    "STARTDATE": 1053993012091
  },
  {
    "CDID": "34",
    "BALANCE": 37822,
    "ACCOUNTID": 19933,
    "OFFICEID": "0000",
    "ENTITYID": "2095",
    "ANID": "7841261591",
    "STARTDATE": 989096054219
  },
  {
    "CDID": "85",
    "BALANCE": 18817,
    "ACCOUNTID": 19934,
    "OFFICEID": "0103",
    "ENTITYID": "2095",
    "ANID": "5091166326",
    "STARTDATE": 1118262805336
  },
  {
    "CDID": "65",
    "BALANCE": 32159,
    "ACCOUNTID": 19935,
    "OFFICEID": "0070",
    "ENTITYID": "2095",
    "ANID": "4787729648",
    "STARTDATE": 1193707515960
  },
  {
    "CDID": "13",
    "BALANCE": 14918,
    "ACCOUNTID": 19936,
    "OFFICEID": "0000",
    "ENTITYID": "2095",
    "ANID": "6699755900",
    "STARTDATE": 1145305274678
  },
  {
    "CDID": "09",
    "BALANCE": 10964,
    "ACCOUNTID": 19937,
    "OFFICEID": "0004",
    "ENTITYID": "2095",
    "ANID": "7083034826",
    "STARTDATE": 1018875746998
  },
  {
    "CDID": "98",
    "BALANCE": 25589,
    "ACCOUNTID": 19938,
    "OFFICEID": "0002",
    "ENTITYID": "2095",
    "ANID": "3732870743",
    "STARTDATE": 1044124510917
  },
  {
    "CDID": "45",
    "BALANCE": 23003,
    "ACCOUNTID": 19939,
    "OFFICEID": "0101",
    "ENTITYID": "2095",
    "ANID": "8909483244",
    "STARTDATE": 1119047871875
  },
  {
    "CDID": "23",
    "BALANCE": 8696,
    "ACCOUNTID": 19940,
    "OFFICEID": "0004",
    "ENTITYID": "2095",
    "ANID": "3383112904",
    "STARTDATE": 1195445330620
  },
  {
    "CDID": "15",
    "BALANCE": 46563,
    "ACCOUNTID": 19941,
    "OFFICEID": "0070",
    "ENTITYID": "2095",
    "ANID": "8732069486",
    "STARTDATE": 995039136179
  },
  {
    "CDID": "32",
    "BALANCE": 4860,
    "ACCOUNTID": 19942,
    "OFFICEID": "0070",
    "ENTITYID": "2095",
    "ANID": "5886003173",
    "STARTDATE": 1211448451692
  },
  {
    "CDID": "32",
    "BALANCE": 8780,
    "ACCOUNTID": 19943,
    "OFFICEID": "0002",
    "ENTITYID": "2095",
    "ANID": "7337830535",
    "STARTDATE": 973008477007
  },
  {
    "CDID": "97",
    "BALANCE": 19433,
    "ACCOUNTID": 19944,
    "OFFICEID": "0103",
    "ENTITYID": "2095",
    "ANID": "1888414239",
    "STARTDATE": 1222949606122
  },
  {
    "CDID": "21",
    "BALANCE": 25677,
    "ACCOUNTID": 19945,
    "OFFICEID": "0003",
    "ENTITYID": "2095",
    "ANID": "4544747521",
    "STARTDATE": 1011253341841
  },
  {
    "CDID": "60",
    "BALANCE": 13795,
    "ACCOUNTID": 19946,
    "OFFICEID": "0070",
    "ENTITYID": "2095",
    "ANID": "7033829217",
    "STARTDATE": 1197482696146
  },
  {
    "CDID": "27",
    "BALANCE": 41265,
    "ACCOUNTID": 19947,
    "OFFICEID": "0070",
    "ENTITYID": "2095",
    "ANID": "4085559883",
    "STARTDATE": 998877022829
  },
  {
    "CDID": "80",
    "BALANCE": 14060,
    "ACCOUNTID": 19948,
    "OFFICEID": "0002",
    "ENTITYID": "2095",
    "ANID": "1811598418",
    "STARTDATE": 1224146481614
  },
  {
    "CDID": "97",
    "BALANCE": 8989,
    "ACCOUNTID": 19949,
    "OFFICEID": "0101",
    "ENTITYID": "2095",
    "ANID": "1787451731",
    "STARTDATE": 1071221100879
  },
  {
    "CDID": "92",
    "BALANCE": 25742,
    "ACCOUNTID": 19950,
    "OFFICEID": "0101",
    "ENTITYID": "2095",
    "ANID": "7015032165",
    "STARTDATE": 986115961784
  },
  {
    "CDID": "37",
    "BALANCE": 11913,
    "ACCOUNTID": 19951,
    "OFFICEID": "0103",
    "ENTITYID": "2095",
    "ANID": "2001230170",
    "STARTDATE": 1171872946794
  },
  {
    "CDID": "02",
    "BALANCE": 8181,
    "ACCOUNTID": 19952,
    "ENDDATE": 1304978400000,
    "OFFICEID": "0004",
    "ENTITYID": "2095",
    "ANID": "0000000000",
    "STARTDATE": 1144810892183
  },
  {
    "CDID": "34",
    "BALANCE": 24781,
    "ACCOUNTID": 19953,
    "OFFICEID": "0003",
    "ENTITYID": "2095",
    "ANID": "5421513666",
    "STARTDATE": 1017079176533
  },
  {
    "CDID": "18",
    "BALANCE": 4677,
    "ACCOUNTID": 19954,
    "OFFICEID": "0004",
    "ENTITYID": "2095",
    "ANID": "7885690283",
    "STARTDATE": 1033593153732
  },
  {
    "CDID": "21",
    "BALANCE": 10536,
    "ACCOUNTID": 19955,
    "OFFICEID": "0103",
    "ENTITYID": "2095",
    "ANID": "7915330865",
    "STARTDATE": 1046515838204
  },
  {
    "CDID": "89",
    "BALANCE": 10321,
    "ACCOUNTID": 19956,
    "OFFICEID": "0002",
    "ENTITYID": "2095",
    "ANID": "0859987448",
    "STARTDATE": 1117416412456
  },
  {
    "CDID": "61",
    "BALANCE": 27164,
    "ACCOUNTID": 19957,
    "OFFICEID": "0000",
    "ENTITYID": "2095",
    "ANID": "1944423538",
    "STARTDATE": 1011568821002
  },
  {
    "CDID": "56",
    "BALANCE": 34828,
    "ACCOUNTID": 19958,
    "OFFICEID": "0004",
    "ENTITYID": "2095",
    "ANID": "2831532184",
    "STARTDATE": 1119795320751
  },
  {
    "CDID": "02",
    "BALANCE": 20206,
    "ACCOUNTID": 19959,
    "OFFICEID": "0102",
    "ENTITYID": "2095",
    "ANID": "4605329055",
    "STARTDATE": 1191408453711
  },
  {
    "CDID": "53",
    "BALANCE": 1961,
    "ACCOUNTID": 19960,
    "OFFICEID": "0002",
    "ENTITYID": "2095",
    "ANID": "2124973004",
    "STARTDATE": 1021675841200
  },
  {
    "CDID": "62",
    "BALANCE": 4607,
    "ACCOUNTID": 19961,
    "OFFICEID": "0004",
    "ENTITYID": "2095",
    "ANID": "4209128511",
    "STARTDATE": 1042566969595
  },
  {
    "CDID": "17",
    "BALANCE": 8113,
    "ACCOUNTID": 19962,
    "OFFICEID": "0070",
    "ENTITYID": "2095",
    "ANID": "7096256655",
    "STARTDATE": 976306796143
  },
  {
    "CDID": "57",
    "BALANCE": 33819,
    "ACCOUNTID": 19963,
    "OFFICEID": "0003",
    "ENTITYID": "2095",
    "ANID": "9497214042",
    "STARTDATE": 953182060322
  },
  {
    "CDID": "07",
    "BALANCE": 24673,
    "ACCOUNTID": 19964,
    "OFFICEID": "0004",
    "ENTITYID": "2095",
    "ANID": "3550721268",
    "STARTDATE": 1074083858694
  },
  {
    "CDID": "98",
    "BALANCE": 862.37,
    "ACCOUNTID": 19976,
    "ENDDATE": 1679820000000,
    "OFFICEID": "1471",
    "ENTITYID": "2095",
    "ANID": "1000019976",
    "STARTDATE": 1480066800000
  }
]
`;

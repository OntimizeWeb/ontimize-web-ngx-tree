import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OTranslateService, SnackBarService, OSnackBarConfig } from 'ontimize-web-ngx';

const TREE_HTML_DATA = `
<o-tree #treeview fxFlex root-title="CUSTOMERS" service-type="DummyService"
  service="customers" entity="customer" keys="CUSTOMERID" columns="CUSTOMERID;SURNAME;NAME"
  description-columns="SURNAME;NAME" separator=", " query-on-init="true"
  quick-filter="true" quick-filter-columns="SURNAME;NAME">

  <o-tree-node root-title="ACCOUNTS" show-root="no" service-type="DummyService"
    service="customers" entity="customerAccount" quick-filter-columns="ACCOUNT"
    columns="ACCOUNTID;CUSTOMERID;ACCOUNT" description-columns="ACCOUNT" keys="ACCOUNTID"
    parent-keys="CUSTOMERID">

    <o-tree-node root-title="ACCOUNT_CONCEPTS" show-root="no" service-type="DummyService"
      service="branches" entity="accountConcepts" columns="CONCEPT;ACCOUNTID"
      quick-filter-columns="CONCEPT" description-columns="CONCEPT" keys="CONCEPT;ACCOUNTID"
      parent-keys="ACCOUNTID">
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
    },
    files: [{
      label: 'customers',
      type: 'typescript',
      data: CUSTOMERS_DATA
    }, {
      label: 'accounts',
      type: 'typescript',
      data: ACCOUNTS_DATA
    }, {
      label: 'concepts',
      type: 'typescript',
      data: CONCEPTS_DATA
    }, {
      label: 'movement types',
      type: 'typescript',
      data: MOVEMENTTYPES_DATA
    }]
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

const CONCEPTS_DATA = `
[
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 1
  },
  {
    "CONCEPT": "Sight account",
    "ACCOUNTID": 1
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 1
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 2
  },
  {
    "CONCEPT": "Bill",
    "ACCOUNTID": 2
  },
  {
    "CONCEPT": "Aqualia",
    "ACCOUNTID": 2
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 2
  },
  {
    "CONCEPT": "Budget",
    "ACCOUNTID": 2
  },
  {
    "CONCEPT": "Inital transfer",
    "ACCOUNTID": 3
  },
  {
    "CONCEPT": "Open account",
    "ACCOUNTID": 5
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 6
  },
  {
    "CONCEPT": "Aqualia June",
    "ACCOUNTID": 6
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 6
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 6
  },
  {
    "CONCEPT": "Academy",
    "ACCOUNTID": 6
  },
  {
    "CONCEPT": "Unknow",
    "ACCOUNTID": 6
  },
  {
    "CONCEPT": "Purchase",
    "ACCOUNTID": 6
  },
  {
    "CONCEPT": "open",
    "ACCOUNTID": 7
  },
  {
    "CONCEPT": "September salary",
    "ACCOUNTID": 7
  },
  {
    "CONCEPT": "Renting",
    "ACCOUNTID": 8
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 8
  },
  {
    "CONCEPT": "Sight account",
    "ACCOUNTID": 8
  },
  {
    "CONCEPT": "Renting",
    "ACCOUNTID": 9
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 9
  },
  {
    "CONCEPT": "Aqualia Inc.",
    "ACCOUNTID": 9
  },
  {
    "CONCEPT": "Sight account",
    "ACCOUNTID": 10
  },
  {
    "CONCEPT": "Renting December",
    "ACCOUNTID": 10
  },
  {
    "CONCEPT": "Bill",
    "ACCOUNTID": 10
  },
  {
    "CONCEPT": "Renting May",
    "ACCOUNTID": 11
  },
  {
    "CONCEPT": "Bill",
    "ACCOUNTID": 11
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 11
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 11
  },
  {
    "CONCEPT": "Budget",
    "ACCOUNTID": 11
  },
  {
    "CONCEPT": "Renting July",
    "ACCOUNTID": 11
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 27
  },
  {
    "CONCEPT": "Renting",
    "ACCOUNTID": 27
  },
  {
    "CONCEPT": "Sight account",
    "ACCOUNTID": 27
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 27
  },
  {
    "CONCEPT": "Purchase",
    "ACCOUNTID": 27
  },
  {
    "CONCEPT": "Academy",
    "ACCOUNTID": 36
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 36
  },
  {
    "CONCEPT": "Sight account",
    "ACCOUNTID": 36
  },
  {
    "CONCEPT": "Budget",
    "ACCOUNTID": 41
  },
  {
    "CONCEPT": "Purchase",
    "ACCOUNTID": 7040
  },
  {
    "CONCEPT": "Sight account",
    "ACCOUNTID": 7041
  },
  {
    "CONCEPT": "Bill",
    "ACCOUNTID": 7041
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 7090
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 7090
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 7090
  },
  {
    "CONCEPT": "Renting",
    "ACCOUNTID": 7090
  },
  {
    "CONCEPT": "Bill",
    "ACCOUNTID": 7090
  },
  {
    "CONCEPT": "Sight account",
    "ACCOUNTID": 7090
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 7090
  },
  {
    "CONCEPT": "Unknow",
    "ACCOUNTID": 7090
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 7091
  },
  {
    "CONCEPT": "Unknow",
    "ACCOUNTID": 7091
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 7091
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 7091
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 7091
  },
  {
    "CONCEPT": "Renting",
    "ACCOUNTID": 7091
  },
  {
    "CONCEPT": "Sight account",
    "ACCOUNTID": 7091
  },
  {
    "CONCEPT": "Unknow",
    "ACCOUNTID": 7123
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 7123
  },
  {
    "CONCEPT": "Purchase",
    "ACCOUNTID": 7123
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 7123
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 7123
  },
  {
    "CONCEPT": "Budget",
    "ACCOUNTID": 7123
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 7124
  },
  {
    "CONCEPT": "Sight account",
    "ACCOUNTID": 7124
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 7124
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 7124
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 7124
  },
  {
    "CONCEPT": "Renting",
    "ACCOUNTID": 7124
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 7125
  },
  {
    "CONCEPT": "Unknow",
    "ACCOUNTID": 7125
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 7125
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 7125
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 7125
  },
  {
    "CONCEPT": "Purchase",
    "ACCOUNTID": 7126
  },
  {
    "CONCEPT": "Maintance",
    "ACCOUNTID": 7126
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 7126
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 7126
  },
  {
    "CONCEPT": "Bill",
    "ACCOUNTID": 7126
  },
  {
    "CONCEPT": "Renting",
    "ACCOUNTID": 7126
  },
  {
    "CONCEPT": "Budget",
    "ACCOUNTID": 7126
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 7223
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 7223
  },
  {
    "CONCEPT": "Bill",
    "ACCOUNTID": 7223
  },
  {
    "CONCEPT": "Unknow",
    "ACCOUNTID": 7223
  },
  {
    "CONCEPT": "Purchase",
    "ACCOUNTID": 7223
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 7223
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 7223
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 7224
  },
  {
    "CONCEPT": "Budget",
    "ACCOUNTID": 7224
  },
  {
    "CONCEPT": "Purchase",
    "ACCOUNTID": 7224
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 7224
  },
  {
    "CONCEPT": "Bill",
    "ACCOUNTID": 7224
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 7224
  },
  {
    "CONCEPT": "Renting",
    "ACCOUNTID": 7224
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 7225
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 7225
  },
  {
    "CONCEPT": "Renting",
    "ACCOUNTID": 7225
  },
  {
    "CONCEPT": "Purchase",
    "ACCOUNTID": 7225
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 7225
  },
  {
    "CONCEPT": "Sight account",
    "ACCOUNTID": 7225
  },
  {
    "CONCEPT": "Budget",
    "ACCOUNTID": 7225
  },
  {
    "CONCEPT": "Unknow",
    "ACCOUNTID": 7226
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 7226
  },
  {
    "CONCEPT": "Sight account",
    "ACCOUNTID": 7226
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 7226
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 7226
  },
  {
    "CONCEPT": "Bill",
    "ACCOUNTID": 7226
  },
  {
    "CONCEPT": "Purchase",
    "ACCOUNTID": 7226
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 7226
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 7296
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 7296
  },
  {
    "CONCEPT": "Sight account",
    "ACCOUNTID": 7296
  },
  {
    "CONCEPT": "Renting",
    "ACCOUNTID": 7296
  },
  {
    "CONCEPT": "Purchase",
    "ACCOUNTID": 7296
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 7297
  },
  {
    "CONCEPT": "Renting",
    "ACCOUNTID": 7297
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 7297
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 7297
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 7297
  },
  {
    "CONCEPT": "Purchase",
    "ACCOUNTID": 7297
  },
  {
    "CONCEPT": "Budget",
    "ACCOUNTID": 7297
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 7298
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 7298
  },
  {
    "CONCEPT": "Bill",
    "ACCOUNTID": 7298
  },
  {
    "CONCEPT": "Renting",
    "ACCOUNTID": 7298
  },
  {
    "CONCEPT": "Budget",
    "ACCOUNTID": 7298
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 7298
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 7298
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 7299
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 7299
  },
  {
    "CONCEPT": "Bill",
    "ACCOUNTID": 7299
  },
  {
    "CONCEPT": "Purchase",
    "ACCOUNTID": 7299
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 7299
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 7299
  },
  {
    "CONCEPT": "Sight account",
    "ACCOUNTID": 7299
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 7300
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 7300
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 7300
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 7300
  },
  {
    "CONCEPT": "Purchase",
    "ACCOUNTID": 7301
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 7301
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 7301
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 7301
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 7301
  },
  {
    "CONCEPT": "Renting",
    "ACCOUNTID": 7301
  },
  {
    "CONCEPT": "Unknow",
    "ACCOUNTID": 7302
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 7302
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 7302
  },
  {
    "CONCEPT": "Renting",
    "ACCOUNTID": 7302
  },
  {
    "CONCEPT": "Bill",
    "ACCOUNTID": 7302
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 7303
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 7303
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 7303
  },
  {
    "CONCEPT": "Purchase",
    "ACCOUNTID": 7303
  },
  {
    "CONCEPT": "Bill",
    "ACCOUNTID": 7303
  },
  {
    "CONCEPT": "Unknow",
    "ACCOUNTID": 7303
  },
  {
    "CONCEPT": "Renting",
    "ACCOUNTID": 7304
  },
  {
    "CONCEPT": "Purchase",
    "ACCOUNTID": 7304
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 7304
  },
  {
    "CONCEPT": "Unknow",
    "ACCOUNTID": 7304
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 7304
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 7304
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 7305
  },
  {
    "CONCEPT": "Purchase",
    "ACCOUNTID": 7305
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 7305
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 7305
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 7305
  },
  {
    "CONCEPT": "Sight account",
    "ACCOUNTID": 7305
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 7306
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 7306
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 7306
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 7306
  },
  {
    "CONCEPT": "Renting",
    "ACCOUNTID": 7306
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 7307
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 7307
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 7307
  },
  {
    "CONCEPT": "Bill",
    "ACCOUNTID": 7307
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 7308
  },
  {
    "CONCEPT": "Sight account",
    "ACCOUNTID": 7308
  },
  {
    "CONCEPT": "Unknow",
    "ACCOUNTID": 7308
  },
  {
    "CONCEPT": "Budget",
    "ACCOUNTID": 7308
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 7309
  },
  {
    "CONCEPT": "Bill",
    "ACCOUNTID": 7309
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 7309
  },
  {
    "CONCEPT": "Renting",
    "ACCOUNTID": 7309
  },
  {
    "CONCEPT": "Unknow",
    "ACCOUNTID": 7309
  },
  {
    "CONCEPT": "Budget",
    "ACCOUNTID": 7309
  },
  {
    "CONCEPT": "Sight account",
    "ACCOUNTID": 7309
  },
  {
    "CONCEPT": "Unknow",
    "ACCOUNTID": 7310
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 7310
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 7310
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 7310
  },
  {
    "CONCEPT": "Renting",
    "ACCOUNTID": 7310
  },
  {
    "CONCEPT": "Budget",
    "ACCOUNTID": 7310
  },
  {
    "CONCEPT": "Bill",
    "ACCOUNTID": 19370
  },
  {
    "CONCEPT": "Sight account",
    "ACCOUNTID": 19370
  },
  {
    "CONCEPT": "Renting",
    "ACCOUNTID": 19370
  },
  {
    "CONCEPT": "Unknow",
    "ACCOUNTID": 19370
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19370
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 19370
  },
  {
    "CONCEPT": "Budget",
    "ACCOUNTID": 19370
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19371
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19371
  },
  {
    "CONCEPT": "Purchase",
    "ACCOUNTID": 19371
  },
  {
    "CONCEPT": "Bill",
    "ACCOUNTID": 19371
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19371
  },
  {
    "CONCEPT": "Budget",
    "ACCOUNTID": 19371
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19372
  },
  {
    "CONCEPT": "Unknow",
    "ACCOUNTID": 19372
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19372
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19372
  },
  {
    "CONCEPT": "Purchase",
    "ACCOUNTID": 19372
  },
  {
    "CONCEPT": "Renting",
    "ACCOUNTID": 19373
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19373
  },
  {
    "CONCEPT": "Sight account",
    "ACCOUNTID": 19373
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19373
  },
  {
    "CONCEPT": "Budget",
    "ACCOUNTID": 19373
  },
  {
    "CONCEPT": "Purchase",
    "ACCOUNTID": 19374
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19374
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19374
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19374
  },
  {
    "CONCEPT": "Renting",
    "ACCOUNTID": 19374
  },
  {
    "CONCEPT": "Budget",
    "ACCOUNTID": 19374
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19375
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19375
  },
  {
    "CONCEPT": "Budget",
    "ACCOUNTID": 19375
  },
  {
    "CONCEPT": "Bill",
    "ACCOUNTID": 19375
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 19375
  },
  {
    "CONCEPT": "Unknow",
    "ACCOUNTID": 19375
  },
  {
    "CONCEPT": "Renting",
    "ACCOUNTID": 19375
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19376
  },
  {
    "CONCEPT": "Renting",
    "ACCOUNTID": 19376
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19376
  },
  {
    "CONCEPT": "Purchase",
    "ACCOUNTID": 19376
  },
  {
    "CONCEPT": "Bill",
    "ACCOUNTID": 19376
  },
  {
    "CONCEPT": "Sight account",
    "ACCOUNTID": 19376
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19376
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 19376
  },
  {
    "CONCEPT": "Budget",
    "ACCOUNTID": 19376
  },
  {
    "CONCEPT": "Renting",
    "ACCOUNTID": 19377
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19377
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19377
  },
  {
    "CONCEPT": "Purchase",
    "ACCOUNTID": 19377
  },
  {
    "CONCEPT": "Unknow",
    "ACCOUNTID": 19377
  },
  {
    "CONCEPT": "Budget",
    "ACCOUNTID": 19377
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 19377
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19377
  },
  {
    "CONCEPT": "Bill",
    "ACCOUNTID": 19377
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19378
  },
  {
    "CONCEPT": "Purchase",
    "ACCOUNTID": 19378
  },
  {
    "CONCEPT": "Unknow",
    "ACCOUNTID": 19378
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19378
  },
  {
    "CONCEPT": "Renting",
    "ACCOUNTID": 19378
  },
  {
    "CONCEPT": "Bill",
    "ACCOUNTID": 19378
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19378
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 19378
  },
  {
    "CONCEPT": "Budget",
    "ACCOUNTID": 19379
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19379
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 19379
  },
  {
    "CONCEPT": "Sight account",
    "ACCOUNTID": 19379
  },
  {
    "CONCEPT": "Renting",
    "ACCOUNTID": 19379
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19380
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19380
  },
  {
    "CONCEPT": "Bill",
    "ACCOUNTID": 19380
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 19380
  },
  {
    "CONCEPT": "Purchase",
    "ACCOUNTID": 19380
  },
  {
    "CONCEPT": "Taxes ",
    "ACCOUNTID": 19380
  },
  {
    "CONCEPT": "Sight account",
    "ACCOUNTID": 19380
  },
  {
    "CONCEPT": "Budget",
    "ACCOUNTID": 19380
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19381
  },
  {
    "CONCEPT": "Renting",
    "ACCOUNTID": 19381
  },
  {
    "CONCEPT": "Bill",
    "ACCOUNTID": 19381
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19381
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19381
  },
  {
    "CONCEPT": "Sight account",
    "ACCOUNTID": 19382
  },
  {
    "CONCEPT": "Purchase",
    "ACCOUNTID": 19382
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19382
  },
  {
    "CONCEPT": "Unknow",
    "ACCOUNTID": 19382
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19382
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19382
  },
  {
    "CONCEPT": "Budget",
    "ACCOUNTID": 19382
  },
  {
    "CONCEPT": "Bill",
    "ACCOUNTID": 19382
  },
  {
    "CONCEPT": "Sight account",
    "ACCOUNTID": 19383
  },
  {
    "CONCEPT": "Renting",
    "ACCOUNTID": 19383
  },
  {
    "CONCEPT": "Bill",
    "ACCOUNTID": 19383
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19383
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19383
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19383
  },
  {
    "CONCEPT": "Unknow",
    "ACCOUNTID": 19384
  },
  {
    "CONCEPT": "Bill",
    "ACCOUNTID": 19384
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19384
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19384
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19384
  },
  {
    "CONCEPT": "Bill",
    "ACCOUNTID": 19620
  },
  {
    "CONCEPT": "Unknow",
    "ACCOUNTID": 19620
  },
  {
    "CONCEPT": "Purchase",
    "ACCOUNTID": 19620
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19620
  },
  {
    "CONCEPT": "Sight account",
    "ACCOUNTID": 19620
  },
  {
    "CONCEPT": "Bill",
    "ACCOUNTID": 19621
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19621
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19621
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 19621
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19621
  },
  {
    "CONCEPT": "Renting",
    "ACCOUNTID": 19622
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19622
  },
  {
    "CONCEPT": "Bill",
    "ACCOUNTID": 19622
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 19622
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19622
  },
  {
    "CONCEPT": "Purchase",
    "ACCOUNTID": 19623
  },
  {
    "CONCEPT": "Budget",
    "ACCOUNTID": 19623
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19623
  },
  {
    "CONCEPT": "Bill",
    "ACCOUNTID": 19623
  },
  {
    "CONCEPT": "Sight account",
    "ACCOUNTID": 19624
  },
  {
    "CONCEPT": "Budget",
    "ACCOUNTID": 19624
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19624
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19624
  },
  {
    "CONCEPT": "Renting",
    "ACCOUNTID": 19624
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19624
  },
  {
    "CONCEPT": "Sight account",
    "ACCOUNTID": 19625
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19625
  },
  {
    "CONCEPT": "Unknow",
    "ACCOUNTID": 19625
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 19625
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19625
  },
  {
    "CONCEPT": "Purchase",
    "ACCOUNTID": 19625
  },
  {
    "CONCEPT": "Sight account",
    "ACCOUNTID": 19626
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19626
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19626
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 19626
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19626
  },
  {
    "CONCEPT": "Renting",
    "ACCOUNTID": 19626
  },
  {
    "CONCEPT": "Renting",
    "ACCOUNTID": 19627
  },
  {
    "CONCEPT": "Sight account",
    "ACCOUNTID": 19627
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19627
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19627
  },
  {
    "CONCEPT": "Unknow",
    "ACCOUNTID": 19627
  },
  {
    "CONCEPT": "Bill",
    "ACCOUNTID": 19627
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19627
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 19627
  },
  {
    "CONCEPT": "Purchase",
    "ACCOUNTID": 19627
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19628
  },
  {
    "CONCEPT": "Sight account",
    "ACCOUNTID": 19628
  },
  {
    "CONCEPT": "Unknow",
    "ACCOUNTID": 19628
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19628
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 19628
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19628
  },
  {
    "CONCEPT": "Bill",
    "ACCOUNTID": 19628
  },
  {
    "CONCEPT": "Budget",
    "ACCOUNTID": 19628
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19629
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19629
  },
  {
    "CONCEPT": "Unknow",
    "ACCOUNTID": 19629
  },
  {
    "CONCEPT": "Purchase",
    "ACCOUNTID": 19629
  },
  {
    "CONCEPT": "Sight account",
    "ACCOUNTID": 19630
  },
  {
    "CONCEPT": "Unknow",
    "ACCOUNTID": 19630
  },
  {
    "CONCEPT": "Purchase",
    "ACCOUNTID": 19630
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19630
  },
  {
    "CONCEPT": "Budget",
    "ACCOUNTID": 19630
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19630
  },
  {
    "CONCEPT": "Renting",
    "ACCOUNTID": 19630
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19630
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19631
  },
  {
    "CONCEPT": "Purchase",
    "ACCOUNTID": 19631
  },
  {
    "CONCEPT": "Renting",
    "ACCOUNTID": 19631
  },
  {
    "CONCEPT": "Budget",
    "ACCOUNTID": 19631
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19631
  },
  {
    "CONCEPT": "Bill",
    "ACCOUNTID": 19631
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 19631
  },
  {
    "CONCEPT": "Sight account",
    "ACCOUNTID": 19631
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19632
  },
  {
    "CONCEPT": "Renting",
    "ACCOUNTID": 19632
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19632
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19632
  },
  {
    "CONCEPT": "Bill",
    "ACCOUNTID": 19632
  },
  {
    "CONCEPT": "Sight account",
    "ACCOUNTID": 19632
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 19632
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19633
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19633
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19633
  },
  {
    "CONCEPT": "Purchase",
    "ACCOUNTID": 19633
  },
  {
    "CONCEPT": "Renting",
    "ACCOUNTID": 19633
  },
  {
    "CONCEPT": "Unknow",
    "ACCOUNTID": 19633
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19634
  },
  {
    "CONCEPT": "Sight account",
    "ACCOUNTID": 19634
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19634
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 19634
  },
  {
    "CONCEPT": "Purchase",
    "ACCOUNTID": 19634
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19634
  },
  {
    "CONCEPT": "Bill",
    "ACCOUNTID": 19634
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 19635
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19635
  },
  {
    "CONCEPT": "Budget",
    "ACCOUNTID": 19635
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19635
  },
  {
    "CONCEPT": "Renting",
    "ACCOUNTID": 19635
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19635
  },
  {
    "CONCEPT": "Bill",
    "ACCOUNTID": 19635
  },
  {
    "CONCEPT": "Sight account",
    "ACCOUNTID": 19636
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19636
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19636
  },
  {
    "CONCEPT": "Budget",
    "ACCOUNTID": 19636
  },
  {
    "CONCEPT": "Bill",
    "ACCOUNTID": 19636
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19636
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19637
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19637
  },
  {
    "CONCEPT": "Renting",
    "ACCOUNTID": 19637
  },
  {
    "CONCEPT": "Sight account",
    "ACCOUNTID": 19637
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19637
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19638
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19638
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19638
  },
  {
    "CONCEPT": "Sight account",
    "ACCOUNTID": 19638
  },
  {
    "CONCEPT": "Bill",
    "ACCOUNTID": 19638
  },
  {
    "CONCEPT": "Budget",
    "ACCOUNTID": 19638
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 19638
  },
  {
    "CONCEPT": "Budget",
    "ACCOUNTID": 19639
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 19639
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19639
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19639
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19639
  },
  {
    "CONCEPT": "Bill",
    "ACCOUNTID": 19639
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 19920
  },
  {
    "CONCEPT": "Sight account",
    "ACCOUNTID": 19920
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19920
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19920
  },
  {
    "CONCEPT": "Bill",
    "ACCOUNTID": 19920
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19921
  },
  {
    "CONCEPT": "Bill",
    "ACCOUNTID": 19921
  },
  {
    "CONCEPT": "Renting",
    "ACCOUNTID": 19921
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19921
  },
  {
    "CONCEPT": "Budget",
    "ACCOUNTID": 19921
  },
  {
    "CONCEPT": "Unknow",
    "ACCOUNTID": 19921
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19922
  },
  {
    "CONCEPT": "Unknow",
    "ACCOUNTID": 19922
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 19922
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19922
  },
  {
    "CONCEPT": "Purchase",
    "ACCOUNTID": 19922
  },
  {
    "CONCEPT": "Renting",
    "ACCOUNTID": 19922
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19922
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19923
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19923
  },
  {
    "CONCEPT": "Bill",
    "ACCOUNTID": 19923
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19923
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19924
  },
  {
    "CONCEPT": "Purchase",
    "ACCOUNTID": 19924
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19924
  },
  {
    "CONCEPT": "Renting",
    "ACCOUNTID": 19924
  },
  {
    "CONCEPT": "Sight account",
    "ACCOUNTID": 19925
  },
  {
    "CONCEPT": "Purchase",
    "ACCOUNTID": 19925
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19925
  },
  {
    "CONCEPT": "Budget",
    "ACCOUNTID": 19925
  },
  {
    "CONCEPT": "Renting",
    "ACCOUNTID": 19925
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19925
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19925
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 19925
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19926
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19926
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 19926
  },
  {
    "CONCEPT": "Unknow",
    "ACCOUNTID": 19926
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19926
  },
  {
    "CONCEPT": "Budget",
    "ACCOUNTID": 19926
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19927
  },
  {
    "CONCEPT": "Unknow",
    "ACCOUNTID": 19927
  },
  {
    "CONCEPT": "Budget",
    "ACCOUNTID": 19927
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19927
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19927
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 19927
  },
  {
    "CONCEPT": "Renting",
    "ACCOUNTID": 19928
  },
  {
    "CONCEPT": "Budget",
    "ACCOUNTID": 19928
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19928
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 19928
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19928
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19928
  },
  {
    "CONCEPT": "Unknow",
    "ACCOUNTID": 19928
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19929
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19929
  },
  {
    "CONCEPT": "Purchase",
    "ACCOUNTID": 19929
  },
  {
    "CONCEPT": "Renting",
    "ACCOUNTID": 19930
  },
  {
    "CONCEPT": "Bill",
    "ACCOUNTID": 19930
  },
  {
    "CONCEPT": "Unknow",
    "ACCOUNTID": 19930
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19930
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19930
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 19930
  },
  {
    "CONCEPT": "Budget",
    "ACCOUNTID": 19930
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19930
  },
  {
    "CONCEPT": "Sight account",
    "ACCOUNTID": 19930
  },
  {
    "CONCEPT": "Renting",
    "ACCOUNTID": 19931
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19931
  },
  {
    "CONCEPT": "Budget",
    "ACCOUNTID": 19931
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 19931
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19931
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19931
  },
  {
    "CONCEPT": "Unknow",
    "ACCOUNTID": 19931
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19932
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19932
  },
  {
    "CONCEPT": "Bill",
    "ACCOUNTID": 19932
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19932
  },
  {
    "CONCEPT": "Budget",
    "ACCOUNTID": 19933
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19933
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19933
  },
  {
    "CONCEPT": "Unknow",
    "ACCOUNTID": 19933
  },
  {
    "CONCEPT": "Renting",
    "ACCOUNTID": 19933
  },
  {
    "CONCEPT": "Bill",
    "ACCOUNTID": 19933
  },
  {
    "CONCEPT": "Sight account",
    "ACCOUNTID": 19933
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19934
  },
  {
    "CONCEPT": "Unknow",
    "ACCOUNTID": 19934
  },
  {
    "CONCEPT": "Budget",
    "ACCOUNTID": 19934
  },
  {
    "CONCEPT": "Sight account",
    "ACCOUNTID": 19934
  },
  {
    "CONCEPT": "Renting",
    "ACCOUNTID": 19934
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19934
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19934
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19935
  },
  {
    "CONCEPT": "Renting",
    "ACCOUNTID": 19935
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19935
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19935
  },
  {
    "CONCEPT": "Budget",
    "ACCOUNTID": 19935
  },
  {
    "CONCEPT": "Purchase",
    "ACCOUNTID": 19935
  },
  {
    "CONCEPT": "Unknow",
    "ACCOUNTID": 19935
  },
  {
    "CONCEPT": "Sight account",
    "ACCOUNTID": 19935
  },
  {
    "CONCEPT": "Taxes 123",
    "ACCOUNTID": 19935
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19936
  },
  {
    "CONCEPT": "Budget",
    "ACCOUNTID": 19936
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19936
  },
  {
    "CONCEPT": "Renting",
    "ACCOUNTID": 19936
  },
  {
    "CONCEPT": "Sight account",
    "ACCOUNTID": 19936
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19936
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19937
  },
  {
    "CONCEPT": "Budget",
    "ACCOUNTID": 19937
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 19937
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19937
  },
  {
    "CONCEPT": "Bill",
    "ACCOUNTID": 19937
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19937
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19938
  },
  {
    "CONCEPT": "Bill",
    "ACCOUNTID": 19938
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19938
  },
  {
    "CONCEPT": "Sight account",
    "ACCOUNTID": 19938
  },
  {
    "CONCEPT": "Budget",
    "ACCOUNTID": 19938
  },
  {
    "CONCEPT": "Renting",
    "ACCOUNTID": 19938
  },
  {
    "CONCEPT": "Unknow",
    "ACCOUNTID": 19938
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 19938
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19938
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 19939
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19939
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19939
  },
  {
    "CONCEPT": "Sight account",
    "ACCOUNTID": 19939
  },
  {
    "CONCEPT": "Budget",
    "ACCOUNTID": 19939
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19940
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19940
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 19940
  },
  {
    "CONCEPT": "Purchase",
    "ACCOUNTID": 19940
  },
  {
    "CONCEPT": "Sight account",
    "ACCOUNTID": 19940
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19941
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19941
  },
  {
    "CONCEPT": "Bill",
    "ACCOUNTID": 19941
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19941
  },
  {
    "CONCEPT": "Budget",
    "ACCOUNTID": 19941
  },
  {
    "CONCEPT": "Purchase",
    "ACCOUNTID": 19942
  },
  {
    "CONCEPT": "Budget",
    "ACCOUNTID": 19942
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19942
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19942
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19942
  },
  {
    "CONCEPT": "Sight account",
    "ACCOUNTID": 19942
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 19942
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19943
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19943
  },
  {
    "CONCEPT": "Renting",
    "ACCOUNTID": 19943
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19943
  },
  {
    "CONCEPT": "Unknow",
    "ACCOUNTID": 19943
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 19943
  },
  {
    "CONCEPT": "Budget",
    "ACCOUNTID": 19943
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19944
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19944
  },
  {
    "CONCEPT": "Sight account",
    "ACCOUNTID": 19944
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19944
  },
  {
    "CONCEPT": "Unknow",
    "ACCOUNTID": 19944
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 19944
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19945
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19945
  },
  {
    "CONCEPT": "Purchase",
    "ACCOUNTID": 19945
  },
  {
    "CONCEPT": "Bill",
    "ACCOUNTID": 19945
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19945
  },
  {
    "CONCEPT": "Unknow",
    "ACCOUNTID": 19945
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19946
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 19946
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19946
  },
  {
    "CONCEPT": "Sight account",
    "ACCOUNTID": 19946
  },
  {
    "CONCEPT": "Purchase",
    "ACCOUNTID": 19946
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19946
  },
  {
    "CONCEPT": "Renting",
    "ACCOUNTID": 19946
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19947
  },
  {
    "CONCEPT": "Bill",
    "ACCOUNTID": 19947
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19947
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19947
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 19947
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19948
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 19948
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19948
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19948
  },
  {
    "CONCEPT": "Unknow",
    "ACCOUNTID": 19948
  },
  {
    "CONCEPT": "Budget",
    "ACCOUNTID": 19948
  },
  {
    "CONCEPT": "Purchase",
    "ACCOUNTID": 19949
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19949
  },
  {
    "CONCEPT": "Budget",
    "ACCOUNTID": 19949
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19949
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19949
  },
  {
    "CONCEPT": "Unknow",
    "ACCOUNTID": 19950
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19950
  },
  {
    "CONCEPT": "Sight account",
    "ACCOUNTID": 19950
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19950
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19950
  },
  {
    "CONCEPT": "Purchase",
    "ACCOUNTID": 19951
  },
  {
    "CONCEPT": "Bill",
    "ACCOUNTID": 19951
  },
  {
    "CONCEPT": "Sight account",
    "ACCOUNTID": 19951
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19951
  },
  {
    "CONCEPT": "Renting",
    "ACCOUNTID": 19951
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19951
  },
  {
    "CONCEPT": "Budget",
    "ACCOUNTID": 19951
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19951
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 19951
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19952
  },
  {
    "CONCEPT": "Sight account",
    "ACCOUNTID": 19952
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 19952
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19952
  },
  {
    "CONCEPT": "Budget",
    "ACCOUNTID": 19952
  },
  {
    "CONCEPT": "Bill",
    "ACCOUNTID": 19952
  },
  {
    "CONCEPT": "Unknow",
    "ACCOUNTID": 19952
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19952
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19953
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19953
  },
  {
    "CONCEPT": "Unknow",
    "ACCOUNTID": 19953
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19953
  },
  {
    "CONCEPT": "Purchase",
    "ACCOUNTID": 19953
  },
  {
    "CONCEPT": "Renting",
    "ACCOUNTID": 19953
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19954
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19954
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19954
  },
  {
    "CONCEPT": "Sight account",
    "ACCOUNTID": 19954
  },
  {
    "CONCEPT": "Purchase",
    "ACCOUNTID": 19954
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 19954
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19955
  },
  {
    "CONCEPT": "Sight account",
    "ACCOUNTID": 19955
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19955
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19955
  },
  {
    "CONCEPT": "Budget",
    "ACCOUNTID": 19955
  },
  {
    "CONCEPT": "Budget",
    "ACCOUNTID": 19956
  },
  {
    "CONCEPT": "Purchase",
    "ACCOUNTID": 19956
  },
  {
    "CONCEPT": "Bill",
    "ACCOUNTID": 19956
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19956
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19956
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19956
  },
  {
    "CONCEPT": "Renting",
    "ACCOUNTID": 19956
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 19956
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19957
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 19957
  },
  {
    "CONCEPT": "Budget",
    "ACCOUNTID": 19957
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19957
  },
  {
    "CONCEPT": "Renting",
    "ACCOUNTID": 19957
  },
  {
    "CONCEPT": "Sight account",
    "ACCOUNTID": 19957
  },
  {
    "CONCEPT": "Unknow",
    "ACCOUNTID": 19957
  },
  {
    "CONCEPT": "Bill",
    "ACCOUNTID": 19957
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19957
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19958
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19958
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19958
  },
  {
    "CONCEPT": "Budget",
    "ACCOUNTID": 19958
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 19958
  },
  {
    "CONCEPT": "Renting",
    "ACCOUNTID": 19959
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19959
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19959
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19959
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 19959
  },
  {
    "CONCEPT": "Purchase",
    "ACCOUNTID": 19959
  },
  {
    "CONCEPT": "Purchase",
    "ACCOUNTID": 19960
  },
  {
    "CONCEPT": "Bill",
    "ACCOUNTID": 19960
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19960
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19960
  },
  {
    "CONCEPT": "Automatic restore",
    "ACCOUNTID": 19960
  },
  {
    "CONCEPT": "Bill",
    "ACCOUNTID": 19961
  },
  {
    "CONCEPT": "Unknow",
    "ACCOUNTID": 19961
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19961
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19961
  },
  {
    "CONCEPT": "Sight account",
    "ACCOUNTID": 19961
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19961
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19962
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19962
  },
  {
    "CONCEPT": "Renting",
    "ACCOUNTID": 19962
  },
  {
    "CONCEPT": "Budget",
    "ACCOUNTID": 19962
  },
  {
    "CONCEPT": "Bill",
    "ACCOUNTID": 19962
  },
  {
    "CONCEPT": "Purchase",
    "ACCOUNTID": 19962
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19963
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19963
  },
  {
    "CONCEPT": "Purchase",
    "ACCOUNTID": 19963
  },
  {
    "CONCEPT": "Sight account",
    "ACCOUNTID": 19963
  },
  {
    "CONCEPT": "Budget",
    "ACCOUNTID": 19963
  },
  {
    "CONCEPT": "Unknow",
    "ACCOUNTID": 19963
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19963
  },
  {
    "CONCEPT": "Salary",
    "ACCOUNTID": 19964
  },
  {
    "CONCEPT": "Taxes",
    "ACCOUNTID": 19964
  },
  {
    "CONCEPT": "Unknow",
    "ACCOUNTID": 19964
  },
  {
    "CONCEPT": "Maintenance",
    "ACCOUNTID": 19964
  },
  {
    "CONCEPT": "Sight account",
    "ACCOUNTID": 19964
  },
  {
    "CONCEPT": "Bill",
    "ACCOUNTID": 19964
  },
  {
    "CONCEPT": "Renting",
    "ACCOUNTID": 19964
  },
  {
    "CONCEPT": "Payment salary",
    "ACCOUNTID": 19976
  },
  {
    "CONCEPT": "Amazon marketplace",
    "ACCOUNTID": 19976
  }
]
`;

const MOVEMENTTYPES_DATA = `
[
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 1
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 1
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 1
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 1
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 2
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 2
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 2
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 2
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 3
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 5
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 6
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 6
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 6
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 6
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 6
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 7
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 7
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 8
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 8
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 8
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 9
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 9
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 10
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 10
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 11
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 11
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 11
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 11
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 27
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 27
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 27
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 27
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 36
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 36
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 36
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 41
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 7040
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 7041
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 7090
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 7090
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 7090
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 7090
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 7090
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 7091
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 7091
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 7091
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 7091
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 7091
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 7123
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 7123
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 7123
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 7123
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 7124
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 7124
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 7124
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 7124
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 7124
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 7125
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 7125
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 7125
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 7125
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 7126
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 7126
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 7126
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 7126
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 7223
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 7223
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 7223
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 7223
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 7223
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 7224
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 7224
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 7224
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 7224
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 7224
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 7225
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 7225
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 7225
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 7225
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 7225
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 7226
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 7226
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 7226
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 7226
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 7226
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 7296
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 7296
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 7296
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 7296
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 7297
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 7297
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 7297
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 7297
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 7297
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 7298
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 7298
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 7298
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 7298
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 7298
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 7299
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 7299
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 7299
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 7299
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 7299
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 7300
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 7300
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 7300
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 7300
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 7301
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 7301
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 7301
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 7301
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 7301
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 7302
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 7302
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 7302
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 7302
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 7303
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 7303
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 7303
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 7303
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 7303
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 7304
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 7304
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 7304
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 7304
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 7304
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 7305
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 7305
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 7305
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 7305
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 7305
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 7306
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 7306
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 7306
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 7306
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 7307
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 7307
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 7307
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 7307
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 7308
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 7308
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 7308
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 7309
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 7309
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 7309
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 7309
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 7310
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 7310
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 7310
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 7310
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 7310
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19370
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19370
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19370
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19371
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19371
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19371
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19371
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19372
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19372
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19372
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19372
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19372
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19373
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19373
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19373
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19373
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19374
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19374
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19374
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19374
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19374
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19375
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19375
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19375
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19375
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19376
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19376
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19376
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19376
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19376
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19377
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19377
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19377
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19377
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19377
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19378
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19378
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19378
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19378
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19378
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19379
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19379
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19379
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19380
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19380
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19380
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19380
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19380
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19381
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19381
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19381
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19381
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19381
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19382
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19382
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19382
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19382
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19382
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19383
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19383
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19383
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19383
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19383
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19384
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19384
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19384
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19384
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19620
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19620
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19620
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19621
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19621
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19621
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19621
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19621
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19622
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19622
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19622
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19622
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19623
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19623
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19624
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19624
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19624
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19624
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19624
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19625
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19625
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19625
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19625
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19626
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19626
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19626
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19626
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19626
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19627
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19627
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19627
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19627
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19627
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19628
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19628
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19628
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19628
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19628
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19629
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19629
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19629
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19629
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19630
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19630
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19630
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19630
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19630
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19631
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19631
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19631
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19631
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19632
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19632
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19632
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19632
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19632
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19633
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19633
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19633
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19633
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19633
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19634
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19634
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19634
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19634
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19634
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19635
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19635
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19635
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19635
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19635
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19636
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19636
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19636
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19636
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19636
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19637
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19637
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19637
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19637
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19638
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19638
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19638
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19638
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19638
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19639
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19639
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19639
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19639
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19639
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19920
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19920
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19920
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19920
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19921
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19921
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19921
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19921
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19922
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19922
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19922
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19922
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19922
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19923
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19923
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19923
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19923
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19924
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19924
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19924
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19924
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19925
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19925
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19925
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19925
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19925
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19926
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19926
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19926
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19926
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19926
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19927
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19927
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19927
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19927
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19927
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19928
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19928
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19928
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19928
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19928
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19929
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19929
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19929
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19930
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19930
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19930
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19930
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19930
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19931
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19931
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19931
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19931
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19931
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19932
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19932
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19932
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19932
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19933
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19933
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19933
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19933
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19934
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19934
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19934
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19934
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19934
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19935
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19935
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19935
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19935
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19935
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19936
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19936
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19936
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19936
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19936
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19937
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19937
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19937
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19937
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19937
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19938
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19938
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19938
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19938
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19938
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19939
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19939
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19939
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19939
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19940
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19940
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19940
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19940
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19941
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19941
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19941
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19941
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19941
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19942
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19942
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19942
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19942
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19942
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19943
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19943
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19943
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19943
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19943
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19944
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19944
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19944
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19944
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19944
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19945
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19945
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19945
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19945
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19945
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19946
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19946
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19946
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19946
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19946
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19947
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19947
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19947
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19947
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19947
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19948
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19948
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19948
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19948
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19948
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19949
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19949
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19949
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19949
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19949
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19950
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19950
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19950
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19950
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19950
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19951
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19951
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19951
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19951
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19951
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19952
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19952
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19952
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19952
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19953
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19953
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19953
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19953
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19953
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19954
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19954
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19954
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19954
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19954
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19955
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19955
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19955
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19955
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19955
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19956
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19956
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19956
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19956
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19956
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19957
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19957
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19957
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19957
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19957
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19958
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19958
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19958
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19958
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19959
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19959
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19959
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19959
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19959
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19960
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19960
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19960
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19960
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19961
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19961
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19961
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19961
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19962
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19962
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19962
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19962
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19963
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19963
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19963
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19963
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19963
  },
  {
    "DESCRIPTION": "Salary",
    "ACCOUNTID": 19964
  },
  {
    "DESCRIPTION": "Banking fees",
    "ACCOUNTID": 19964
  },
  {
    "DESCRIPTION": "Automatic Cash",
    "ACCOUNTID": 19964
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19964
  },
  {
    "DESCRIPTION": "Direct debit",
    "ACCOUNTID": 19964
  },
  {
    "DESCRIPTION": "Transfer",
    "ACCOUNTID": 19976
  },
  {
    "DESCRIPTION": "Telematic transaction",
    "ACCOUNTID": 19976
  }
]
`;

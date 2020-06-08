import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.account-detail]': 'true'
  }
})
export class AccountDetailComponent {

}

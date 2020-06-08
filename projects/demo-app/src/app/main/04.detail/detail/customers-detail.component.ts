import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'customers-detail',
  templateUrl: './customers-detail.component.html',
  styleUrls: ['./customers-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.customers-detail]': 'true'
  }
})
export class CustomersDetailComponent {

}

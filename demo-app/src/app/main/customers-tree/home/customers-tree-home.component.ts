import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart, GuardsCheckStart } from '@angular/router';

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

  constructor(
    protected router: Router,
    protected actRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log('CustomersTreeHomeComponent ngOnInit');
    // this.router.events.subscribe(event => {
    //   console.log(event);
    //   if (event instanceof GuardsCheckStart) {
    //     console.log('GuardsCheckStart');
    //   }
    // });
  }

}

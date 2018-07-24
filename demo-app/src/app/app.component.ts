import { Component, Injector } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { OntimizeMatIconRegistry } from 'ontimize-web-ngx';

@Component({
  selector: 'o-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // ontimizeMatIconRegistry: OntimizeMatIconRegistry;
  ontimizeMatIconRegistry: any;
  constructor(protected injector: Injector) {
  }

}

import { NgModule } from '@angular/core';
import { Injector, APP_INITIALIZER } from '@angular/core';

import {
  APP_CONFIG,
  ONTIMIZE_MODULES,
  ONTIMIZE_PROVIDERS,
  OntimizeWebModule
} from 'ontimize-web-ngx';

import { CONFIG } from './app.config';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { DummyService } from './shared/services/dummy.service';
export function getDummyServiceProvider(injector: Injector) {
  return new DummyService(injector);
}

// Defining custom providers (if needed)...
export const customProviders: any = [{
  provide: 'DummyService',
  useFactory: getDummyServiceProvider,
  deps: [Injector]
}];

@NgModule({
  imports: [
    ONTIMIZE_MODULES,
    OntimizeWebModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    { provide: APP_CONFIG, useValue: CONFIG },
    ...ONTIMIZE_PROVIDERS,
    ...customProviders
  ]
})
export class AppModule { }

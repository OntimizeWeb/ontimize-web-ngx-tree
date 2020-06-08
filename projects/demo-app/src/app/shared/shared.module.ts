import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { CommonModule } from '@angular/common';
import { ExampleComponent } from './example/example.component';
import { HighlightComponent } from './highlight/highlight.component';
import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';

@NgModule({
  imports: [
    OntimizeWebModule,
    HighlightJsModule
  ],
  declarations: [
    ExampleComponent,
    HighlightComponent
  ],
  exports: [
    CommonModule,
    ExampleComponent,
    HighlightComponent
  ],
  providers: [
    HighlightJsService
  ]
})
export class SharedModule { }

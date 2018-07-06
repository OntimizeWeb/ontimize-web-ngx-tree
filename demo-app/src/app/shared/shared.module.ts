import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    OntimizeWebModule
  ],
  declarations: [
  ],
  exports: [
    CommonModule
  ]
})
export class SharedModule { }

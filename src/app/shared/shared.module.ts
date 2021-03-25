import {NgModule} from '@angular/core';
import {MaterialModule} from './material/material.module';
import {NgxTypedJsModule} from 'ngx-typed-js';



@NgModule({
imports: [],
  exports: [
    MaterialModule,
    NgxTypedJsModule
  ]
})

export class SharedModule { }

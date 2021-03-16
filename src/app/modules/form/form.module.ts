import {NgModule} from '@angular/core';
import {FormComponent} from './form.component';
import {CommonModule} from '@angular/common';
import {FormRoutingModule} from './form-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {FormSubmitComponent} from './form-submit/form-submit.component';
import {FormService} from './form.service';
import {MaterialModule} from '../../shared/material/material.module';

@NgModule({
  declarations: [FormComponent, FormSubmitComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormRoutingModule,
MaterialModule
  ],
  providers: [FormService]
})

export class FormModule { }

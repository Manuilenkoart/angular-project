import {NgModule} from '@angular/core';
import {FormComponent} from './form.component';
import {CommonModule} from '@angular/common';
import {FormRoutingModule} from './form-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {FormSubmitComponent} from './form-submit/form-submit.component';
import {FormService} from './form.service';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [FormComponent, FormSubmitComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormRoutingModule,
    SharedModule
  ],
  providers: [FormService]
})

export class FormModule { }

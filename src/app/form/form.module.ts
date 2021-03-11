import {NgModule} from '@angular/core';
import {FormComponent} from './form.component';
import {CommonModule} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {FormRoutingModule} from './form-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {FormSubmitComponent} from './form-submit/form-submit.component';

@NgModule({
  declarations: [FormComponent, FormSubmitComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FormRoutingModule,

  ]
})

export class FormModule { }

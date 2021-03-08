import {NgModule} from '@angular/core';
import {FormComponent} from './form.component';
import {CommonModule} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {FormRoutingModule} from './form-routing.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
FormRoutingModule
  ]
})

export class FormModule { }

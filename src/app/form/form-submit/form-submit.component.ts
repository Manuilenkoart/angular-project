import {Component, Inject, Input, OnInit} from '@angular/core';
import {FormInterface} from '../form.model';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-form-submit',
  templateUrl: 'form-submit.component.html'
})

export class FormSubmitComponent {

 constructor(@Inject(MAT_DIALOG_DATA) public data: FormInterface) {

 }
}

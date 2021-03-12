import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormSubmitInterface} from './form-submit.model';




@Component({
  selector: 'app-form-submit',
  templateUrl: 'form-submit.component.html',
  styleUrls: ['form-submit.component.scss']
})

export class FormSubmitComponent {

 constructor(@Inject(MAT_DIALOG_DATA) public formPostData: FormSubmitInterface) {

 }

}

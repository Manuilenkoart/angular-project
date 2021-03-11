import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FormService} from './form.service';
import {MatDialog} from '@angular/material/dialog';
import {FormSubmitComponent} from './form-submit/form-submit.component';
import {FormInterface} from './form.model';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})


export class FormComponent implements OnInit{
  form: FormGroup;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);


constructor(public dialog: MatDialog,
            private formService: FormService,
           ) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: this.emailFormControl,
      textAreaComment: new FormControl('')
    });
  }

  submit(): void {
    if (this.form.valid){
      const formData = {... this.form.value};
      console.log('formData', formData);
      this.formService.postData(formData);

      this.openDialog(formData);
      this.formReset();

    }
  }
  openDialog(formData) {
    this.dialog.open(FormSubmitComponent, {
      data: {...formData}
    });
  }

  formReset(): void {
    this.form.reset();
    this.form.get('email').clearValidators();
    this.form.get('email').updateValueAndValidity();

  }
}

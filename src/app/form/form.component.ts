import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FormService} from './form.service';
import {MatDialog} from '@angular/material/dialog';
import {FormSubmitComponent} from './form-submit/form-submit.component';
import {Router} from '@angular/router';


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

  isFormPosted: boolean;

constructor(public dialog: MatDialog,
            private formService: FormService,
            private router: Router) {
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
      this.formService.postData(formData).subscribe(res => {
        this.isFormPosted = true;
        this.openDialog(formData, this.isFormPosted);
        this.formReset();
        this.redirectAfterSubmitedForm();
      }, error => {
        this.isFormPosted = false;
        this.openDialog(formData, this.isFormPosted);
      });

    }
  }
  openDialog(formData, formPostStatus): void {
    this.dialog.open(FormSubmitComponent, {
      data: {...formData, formPostStatus}
    });
  }

  formReset(): void {
    this.form.reset();
    this.form.get('email').clearValidators();
    this.form.get('email').updateValueAndValidity();

  }
  redirectAfterSubmitedForm(): void {
    this.router.navigate(['/']);
  }
}

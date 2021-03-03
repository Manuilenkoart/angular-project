import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FormService} from './form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})


export class FormComponent implements OnInit{
  form: FormGroup;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(private formService: FormService) {
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
      this.form.reset();

    }
  }

}

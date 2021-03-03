import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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

  ngOnInit(): void {
    this.form = new FormGroup({
      email: this.emailFormControl,
      textAreaComment: new FormControl('')
    });
  }

  submit(): void {
    if (this.form.valid){
      const formData = {... this.form.value};
      console.log(formData);
      this.form.reset();

    }
  }

}

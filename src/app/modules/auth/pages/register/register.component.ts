import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../../core/service/auth.service';
import {Router} from '@angular/router';
import {User} from '../../auth.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  submited = false;
  hide = true;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordControl = new FormControl( '', [Validators.required, Validators.minLength(6)]);

  constructor(public auth: AuthService,
              private router: Router) { }

  ngOnInit(): void {
if (this.auth.isAuthenticated()){
  this.router.navigate(['hello']);
}
this.form = new FormGroup({
  email: this.emailFormControl,
  password: this.passwordControl
    });

  }
  getErrorMessage() {
    if (this.passwordControl.hasError('required')) {
      return 'You must enter a value';
    }

    return this.passwordControl.hasError('email') ? 'Not a valid email' : '';
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }
    this.submited = true;
    const newUser: User = {...this.form.value};
    this.auth.register(newUser).subscribe(() => {
      this.router.navigate(['/hello']);
      this.submited = false;
    }, () => {
      this.submited = false;
    });
  }

}

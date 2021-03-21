import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../auth.model';
import {AuthService} from '../../../../core/service/auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

form: FormGroup;
submited = false;
message: string;
  constructor(public auth: AuthService,
              private router: Router,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
    if (this.auth.isAuthenticated()){
      this.router.navigate(['hello']);
    }
    this.route.queryParams.subscribe((params) => {
      if (params['loginAgain']) {
        this.message = 'Введите email и пароль';
      }
    });

    this.form = new FormGroup({
    email: new FormControl(null, [ Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)])
  });
  }


  submit() {
    if (this.form.invalid) {
      return;
    }
    this.submited = true;
    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password,
    };
    this.auth.login(user).subscribe(() => {
      this.form.reset();
      this.router.navigate(['/hello']);
      this.submited = false;
    }, () => {
      this.submited = false;
    });
  }
}

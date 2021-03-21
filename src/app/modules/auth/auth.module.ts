import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './pages/register/register.component';
import {LoginComponent} from './pages/login/login.component';
import {SharedModule} from '../../shared/shared.module';
import {AuthRoutingModule} from './auth.routing';



@NgModule({
  declarations: [
    AuthComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }

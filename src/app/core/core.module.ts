import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthGuard} from './guard/auth.guard';
import {AuthService} from './service/auth.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [AuthGuard, AuthService]
})
export class CoreModule { }

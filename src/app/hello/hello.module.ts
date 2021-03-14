import {NgModule} from '@angular/core';
import {HelloComponent} from './hello.component';
import { MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {CommonModule} from '@angular/common';
import {WorkExampleComponent} from '../work-example/work-example.component';
import {AboutYourselfComponent} from '../about-yourself/about-yourself.component';
import {InterestComponent} from '../interest/interest.component';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [HelloComponent,
    WorkExampleComponent,
    AboutYourselfComponent,
    InterestComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatListModule
  ]
})
export class HelloModule { }

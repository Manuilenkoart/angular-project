import {NgModule} from '@angular/core';
import {HelloComponent} from './hello.component';
import {CommonModule} from '@angular/common';
import {WorkExampleComponent} from './modals/work-example/work-example.component';
import {AboutYourselfComponent} from './modals/about-yourself/about-yourself.component';
import {InterestComponent} from './modals/interest/interest.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [HelloComponent,
    WorkExampleComponent,
    AboutYourselfComponent,
    InterestComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HelloModule { }

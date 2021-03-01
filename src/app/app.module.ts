import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HelloComponent } from './hello/hello.component';
import { ContentComponent } from './content/content.component';
import { FormComponent } from './form/form.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {WorkExampleComponent} from './work-example/work-example.component';
import {MaterialModule} from './material/material.module';
import { AboutYourselfComponent } from './about-yourself/about-yourself.component';
import { InterestComponent } from './interest/interest.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HelloComponent,
    ContentComponent,
    FormComponent,
    WorkExampleComponent,
    AboutYourselfComponent,
    InterestComponent
  ],
  entryComponents: [WorkExampleComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {WorkExampleComponent} from './work-example/work-example.component';
import {MaterialModule} from './material/material.module';
import {HeaderComponent} from './header/header.component';
import {HelloModule} from './hello/hello.module';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  entryComponents: [WorkExampleComponent],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HelloModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {WorkExampleComponent} from './modules/hello/modals/work-example/work-example.component';
import {MaterialModule} from './shared/material/material.module';
import {HeaderComponent} from './layout/header/header.component';
import {HelloModule} from './modules/hello/hello.module';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentLayoutComponent,
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

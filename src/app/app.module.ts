import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {WorkExampleComponent} from './modules/hello/modals/work-example/work-example.component';
import {HeaderComponent} from './layout/header/header.component';
import {HelloModule} from './modules/hello/hello.module';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import {SharedModule} from './shared/shared.module';




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
    SharedModule,
    FormsModule,
    HelloModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

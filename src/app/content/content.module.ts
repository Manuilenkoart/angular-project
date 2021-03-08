import {NgModule} from '@angular/core';
import {ContentComponent} from './content.component';
import {ContentService} from './content.service';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {CommonModule} from '@angular/common';
import {ContentRoutingModule} from './content-routing.module';


@NgModule({
  declarations: [ContentComponent],
  providers: [ContentService],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule,
    MatProgressSpinnerModule,
    ContentRoutingModule
  ]
})
export class ContentModule { }

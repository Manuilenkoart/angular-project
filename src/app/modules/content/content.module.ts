import {NgModule} from '@angular/core';
import {ContentComponent} from './content.component';
import {ContentService} from './content.service';
import {CommonModule} from '@angular/common';
import {ContentRoutingModule} from './content-routing.module';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [ContentComponent],
  providers: [ContentService],
  imports: [
    CommonModule,
    ContentRoutingModule,
    SharedModule
  ]
})
export class ContentModule { }

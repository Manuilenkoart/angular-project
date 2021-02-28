import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HelloComponent} from '../../../angular/src/app/hello/hello.component';
import {ContentComponent} from './content/content.component';
import {FormComponent} from '../../../angular/src/app/form/form.component';

const routes: Routes = [
  {path: '', component: HelloComponent},
  {path: 'content', component: ContentComponent},
  {path: 'feedback', component: FormComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}


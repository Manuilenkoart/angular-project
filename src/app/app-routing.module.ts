import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HelloComponent} from './modules/hello/hello.component';
import {ContentLayoutComponent} from './layout/content-layout/content-layout.component';

const routes: Routes = [
  {path: '', component: ContentLayoutComponent, children:[
      {path: '', component: HelloComponent},
      {path: 'content',  loadChildren: () => import('./modules/content/content.module').then(m => m.ContentModule)},
      {path: 'feedback',  loadChildren: () => import('./modules/form/form.module').then(m => m.FormModule)},
    ]},
  {path: '**', redirectTo: '/'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule{}


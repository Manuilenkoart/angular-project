import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HelloComponent} from './hello/hello.component';

const routes: Routes = [
  {path: '', component: HelloComponent},
  {path: 'content',  loadChildren: () => import('./content/content.module').then(m => m.ContentModule)},
  {path: 'feedback',  loadChildren: () => import('./form/form.module').then(m => m.FormModule)},
  {path: '**', redirectTo: '/'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule{}


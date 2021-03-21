import {NgModule} from '@angular/core';
import {HelloComponent} from './hello.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', component: HelloComponent}
]

@NgModule({
imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelloRoutingModule { }

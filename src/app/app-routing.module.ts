import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HelloComponent} from './modules/hello/hello.component';
import {ContentLayoutComponent} from './layout/content-layout/content-layout.component';
import {LoginComponent} from './modules/auth/pages/login/login.component';
import {AuthModule} from './modules/auth/auth.module';
import {AuthLayoutComponent} from './layout/auth-layout/auth-layout.component';
import {AuthGuard} from './core/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  {path: '', component: ContentLayoutComponent, canActivate: [AuthGuard], children: [
      {path: 'hello', loadChildren: () => import('./modules/hello/hello.module').then(m => m.HelloModule)},
      {path: 'content',  loadChildren: () => import('./modules/content/content.module').then(m => m.ContentModule)},
      {path: 'feedback',  loadChildren: () => import('./modules/form/form.module').then(m => m.FormModule)},
    ]},
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'auth/register',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  { path: '**', redirectTo: '/auth/login', pathMatch: 'full' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})


export class AppRoutingModule{}


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-yourself',
  templateUrl: './about-yourself.component.html',
  styleUrls: ['./about-yourself.component.scss']
})
export class AboutYourselfComponent implements OnInit {
  lazyLoadExampleCode = `const routes: Routes = [
{path: '', component: ContentLayoutComponent,
children:[
  {path: '', component: HelloComponent},
  {path: 'content',  loadChildren: () => import('./modules/content/content.module').then(m => m.ContentModule)},
  {path: 'feedback',  loadChildren: () => import('./modules/form/form.module').then(m => m.FormModule)},
    ]},
{path: '**', redirectTo: '/'}
];`;
  constructor() { }

  ngOnInit(): void {
  }

}

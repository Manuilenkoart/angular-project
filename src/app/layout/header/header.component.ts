import {Component, Input} from '@angular/core';

// @ts-ignore
import {version} from '../../../../package.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
@Input() version: string = version;
heightToogle = false;

  constructor() { }




}

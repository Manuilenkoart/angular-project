import {Component, Input} from '@angular/core';

// @ts-ignore
import {version} from '../../../../package.json';
import {Router} from '@angular/router';
import {AuthService} from '../../core/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
@Input() version: string = version;
heightToogle = false;

  constructor(private router: Router,
              private auth: AuthService) {
}

logout(event: Event): void{
    event.preventDefault();
    this.auth.logout();
    this.router.navigate(['auth', 'login']);
}

}

import {Component, Input, ViewChild} from '@angular/core';

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
@ViewChild('menu__toggle') private checkInput;


  constructor(private router: Router,
              private auth: AuthService) {
}
  toogleCheckboxValue(): void{
  this.checkInput.nativeElement.checked = !this.checkInput.nativeElement.checked;
  }


  handleClickNavLink(event): void{
    if (event.target !== event.currentTarget){
      this.toogleCheckboxValue();
}
  }
logout(event: Event): void{
    event.preventDefault();
    this.auth.logout();
    this.router.navigate(['auth', 'login']);
}

}

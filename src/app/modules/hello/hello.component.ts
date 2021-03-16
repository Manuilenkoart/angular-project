import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {WorkExampleComponent} from './modals/work-example/work-example.component';
import {AboutYourselfComponent} from './modals/about-yourself/about-yourself.component';
import {InterestComponent} from './modals/interest/interest.component';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
})


export class HelloComponent   {
  constructor(public dialog: MatDialog) {}
  openDialogWorkExample(): void {
    this.dialog.open(WorkExampleComponent);
  }
  openDialogAboutYourself(): void {
    this.dialog.open(AboutYourselfComponent);
  }
openDialogInterest(): void {
    this.dialog.open(InterestComponent);
}

}



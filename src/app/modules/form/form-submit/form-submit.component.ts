import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormSubmitInterface} from './form-submit.model';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';



@Component({
  selector: 'app-form-submit',
  templateUrl: 'form-submit.component.html',
  styleUrls: ['form-submit.component.scss']
})

export class FormSubmitComponent {
  durationInSeconds = 5;

 constructor(@Inject(MAT_DIALOG_DATA) public formPostData: FormSubmitInterface,
             private snackBar: MatSnackBar) {
   if (formPostData.formPostStatus){
     this.openSnackBar('Форма отправлена');
   } else {
     this.openSnackBar('Произошла ошибка. Форма не отправлена');
   }

 }
  openSnackBar(alert: string): void {
    this.snackBar.open(alert, 'ok', {
      duration: 1000 * this.durationInSeconds,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
}

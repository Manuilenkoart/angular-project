import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormInterface} from './form.model';
import {catchError} from 'rxjs/operators';
import {error} from '@angular/compiler/src/util';



@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }

  postData(sendData: FormInterface): any {
     this.http.post<FormInterface>('/sendmessage', sendData).subscribe(res => {
       console.log('res', res);
     }, error => {
       console.log('error', error);
     });
  }
}

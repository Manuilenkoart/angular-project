import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


export interface FormInterface{
  email: string;
  textAreaComment: string;
}
@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }

  postData(sendData: FormInterface): any {
     this.http.post<FormInterface>('/sendmessage', sendData).subscribe(res => {
      console.log('response', res);
    }, error => {
       console.log('error', error);
     });
  }
}

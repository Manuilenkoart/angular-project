import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormInterface} from './form.model';


@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }

  postData(sendData: FormInterface) {
    return this.http.post('/sendmessage', sendData);
  }

}

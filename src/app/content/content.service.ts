import {ContentComponent} from './content.component';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';


export interface CurrencyInterface{
  ccy: string;
  base_ccy: string;
  sale: number;
  buy: number;
}

@Injectable({providedIn: 'root'})

export class ContentService {

  constructor(private http: HttpClient) {
  }

  getData(): Observable<CurrencyInterface[]> {
    return this.http.get<CurrencyInterface[]>('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
  }
}

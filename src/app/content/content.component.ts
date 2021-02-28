import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface CurrencyInterface{
  ccy: string;
  sale: number;
  buy: number;
}
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  getCurrencyFromApi: CurrencyInterface[] = [];
  constructor(private http: HttpClient) { }
  date: Date = new Date();
  ngOnInit(): void {
    this.http.get<CurrencyInterface[]>('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5').subscribe(res => {
      console.log(res);
      this.getCurrencyFromApi = res;
    });
  }

}

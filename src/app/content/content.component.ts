import { Component, OnInit } from '@angular/core';

import {ContentService, CurrencyInterface} from './content.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})

export class ContentComponent implements OnInit {
  date: Date = new Date();
  dataSource: CurrencyInterface[] = [];
  displayedColumns: string[] = ['ccy', 'buy', 'sale'];
  loading = false;

  constructor(private contentService: ContentService) { }

  ngOnInit() {
  this.getCurrencyFromApi();
  }

  getCurrencyFromApi() {
    this.loading = true;
    this.contentService.getData().subscribe(res => {
    this.dataSource = res;
    this.loading = false;
  });
}
}



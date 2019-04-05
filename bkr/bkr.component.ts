import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bkr',
  template: `
    <p>
      Berkshire Hathaway(BKR) is a multi conglomerate company and is the most expensive publicly traded stock of all time.
    </p>
    <p><b>For more info click <a href="https://finance.yahoo.com/quote/BRK-A/" target="_blank">here</a></b></p>
  `,
  styles: []
})
export class BKRComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

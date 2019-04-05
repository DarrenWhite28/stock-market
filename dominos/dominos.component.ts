import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dominos',
  template: `
    <p>
      Dominos(DPZ) is an American Pizza Resturant chain founded in 1960. In February 2018, the chain became the largest pizza seller worldwide in terms of sales.
    </p>
    <p><b>For more info click <a href="https://finance.yahoo.com/quote/DPZ/" target="_blank">here</a></b></p>
  `,
  styles: []
})
export class DominosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

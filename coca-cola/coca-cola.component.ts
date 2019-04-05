import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coca-cola',
  template: `
    <p>
    Coca Cola(KO) is a carbonated soft drink manufactured by The Coca Cola Company. Coca Cola dominated the soft-drink market throughout the 20th century. 
    </p>

    <p><b>For more info click <a href="https://finance.yahoo.com/quote/KO/" target="_blank">here</a></b></p>
  `,
  styles: []
})
export class CocaColaComponent implements OnInit {

  constructor() { }

  ngOnInit() { 
  }

}

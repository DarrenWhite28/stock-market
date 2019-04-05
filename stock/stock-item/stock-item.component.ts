import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
 selector: 'app-stock-item',
 templateUrl: './stock-item.component.html',
 styleUrls: ['./stock-item.component.css']
})



export class StockItemComponent implements OnInit {
 /**Creating an array of stocks */
    public stocks: Array<Stock>;
 
    
 constructor() { }


/**Name -- abbreviation -- current price -- previous price */
 ngOnInit() {
 this.stocks = [
 new Stock('Coca-Cola', 'KO', 200, 140),
 new Stock('Berkshire Hathaway', 'BKR', 250, 190),
 new Stock('Dominos', 'DPZ', 75, 105)
 ];
 }

 
}

export class Stock {

    //Stock attributes
    favorite: boolean = false;
    constructor(
    public name: string,
    public code: string,
    //  (current price)
    public price: number,
    public previousPrice: number) {}
    
    isPositiveChange(): boolean {
    return this.price >= this.previousPrice;
    }
   }
   
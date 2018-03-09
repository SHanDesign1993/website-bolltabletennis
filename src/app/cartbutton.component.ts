import {Component} from "@angular/core";
import {ShoppingCartService} from "./shoppingcart.service";
@Component({
    
    selector:'add',
    
    template:`
       
        <button class="add-btn" data-dismiss="modal" (click)="addToCart(pprice,pid,pamount,pname)">放入購物車</button> 
      
    `,
    inputs:['pprice','pid','pamount','pname']
})

export class AddButton{
    pprice='';
    pid='';
    pamount='';
    pname='';
    public cartprice:number;

    constructor(
        private _shoppingCartService: ShoppingCartService
    ) {}

    addToCart(cartprice,cartid,pamount,pname) {

        console.log(this.pamount);
        this._shoppingCartService.add(cartprice,cartid,pamount,pname);
    }
    
    
}

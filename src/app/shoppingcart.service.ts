import {Injectable} from '@angular/core';
import {Cart} from "./cart";


@Injectable()
export class ShoppingCartService {

    carts: any[];
    cartsid:any[];
    cartobj:Cart[];
    cartsname:any[];//
    totalprice:number;

    constructor() {
        this.carts = [];
        this.cartsid = [];
        this.cartobj=[];
        this.cartsname=[];
        this.totalprice=0;

    }

    add(product:number,id:number,amount:number,name:string){//name
        this.cartsid.push(id);
        this.carts.push(product*amount);
        const data={id:id,price:product,amount:amount,name:name};
        this.cartobj.push(data);
        this.cartsname.push(name);//
        window.alert("已放到購物車！");
    }

    remove(index: number) {
        if (index > -1) {
            this.cartobj.splice(index, 1);
            this.carts.splice(index, 1);
            this.cartsid.splice(index, 1);
           // this.cartsname.splice(index, 1);//
        }
        console.log("remove");
    }
    clear() {
            this.cartobj.splice(0, this.cartobj.length);
            this.carts.splice(0, this.carts.length);
            this.cartsid.splice(0, this.cartsid.length);
          //  this.cartsname.splice(0, this.cartsname.length);//
            console.log("clear");
    }
    get() {
        return this.carts;
    }

    getid(){
        return this.cartsid;
    }

    getobj(){
        return this.cartobj;
    }
    getname(){//name
        return this.cartsname;
    }

    getTotalPrice(){
        var total=0;
        for(var item of this.carts){
            total+= +item;
        }

        return total
    }

    getTotalAmount(){
        var count=0;
        for(var item of this.cartsid){
            count+=1;
        }
        return count;
    }

    occurrence(a, arr) {
        var count = 0;
        arr.forEach((element, index, array) => {
            if (element == a) {
                count = count + 1;
            }
        });
        console.log(count);
        console.log(arr);
        //console.log(this.cartobj);
        
        for(var i =0;i<this.cartobj.length;i++){
            if(this.cartobj[i].id==a){
                count = +this.cartobj[i].amount;
            }
        }
        if(count==0){
            count=1;
        }
        return count;
    }

}

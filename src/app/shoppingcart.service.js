"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ShoppingCartService = (function () {
    function ShoppingCartService() {
        this.carts = [];
        this.cartsid = [];
        this.cartobj = [];
        this.cartsname = [];
        this.totalprice = 0;
    }
    ShoppingCartService.prototype.add = function (product, id, amount, name) {
        this.cartsid.push(id);
        this.carts.push(product);
        var data = { id: id, price: product, amount: amount, name: name };
        this.cartobj.push(data);
        this.cartsname.push(name); //
        window.alert("已放到購物車！");
    };
    ShoppingCartService.prototype.remove = function (index) {
        if (index > -1) {
            this.cartobj.splice(index, 1);
            this.carts.splice(index, 1);
            this.cartsid.splice(index, 1);
        }
        console.log("remove");
    };
    ShoppingCartService.prototype.clear = function () {
        this.cartobj.splice(0, this.cartobj.length);
        this.carts.splice(0, this.carts.length);
        this.cartsid.splice(0, this.cartsid.length);
        //  this.cartsname.splice(0, this.cartsname.length);//
        console.log("clear");
    };
    ShoppingCartService.prototype.get = function () {
        return this.carts;
    };
    ShoppingCartService.prototype.getid = function () {
        return this.cartsid;
    };
    ShoppingCartService.prototype.getobj = function () {
        return this.cartobj;
    };
    ShoppingCartService.prototype.getname = function () {
        return this.cartsname;
    };
    ShoppingCartService.prototype.getTotalPrice = function () {
        var total = 0;
        for (var _i = 0, _a = this.carts; _i < _a.length; _i++) {
            var item = _a[_i];
            total += +item;
        }
        return total;
    };
    ShoppingCartService.prototype.getTotalAmount = function () {
        var count = 0;
        for (var _i = 0, _a = this.cartsid; _i < _a.length; _i++) {
            var item = _a[_i];
            count += 1;
        }
        return count;
    };
    ShoppingCartService.prototype.occurrence = function (a, arr) {
        var count = 0;
        arr.forEach(function (element, index, array) {
            if (element == a) {
                count = count + 1;
            }
        });
        return count;
    };
    ShoppingCartService = __decorate([
        core_1.Injectable()
    ], ShoppingCartService);
    return ShoppingCartService;
}());
exports.ShoppingCartService = ShoppingCartService;
//# sourceMappingURL=shoppingcart.service.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AddButton = (function () {
    function AddButton(_shoppingCartService) {
        this._shoppingCartService = _shoppingCartService;
        this.pprice = '';
        this.pid = '';
        this.pamount = '';
        this.pname = '';
    }
    AddButton.prototype.addToCart = function (cartprice, cartid, pamount, pname) {
        console.log(this.pamount);
        this._shoppingCartService.add(cartprice, cartid, pamount, pname);
    };
    AddButton = __decorate([
        core_1.Component({
            selector: 'add',
            template: "\n        <div class=\"add-btn\">\n        <button (click)=\"addToCart(pprice,pid,pamount,pname)\">\u653E\u5165\u8CFC\u7269\u8ECA</button> \n         </div>  \n    ",
            inputs: ['pprice', 'pid', 'pamount', 'pname']
        })
    ], AddButton);
    return AddButton;
}());
exports.AddButton = AddButton;
//# sourceMappingURL=cartbutton.component.js.map
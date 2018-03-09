"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var OrderAdminComponent = (function () {
    function OrderAdminComponent(orderService, userservice, router) {
        this.orderService = orderService;
        this.userservice = userservice;
        this.router = router;
        this.loggedIn = !!localStorage.getItem('auth_token'); //
    }
    OrderAdminComponent.prototype.ngOnInit = function () {
        this.getProducts();
        //
        if (this.userservice.isLoggedIn() == true) {
            if (localStorage.getItem('userid') == "32") {
                this.router.navigate(['/orderAdmin']);
            }
            else {
                this.router.navigate(['/']);
            }
        }
        else {
            this.router.navigate(['/member']);
        }
        ;
    };
    OrderAdminComponent.prototype.getProducts = function () {
        var _this = this;
        this.orderService.getProduct()
            .subscribe(function (orders) { return _this.orders = orders; }, function (error) { return _this.errorMessage = error; });
    };
    OrderAdminComponent.prototype.deleteData = function (id) {
        var r = window.confirm("Are you sure to delete??");
        if (r == true) {
            this.orderService.deleteData(id)
                .subscribe(function (response) {
            });
        }
    };
    OrderAdminComponent.prototype.update = function (id, status) {
        var _this = this;
        var data = {
            status: status
        };
        var r = window.confirm("Are you sure to update??");
        if (r == true) {
            this.orderService.updateData(id, data)
                .subscribe(function (data) { return _this.response = JSON.stringify(data); }, function (error) { return console.log(error); });
        }
    };
    OrderAdminComponent.prototype.gotoNewUpload = function () {
        this.router.navigate(['/newUpload']);
    };
    OrderAdminComponent.prototype.gotoUpload = function () {
        this.router.navigate(['/upload']);
    };
    OrderAdminComponent = __decorate([
        //+
        core_1.Component({
            template: "    \n    <div class=\"container\">\n    <div class=\"change\">\n    <div class=\"title-clothes\">\n        <div class=\"title-clothes-line\"></div>\u8A02\u55AE\u7BA1\u7406<div class=\"title-clothes-line2\"></div>\n        </div>\n    <table width=\"100%\"> \n    <tr>    \n        <td>\u8A02\u55AE\u7DE8\u865F</td>\n        <td>\u8A02\u55AE\u65E5\u671F</td>\n        <td>\u5546\u54C1\u5167\u5BB9</td>\n        <td>\u8A02\u55AE\u7E3D\u91D1\u984D</td> \n        <td>\u8A02\u55AE\u72C0\u6CC1</td>\n        <td>\u8CC7\u6599</td>\n        <td>\u4FEE\u6539\u72C0\u614B</td>\n        <td></td>\n        <td></td>\n    </tr>\n    <tr *ngFor=\"let o of orders\">  \n        <td>{{o.id}}</td>\n        <td>{{o.time}}</td>\n        <td><li *ngFor=\"let m of o.ordered_products\">{{m.name}}({{m.amount}}\u500B)</li></td>\n        <td>{{o.discount}}</td>\n        <td><div *ngIf=\"o.status==0\">\u672A\u51FA\u8CA8</div> <div *ngIf=\"o.status==1\">\u5DF2\u51FA\u8CA8</div> <div *ngIf=\"o.status==2\">\u5DF2\u9001\u9054</div></td>\n        <td>{{o.json_str}}<br>\u5546\u54C1\u7E3D\u50F9\uFF08\u4E0D\u542B\u904B\uFF09\uFF1A{{o.sum}}<br>\u904B\u8CBB\u6E1B\u514D\uFF1A{{o.sum + 60 - o.discount}}<br>\u904B\u8CBB\u6E1B\u514D\u5F8C\u50F9\u683C\uFF1A{{o.discount}}</td>\n        <td><select #status><option value=\"0\">\u672A\u51FA\u8CA8</option><option value=\"1\">\u5DF2\u51FA\u8CA8</option><option value=\"2\">\u5DF2\u9001\u9054</option></select></td>\n        <td><button (click)=\"update(o.id,status.value)\">\u4FEE\u6539</button></td>\n        <td><button (click)=\"deleteData(o.id)\">\u79FB\u9664</button></td>\n    \n    </tr>\n    \n    \n    </table>    \n    </div>\n    <div class=\"new_button\" style=\"text-align: center;margin-bottom: 30px;\">\n       <button style=\"color: white;background-color: #CC3366;border: none;\" (click)=\"gotoUpload()\">\u4E0A\u50B3\u5546\u54C1</button></div>\n    <div class=\"new_button\" style=\"text-align: center;margin-bottom: 30px;\">\n       <button style=\"color: white;background-color: #CC3366;border: none;\" (click)=\"gotoNewUpload()\">\u4E0A\u50B3\u6700\u65B0\u6D88\u606F</button></div>\n</div>\n    \n    ",
            styles: ["  \n     tr{\n     height:40px;\n     }\n     \n     table{\n     margin-bottom: 50px;\n     font-size: 20px;\n     }\n    "]
        })
    ], OrderAdminComponent);
    return OrderAdminComponent;
}());
exports.OrderAdminComponent = OrderAdminComponent;
//# sourceMappingURL=order-admin.component.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var order_service_1 = require("./order.service");
var ShoppingCart = (function () {
    function ShoppingCart(_shoppingCartService, orderService, userService, router) {
        this._shoppingCartService = _shoppingCartService;
        this.orderService = orderService;
        this.userService = userService;
        this.router = router;
    }
    ShoppingCart.prototype.ngOnInit = function () {
        this.carts = this._shoppingCartService.get();
        this.cartsid = this._shoppingCartService.getid();
        this.cartobj = this._shoppingCartService.getobj();
        this.cartsname = this._shoppingCartService.getname(); //name
        this.totalprice = this._shoppingCartService.getTotalPrice();
        this.getMembers(); //
    };
    ShoppingCart.prototype.getMembers = function () {
        var _this = this;
        this.userService.getMember()
            .subscribe(function (members) { return _this.members = members; }, function (error) { return _this.errorMessage = error; });
    };
    ShoppingCart.prototype.turnObj = function () {
        var _this = this;
        var stringIds = this.cartsid.map(String);
        var testObj = {};
        stringIds.forEach(function (id) { testObj[id] = _this._shoppingCartService.occurrence(id, _this.cartsid); });
        console.log(JSON.stringify(testObj));
        this.s = JSON.stringify(testObj);
        return JSON.stringify(testObj);
    };
    ShoppingCart.prototype.clear = function () {
        this._shoppingCartService.clear();
    };
    ShoppingCart.prototype.onPost = function (user, ordered_json_str, people, phone, way, address, otherdes, discount) {
        var _this = this;
        if (this.userService.isLoggedIn() == true) {
            var data = {
                user: user,
                ordered_json_str: ordered_json_str,
                discount: discount,
                json_str: JSON.stringify("訂購人：" + people + "，" + "聯絡電話：" + phone + "，" + "付款方式：" + way + "，" + "地址：" + address + "，" + "給賣家的話：" + otherdes + "。")
            };
            if (phone == "") {
                window.alert("請輸入電話");
            }
            else if (address == "") {
                window.alert("請輸入地址或店名");
            }
            else {
                var r = window.confirm("確定要結帳嗎??確定之後將不能更改!請檢查輸入資料是否有誤！");
                if (r == true) {
                    this.orderService.postData(data)
                        .subscribe(function (data) { return _this.response = JSON.stringify(data); }, function (error) { return console.log(error); });
                    this._shoppingCartService.clear();
                    this.router.navigate(['MemberLogin']);
                }
            }
        }
        else {
            window.alert("請先登入");
        }
    };
    ShoppingCart = __decorate([
        core_1.Component({
            selector: 'cart',
            template: "\n    <button type=\"button\" data-toggle=\"modal\" data-target=\"#myModal3\"><img src=\"img/shoppingcart.png\" height=\"32\" width=\"32\" alt=\"\"></button>\n     <div id=\"myModal3\" class=\"modal fade2\" role=\"dialog\" >\n         \n                      <div class=\"modal-dialog\">\n                    <!-- Modal content--><h2>\u8CFC\u7269\u8005\u6E05\u55AE</h2>\n                      <div class=\"modal-content\">\n                      <button type=\"button\" style=\"float:right;border: #b1b1b1 1px solid;margin: 10px;background-color: #ffffff;color:black;\" data-dismiss=\"modal\"><i class=\"fa fa-times\"></i></button>\n                      <div class=\"shopping-cart\">\n                      <div class=\"cart-table\" align=\"center\">\n                      <table width=\"90%\" >\n                         <tr style=\"background-color: black;color: white;border: none;font-size: 23px;\" height=\"40px\">   \n                            <td>\u5546\u54C1id / \u540D\u7A31</td>\n                            <td>\u5546\u54C1\u91D1\u984D</td>\n                            <td>\u6578\u91CF</td>\n                            <td>\u5C0F\u8A08</td>\n                            <td>\u8B8A\u66F4</td>\n                         </tr>\n                         \n                         \n                         \n                         <tr *ngFor='let product of cartobj;let i=index' style=\"font-size: 20px;color: black;\" height=\"60px\">   \n                            <td>{{product.id}} / {{product.name}}</td>\n                            <td>{{product.price}}</td>\n                            <td>{{product.amount}}</td>\n                            <td>{{product.price}}</td>\n                            <td><button (click)=\"_shoppingCartService.remove(i)\">\u79FB\u9664</button></td>                      \n                         </tr>\n                      \n                                                                              \n                     </table>\n                    <div *ngIf=\"_shoppingCartService.getTotalPrice() === 0\" align=\"center\" class=\"empty\">\u8CFC\u7269\u8ECA\u88E1\u9762\u6C92\u6709\u6771\u897F</div>\n                     </div>\n                     <div class=\"cart-bottom\">\n                     <br><br><br>\n                     <div class=\"cart-line\" align=\"center\"></div><br><br>\n                     <label>\u8A02\u8CFC\u4EBA\uFF1A</label><input class=\"CartaddressInput\"  [value]=\"members?.name\"  type=\"text\" #people><br><br>\n                     \n                      <label>\u624B\u6A5F\uFF1A</label><input class=\"CartaddressInput\" [value]=\"members?.phone\" type=\"text\" #phone><br><br> \n                      <!-- <label>\u96FB\u8A71\uFF08\u5E02\uFF09\uFF1A</label><inputtype=\"text\" #phone><br><br>  -->\n                      <label>\u4ED8\u6B3E\uFF06\u53D6\u8CA8\u65B9\u5F0F\uFF1A</label>\n                      <select [value]=\"members?.d_way\" #way> \n                      <option value=\"\u8F49\u5E33\u532F\u6B3E\uFF087-11\u53D6\u8CA8\uFF09\">\u8F49\u5E33\u532F\u6B3E\uFF087-11\u53D6\u8CA8\uFF09</option>\n                      <option value=\"\u8CA8\u5230\u4ED8\u6B3E\uFF087-11/\u5168\u5BB6/\u840A\u723E\u5BCC)\">\u8CA8\u5230\u4ED8\u6B3E\uFF087-11/\u5168\u5BB6/\u840A\u723E\u5BCC)</option>\n                      <option value=\"\u8F49\u5E33\u532F\u6B3E\uFF08\u90F5\u5C40\u5BC4\u9001)\">\u8F49\u5E33\u532F\u6B3E\uFF08\u90F5\u5C40\u5BC4\u9001)</option>\n                      \n                     \n                      </select><br><br>\n                     <label>\u5730\u5740/\u5E97\u540D\uFF1A</label><input class=\"CartaddressInput\" type=\"text\"  [value]=\"members?.d_address\" #address><br><br>\n                     \n                     <label>\u7D66\u8CE3\u5BB6\u7684\u8A71\uFF1A</label><br><textarea class=\"otherTextarea\" type=\"text\" #otherdes rows=\"4\" cols=\"10\"></textarea>\n                     <!-- <input type=\"text\" #otherdes><br><br> -->\n                     \n                     <div class=\"cart-line\" align=\"center\"></div>\n                     <div class=\"shoppingcartAmountText\">\n                    <table class=\"tg\" style=\"border-style:none;table-layout: fixed;color: black;\">\n                    <colgroup>\n                    <col style=\"width: 67px\">\n                    <col style=\"width: 220px\">\n                    <col style=\"width: 21px\">\n                    <col style=\"width: 46px\">\n                    <col style=\"width: 70px\">\n                    <col style=\"width: 87px\">\n                    </colgroup>\n                      <tr>\n                        <th class=\"tg-lqy6\" colspan=\"2\">\u8CFC\u7269\u8ECA\u5171\u6709{{_shoppingCartService.getTotalAmount()}}\u9805\u5546\u54C1\uFF0C\u5546\u54C1\u91D1\u984D\u5171{{_shoppingCartService.getTotalPrice()}}\u5143</th>\n                        <th class=\"tg-yw4l\"></th>\n                        <th class=\"tg-yw4l\"></th>\n                        <th class=\"tg-yw4l\"></th>\n                        <th class=\"tg-yw4l\"></th>\n                      </tr>\n                      <tr>\n                      <td *ngIf=\"members?.phone_number==='VIP\u6703\u54E1'\" class=\"tg-lqy6 vip\" colspan=\"2\">VIP\u512A\u60E0\u6253\u6298\u5F8C\u70BA{{_shoppingCartService.getTotalPrice()*0.95}}\u5143</td>\n                         <td class=\"tg-yw4l\" colspan=\"3\"></td>\n                      </tr>\n                      <tr>\n                        <td class=\"tg-yw4l\">+</td>\n                        <td *ngIf=\"members?.phone_number==='VIP\u6703\u54E1' && _shoppingCartService.getTotalPrice()*0.95 >= 1200\" class=\"tg-lqy6\">\u512A\u60E0\u5F8C\u6EFF1200\u514D\u904B</td>\n                        <td *ngIf=\"members?.phone_number==='VIP\u6703\u54E1' && _shoppingCartService.getTotalPrice()*0.95 < 1200\" class=\"tg-lqy6\">\u512A\u60E0\u5F8C\u672A\u6EFF1200\u904B\u8CBB60\u5143</td>\n                         <td *ngIf=\"members?.phone_number!='VIP\u6703\u54E1' && _shoppingCartService.getTotalPrice() >= 1200\" class=\"tg-lqy6\">\u6EFF1200\u514D\u904B</td>\n                        <td *ngIf=\"members?.phone_number!='VIP\u6703\u54E1' && _shoppingCartService.getTotalPrice() < 1200\" class=\"tg-lqy6\">\u672A\u6EFF1200\u904B\u8CBB60\u5143</td>\n                        <td class=\"tg-yw4l\"></td>\n                        <td class=\"tg-yw4l\"></td>\n                        <td class=\"tg-yw4l\"></td>\n                        <td class=\"tg-yw4l\"></td>\n                      </tr>\n                      <!-- <tr>\n                        <td class=\"tg-yw4l\"></td>\n                        <td></td>\n                        <td class=\"tg-yw4l\" style=\"text-align: right;\">\u904B\u8CBB\u6E1B\u514D<input style=\"width: 80px;\" type=\"number\" name=\"discount\" value=\"0\" #discount>\u5143</td>\n                        <td class=\"tg-yw4l\"></td>\n                        <td class=\"tg-yw4l\"></td>\n                        <td class=\"tg-yw4l\"></td>\n                        <td class=\"tg-yw4l\"></td>\n                      </tr> -->\n                      <tr>\n                        <td class=\"tg-yw4l\" colspan=\"6\"></td>\n                      </tr>\n                      <tr style=\"border-top: black 1.5px solid;\" >\n                         <td *ngIf=\"members?.phone_number==='VIP\u6703\u54E1' && _shoppingCartService.getTotalPrice()*0.95 >= 1200\" class=\"tg-lqy6\" colspan=\"2\">\u8A02\u55AE\u91D1\u984D{{_shoppingCartService.getTotalPrice()*0.95 }}\u5143(\u5C0F\u6578\u9EDE\u7701\u53BB)</td>\n                          <td *ngIf=\"members?.phone_number==='VIP\u6703\u54E1' && _shoppingCartService.getTotalPrice()*0.95 < 1200\" class=\"tg-lqy6\" colspan=\"2\">\u8A02\u55AE\u91D1\u984D{{_shoppingCartService.getTotalPrice()*0.95+60}}\u5143(\u5C0F\u6578\u9EDE\u7701\u53BB)</td>\n\n                          <td *ngIf=\"members?.phone_number!='VIP\u6703\u54E1' && _shoppingCartService.getTotalPrice() >= 1200\" class=\"tg-lqy6\" colspan=\"2\">\u8A02\u55AE\u91D1\u984D{{_shoppingCartService.getTotalPrice()}}\u5143</td>\n                         <td *ngIf=\"members?.phone_number!='VIP\u6703\u54E1' && _shoppingCartService.getTotalPrice() < 1200\" class=\"tg-lqy6\" colspan=\"2\">\u8A02\u55AE\u91D1\u984D{{_shoppingCartService.getTotalPrice()+60}}\u5143</td>\n                         <td class=\"tg-yw4l\" colspan=\"3\"></td>\n                         \n                       <!--  <td></td> -->\n                          <td class=\"tg-yw4l\" ></td>\n                                                \n\n\n                      </tr>\n                      \n                     <!-- <tr *ngIf=\"members?.phone_number==='VIP\u6703\u54E1' && _shoppingCartService.getTotalPrice() >= 1200\">\n                        <td colspan=\"4\" style=\"text-align: right;\">=> \u4FEE\u6539\u5F8C\u91D1\u984D<input style=\"width: 80px;display: inline-block;\" value=\"{{_shoppingCartService.getTotalPrice()*0.95}}\" type=\"number\" #discount>\u5143</td>\n\n                        <td colspan=\"2\" class=\"tg-yw4l\"></td>\n                      </tr> \n                      <tr *ngIf=\"members?.phone_number!='VIP\u6703\u54E1'\">\n                        <td colspan=\"4\" style=\"text-align: right;\">=> \u4FEE\u6539\u5F8C\u91D1\u984D<input style=\"width: 80px;display: inline-block;\" value=\"{{_shoppingCartService.getTotalPrice()+60}}\" type=\"number\" #discount>\u5143</td>\n\n                        <td colspan=\"2\" class=\"tg-yw4l\"></td>\n                      </tr>-->\n                    </table>\n                    </div>\n                    <!--  <p >\u8CFC\u7269\u8ECA\u5171\u6709{{_shoppingCartService.getTotalAmount()}}\u9805\u5546\u54C1\uFF0C\u5546\u54C1\u91D1\u984D\u5171{{_shoppingCartService.getTotalPrice()}} \u5143</p> \n                    <p><span>+</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\u904B\u8CBB60 \u5143</p>-->\n                      \n                     <button (click)=\"clear()\">\u6E05\u9664</button>\n                     <button *ngIf=\"members?.phone_number==='VIP\u6703\u54E1' && _shoppingCartService.getTotalPrice()*0.95 >= 1200\" (click)=\"turnObj();onPost(userService.usernum(),s,people.value,phone.value,way.value,address.value,otherdes.value,_shoppingCartService.getTotalPrice()*0.95);\">\u9001\u51FA\u8A02\u55AE</button>\n                     <button *ngIf=\"members?.phone_number==='VIP\u6703\u54E1' && _shoppingCartService.getTotalPrice()*0.95 < 1200\" (click)=\"turnObj();onPost(userService.usernum(),s,people.value,phone.value,way.value,address.value,otherdes.value,_shoppingCartService.getTotalPrice()*0.95+60);\">\u9001\u51FA\u8A02\u55AE</button>\n                   \n                     <button *ngIf=\"members?.phone_number!='VIP\u6703\u54E1' && _shoppingCartService.getTotalPrice() >= 1200\" (click)=\"turnObj();onPost(userService.usernum(),s,people.value,phone.value,way.value,address.value,otherdes.value,_shoppingCartService.getTotalPrice());\">\u9001\u51FA\u8A02\u55AE</button>\n                     <button *ngIf=\"members?.phone_number!='VIP\u6703\u54E1' && _shoppingCartService.getTotalPrice() < 1200\" (click)=\"turnObj();onPost(userService.usernum(),s,people.value,phone.value,way.value,address.value,otherdes.value,_shoppingCartService.getTotalPrice()+60);\">\u9001\u51FA\u8A02\u55AE</button>\n\n                     </div>\n       \n    </div>\n   </div>\n   </div>    \n                  </div>\n    \n    ",
            styles: ["\n    \n    \n    \n    \n   \n  "],
            inputs: ['s', 'totalprice'],
            providers: [order_service_1.OrderService]
        })
    ], ShoppingCart);
    return ShoppingCart;
}());
exports.ShoppingCart = ShoppingCart;
//# sourceMappingURL=shoppoingcart.component.js.map
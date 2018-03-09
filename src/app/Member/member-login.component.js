"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var MemberLoginComponent = (function () {
    function MemberLoginComponent(userservice, router) {
        this.userservice = userservice;
        this.router = router;
    }
    MemberLoginComponent.prototype.ngOnInit = function () {
        //this.members = {};
        this.getMembers();
        this.getOrders();
        if (this.userservice.isLoggedIn() != true) {
            this.router.navigate(['Member']);
        }
        ;
    };
    MemberLoginComponent.prototype.getMembers = function () {
        var _this = this;
        this.userservice.getMember()
            .subscribe(function (members) {
            console.log(members);
            _this.members = members;
        }, function (error) { return _this.errorMessage = error; });
        this.members = this.userservice.getMemberData(); // new
    };
    MemberLoginComponent.prototype.getOrders = function () {
        var _this = this;
        this.userservice.getOrder()
            .subscribe(function (orders) { return _this.orders = orders; }, function (error) { return _this.errorMessage = error; });
        /*for(var o in this.orders){
            var dateStr =  o.time;
            dateStr =dateStr.replace(/T.*$/," - ");
            o.time = dateStr.slice(0, -7);
        }*/
    };
    MemberLoginComponent.prototype.update = function (name, email, d_way, d_address, phone) {
        var _this = this;
        var data = {
            name: name,
            email: email,
            d_way: d_way ? d_way : '',
            d_address: d_address,
            phone: phone
        };
        var r = window.confirm("確定更新資料嗎？");
        if (r == true) {
            this.userservice.updateData(data)
                .subscribe(function (data) {
                _this.response = JSON.stringify(data);
                window.location.reload();
            }, function (error) { return console.log(error); });
        }
    };
    MemberLoginComponent.prototype.forceUpdate = function (password) {
        var _this = this;
        var data = {
            password: password
        };
        var r = window.confirm("確定強制更新密碼嗎？");
        if (r == true) {
            this.userservice.updateData(data)
                .subscribe(function (data) { return _this.response = JSON.stringify(data); }, function (error) { return console.log(error); });
        }
    };
    MemberLoginComponent.prototype.logout = function () {
        this.members = null;
        this.userservice.logout();
        this.router.navigate(['']); // new
        location.reload(); // new
    };
    MemberLoginComponent.prototype.checkPassword = function (identity, old_password, password) {
        var _this = this;
        var data = {
            identity: identity,
            old_password: old_password
        };
        var data2 = {
            password: password
        };
        if (password == "") {
            window.alert("新密碼不可為空！");
        }
        else {
            this.userservice.checkPassword(identity, old_password)
                .subscribe(function (data) {
                var r = window.confirm("確定更改密碼？");
                if (r == true) {
                    _this.userservice.updateData(data2)
                        .subscribe(function (data) {
                        _this.response = JSON.stringify(data2);
                        window.alert("密碼修改成功！");
                        //console.log(data2);
                    }, function (error) { return console.log(error); }); //undone
                }
            }, function (error) { console.log(error), window.alert("密碼有誤，請重新輸入"); });
        }
        console.log("rr");
        console.log("nwqn");
    };
    MemberLoginComponent.prototype.localTime = function () {
        var _this = this;
        this.userservice.getOrder()
            .subscribe(function (orders) { return _this.orders = orders; }, function (error) { return _this.errorMessage = error; });
        //orders.map(this.time = this.time+"WWWWW");
    };
    MemberLoginComponent = __decorate([
        core_1.Component({
            selector: 'memeber-login',
            template: "\n    <div class=\"big-member-login\">\n        <div class=\"middle-box\"><br>\n        <h2>\u6703\u54E1\u8CC7\u6599</h2><button (click)=\"logout()\">\u767B\u51FA</button><br>\n        <div class=\"line-member-login\"></div><br>\n        <div class=\"member-login\">\n        <div class=\"left-login\">\n\n          <p>\u59D3\u540D&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=\"text\" name=\"\u6B04\u4F4D\u540D\u7A31\" value=\"{{members?.name}}\" #username></p>\n          <p style=\"display:none;\">\u4F7F\u7528\u8005\u5E33\u865F<input type=\"text\" name=\"\u6B04\u4F4D\u540D\u7A31\" value=\"{{members?.identity}}\" #identity>{{members?.identity}}</p>\n          <p>\u6703\u54E1\u7B49\u7D1A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{members?.phone_number}}</p>\n          <p>\u539F\u4F86\u5BC6\u78BC<input type=\"text\" name=\"\u6B04\u4F4D\u540D\u7A31\" value=\"{{members?.password}}\" #old_password></p>\n        \n          <p>\u5BC6\u78BC\u4FEE\u6539<input type=\"text\" id=\"requirePw\" name=\"\u6B04\u4F4D\u540D\u7A31\" value=\"{{members?.password}}\" #password></p>\n        </div>\n        <div class=\"right-login\">   \n        <p>\u5E33\u865F&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{members?.identity}}</p>\n        <input style=\"display:none;\" type=\"text\" name=\"\u6B04\u4F4D\u540D\u7A31\" value=\"{{members?.email}}\" #email>\n        <p>\u9810\u8A2D\u4ED8\u6B3E\u65B9\u5F0F <select  [value]=\"members?.d_way\" style=\"width:200px;\" #way>  \n                      <option value=\"\u8F49\u5E33\u532F\u6B3E\uFF087-11\u53D6\u8CA8\uFF09\">\u8F49\u5E33\u532F\u6B3E\uFF087-11\u53D6\u8CA8\uFF09</option>\n                      <option value=\"\u8CA8\u5230\u4ED8\u6B3E\uFF087-11/\u5168\u5BB6/\u840A\u723E\u5BCC)\">\u8CA8\u5230\u4ED8\u6B3E\uFF087-11/\u5168\u5BB6/\u840A\u723E\u5BCC)</option>\n                      <option value=\"\u8F49\u5E33\u532F\u6B3E\uFF08\u90F5\u5C40\u5BC4\u9001)\">\u8F49\u5E33\u532F\u6B3E\uFF08\u90F5\u5C40\u5BC4\u9001)</option>\n                    </select></p>\n        <p>\u5730\u5740/\u5E97\u540D<input type=\"text\" name=\"\u6B04\u4F4D\u540D\u7A31\" value=\"{{members?.d_address}}\" #d_address></p>\n        <p>\u624B\u6A5F&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=\"text\" name=\"\u6B04\u4F4D\u540D\u7A31\" value=\"{{members?.phone}}\" #phone></p>\n        \n        <!-- <button (click)=\"forceUpdate(password.value)\">\u5F37\u5236\u4FEE\u6539\u5BC6\u78BC</button> -->\n        <button id=\"changePw\" (click)=\"checkPassword(identity.value,old_password.value,password.value)\">\u4FEE\u6539\u5BC6\u78BC</button>\n        <button (click)=\"update(username.value,email.value, way.value, d_address.value,phone.value)\">\u5132\u5B58\u4FEE\u6539(\u4E0D\u542B\u5BC6\u78BC)</button>\n        </div>\n        </div>     \n    </div></div>\n    \n    <div class=\"container\">\n    <div class=\"title-member-login\">\n        <div class=\"title-member-login-line\"></div>\u8A02\u55AE\u660E\u7D30\u67E5\u8A62<div class=\"title-member-login-line2\"></div>\n        </div>\n    <div class=\"table-clothes\"> \n      \n    <table width=\"100%\">\n    <tr style=\"background-color:gray;\">\n    \n    <td>\u8A02\u55AE\u7DE8\u865F</td>\n    <td>\u4E0B\u55AE\u65E5\u671F</td>\n    <td>\u8A02\u55AE\u5167\u5BB9</td>\n    <td>\u8A02\u55AE\u72C0\u614B</td>\n    <td>\u7E3D\u91D1\u984D</td>\n    \n    </tr>\n    \n    <tr  *ngFor=\"let o of orders\">\n    <td>{{o.id}}</td>\n    <script>\n\n    </script>\n    <td class=\"hideTime\">{{o.time}}</td>\n    <td *ngIf=\"members?.phone_number==='VIP\u6703\u54E1' && o.sum*0.95 >= 1200\"><li *ngFor=\"let m of o.ordered_products\">{{m.name}}  ({{m.amount}}\u500B)</li><p style=\"background-color:#c7c7c7\">{{o.json_str}}<br>\u5546\u54C1\u7E3D\u50F9\uFF08\u4E0D\u542B\u904B\uFF09\uFF1A{{o.sum}}<br>VIP\u512A\u60E0\u5F8C\uFF1A{{o.sum*0.95}}<br>\u904B\u8CBB\uFF1A0<br></p></td>\n    <td *ngIf=\"members?.phone_number==='VIP\u6703\u54E1' && o.sum*0.95 < 1200\"><li *ngFor=\"let m of o.ordered_products\">{{m.name}}  ({{m.amount}}\u500B)</li><p style=\"background-color:#c7c7c7\">{{o.json_str}}<br>\u5546\u54C1\u7E3D\u50F9\uFF08\u4E0D\u542B\u904B\uFF09\uFF1A{{o.sum}}<br>VIP\u512A\u60E0\u5F8C\uFF1A{{o.sum*0.95}}<br>\u904B\u8CBB\uFF1A60<br></p></td>\n    <td *ngIf=\"members?.phone_number!='VIP\u6703\u54E1' && o.sum >= 1200\"><li *ngFor=\"let m of o.ordered_products\">{{m.name}}  ({{m.amount}}\u500B)</li><p style=\"background-color:#c7c7c7\">{{o.json_str}}<br>\u5546\u54C1\u7E3D\u50F9\uFF08\u4E0D\u542B\u904B\uFF09\uFF1A{{o.sum}}<br>\u904B\u8CBB\uFF1A0<br></p></td>\n    <td *ngIf=\"members?.phone_number!='VIP\u6703\u54E1' && o.sum < 1200\"><li *ngFor=\"let m of o.ordered_products\">{{m.name}}  ({{m.amount}}\u500B)</li><p style=\"background-color:#c7c7c7\">{{o.json_str}}<br>\u5546\u54C1\u7E3D\u50F9\uFF08\u4E0D\u542B\u904B\uFF09\uFF1A{{o.sum}}<br>\u904B\u8CBB\uFF1A60<br></p></td>\n\n    <td><div *ngIf=\"o.status==0\">\u672A\u51FA\u8CA8</div> <div *ngIf=\"o.status==1\">\u5DF2\u51FA\u8CA8</div> <div *ngIf=\"o.status==2\">\u5DF2\u9001\u9054</div>   </td>\n    <td>{{o.discount}}</td>\n    </tr>\n\n    </table>\n    </div>\n    <div class=\"member-email\">\n    \n    \n    </div>\n    \n    </div>\n    "
        })
    ], MemberLoginComponent);
    return MemberLoginComponent;
}());
exports.MemberLoginComponent = MemberLoginComponent;
//# sourceMappingURL=member-login.component.js.map
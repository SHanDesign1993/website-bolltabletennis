"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var MemberAdminComponent = (function () {
    function MemberAdminComponent(memberService, userservice, router) {
        this.memberService = memberService;
        this.userservice = userservice;
        this.router = router;
        //this.loggedIn = !!localStorage.getItem('auth_token');//
    }
    MemberAdminComponent.prototype.ngOnInit = function () {
        this.getMembers();
        if (this.userservice.isLoggedIn() == true) {
            if (localStorage.getItem('userid') == '32') {
                console.log("member_admin");
                this.router.navigate(['/MemberAdmin']); //specialForThisPage
            }
            else {
                console.log("member_adminhome");
                this.router.navigate(['/']);
            }
        }
        else {
            this.router.navigate(['/member']);
        }
        ;
    };
    MemberAdminComponent.prototype.getMembers = function () {
        var _this = this;
        this.memberService.getMembers()
            .subscribe(function (members) { return _this.members = members; }, function (error) { return _this.errorMessage = error; });
    };
    MemberAdminComponent.prototype.resetPw = function (id, phone_number) {
        var _this = this;
        var data = {
            phone_number: phone_number
        };
        var r = window.confirm("Are you sure to update??");
        if (r == true) {
            this.memberService.updateData(id, data)
                .subscribe(function (data) { return _this.response = JSON.stringify(data); }, function (error) { return console.log(error); });
        }
        location.reload();
    };
    MemberAdminComponent.prototype.deleteData = function (id) {
        var r = window.confirm("Are you sure to delete??");
        if (r == true) {
            this.memberService.deleteData(id)
                .subscribe(function (response) {
            });
        }
    };
    MemberAdminComponent = __decorate([
        //+
        core_1.Component({
            template: "    \n    <div class=\"container\">\n    <div class=\"change\">\n    <div class=\"title-clothes\">\n        <div class=\"title-clothes-line\"></div>\u8A02\u55AE\u7BA1\u7406<div class=\"title-clothes-line2\"></div>\n        </div>\n    <table width=\"100%\"> \n    <tr>    \n        <td>\u7DE8\u865F</td>\n        <td>\u5E33\u865F</td>\n        <td>\u59D3\u540D</td>\n        <!-- <td>\u4FE1\u7BB1</td> -->\n        <td>\u624B\u6A5F</td>\n        <td>\u6703\u54E1\u7B49\u7D1A</td>\n        <td>\n            <!-- <input style=\"max-width: 50px;\" type=\"text\" name=\"\u6B04\u4F4D\u540D\u7A31\" value=\"\" #defaultPw> -->\n        </td>\n        <td></td>\n    </tr>\n    <tr *ngFor=\"let o of members\">\n    \n        <td>{{o.id}}</td>\n        <td>{{o.identity}}</td>\n        <td>{{o.name}}</td>\n        <!-- <td>{{o.email}}</td> -->\n        <td>{{o.phone}}</td>\n        <td><input type=\"text\" value=\"{{o.phone_number}}\" #vip></td>\n        <td><button (click)=\"resetPw(o.id,vip.value);\">\u4FEE\u6539</button></td>\n        <td><button (click)=\"deleteData(o.id);\">\u79FB\u9664</button></td>\n    </tr>\n    \n    </table>    \n    </div>\n</div>\n    \n    ",
            styles: ["  \n     tr{\n     height:40px;\n     }\n     \n     table{\n     margin-bottom: 50px;\n     font-size: 20px;\n     }\n     button{\n     background-color: #CC3366;\n     color:white;\n     border: none;\n     }\n     \n    "]
        })
    ], MemberAdminComponent);
    return MemberAdminComponent;
}());
exports.MemberAdminComponent = MemberAdminComponent;
//# sourceMappingURL=member-admin.component.js.map
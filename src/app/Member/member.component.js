"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var MemberComponent = (function () {
    function MemberComponent(router, memberservice, userservice) {
        this.router = router;
        this.memberservice = memberservice;
        this.userservice = userservice;
    }
    MemberComponent.prototype.gotoLogin = function () {
        this.router.navigate(['MemberLogin']);
    };
    MemberComponent.prototype.ngOnInit = function () {
        this.getProducts();
        if (this.userservice.isLoggedIn() == true) {
            this.router.navigate(['MemberLogin']);
        }
        ;
    };
    MemberComponent.prototype.getProducts = function () {
        var _this = this;
        this.memberservice.getMembers()
            .subscribe(function (members) { return _this.members = members; }, function (error) { return _this.errorMessage = error; });
    };
    MemberComponent.prototype.onPost = function (name, identity, password, phone_number) {
        var _this = this;
        var data = {
            name: name,
            identity: identity,
            password: password,
            email: identity,
            phone_number: phone_number
        };
        this.memberservice.postData(data)
            .subscribe(function (data) { _this.response = JSON.stringify(data), window.alert("註冊成功!"); }, function (error) { console.log(error), window.alert("註冊失敗！請檢查信箱格式或是已申請過！"); });
    };
    MemberComponent.prototype.Submit = function (identity, password) {
        var _this = this;
        var data = {
            identity: identity,
            password: password
        };
        this.userservice.login(identity, password)
            .subscribe(
        //     (result) => { this.result = result;
        // if (typeof (result=='undefined') ){ //result
        //     console.log("if result True->" + result);
        //    //  this.router.navigate(['SearchResult']); //-->router controll in user.servise.ts
        // }
        // else{
        //     //console.log("if result !=True->" + result);
        //     window.alert("帳號或密碼有誤，請重新輸入") //result->undefined, success
        // }
        //     }
        function (data) { console.log("great!"); _this.router.navigate(['']); location.reload(); }, // new
        function (// new
            error) { console.log(error), window.alert("帳號或密碼有誤，請重新輸入"); });
    };
    MemberComponent = __decorate([
        core_1.Component({
            template: "\n\n        <div class=\"big-member\">\n       \n        <div class=\"middle-box-member\">\n        \n        <div class=\"member-left\">\n        <div class=\"member-leftinfo\">\n        <h2>\u6CE2\u723E\u684C\u7403\u6703\u54E1\u767B\u5165</h2>\n        <p>\u96FB\u5B50\u4FE1\u7BB1 E-mail</p>\n        \n        \n        <input required type=\"text\" name=\"\u6B04\u4F4D\u540D\u7A31\" #identity2>\n        <p>\u5BC6\u78BC Password</p>\n        <input type=\"password\" name=\"\u6B04\u4F4D\u540D\u7A31\" #password2>\n        <div class=\"member-footer\">\n        <div class=\"footer-left\">\n        <button (click)=\"Submit(identity2.value,password2.value)\">\u767B\u5165</button>\n        \n        </div>\n        <div class=\"footer-right\">\n        \n        </div>\n        \n        </div>\n        \n        </div> \n        </div>\n        \n        <div class=\"member-right\">\n        <div class=\"member-rightinfo\">\n        <h2>\u6703\u54E1\u8A3B\u518A</h2>\n        <p>\u59D3\u540D Name</p>\n        <input type=\"text\" id=\"name\" #name>\n        <p>\u96FB\u5B50\u4FE1\u7BB1 E-mail</p>\n        <input type=\"text\" name=\"identity\" #identity>\n        <p>\u5BC6\u78BC Password</p>\n        <input type=\"text\" name=\"password\" #password>\n        <div class=\"member-rightfooter\">\n        <button (click)=\"onPost(name.value,identity.value,password.value,'\u4E00\u822C\u6703\u54E1');name.value='';identity.value='';password.value='';\">\u8A3B\u518A</button>\n        </div>\n        \n        </div>\n        </div>\n        \n        \n        </div>\n        \n        </div>\n        \n        \n        <div class=\"container\">\n        </div>\n    "
        })
    ], MemberComponent);
    return MemberComponent;
}());
exports.MemberComponent = MemberComponent;
//# sourceMappingURL=member.component.js.map
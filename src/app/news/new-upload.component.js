"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var new_service_1 = require("./new.service");
var member_service_1 = require("../member.service"); //+
var NewUploadComponent = (function () {
    function NewUploadComponent(newservice, http, memberservice, userservice, router) {
        this.newservice = newservice;
        this.http = http;
        this.memberservice = memberservice;
        this.userservice = userservice;
        this.router = router;
        this.loggedIn = !!localStorage.getItem('auth_token'); //
    }
    NewUploadComponent.prototype.ngOnInit = function () {
        this.getNews();
        //
        if (this.userservice.isLoggedIn() == true) {
            if (localStorage.getItem('userid') == "32") {
                console.log("New_Upload");
                this.router.navigate(['/newUpload']);
            }
            else {
                this.router.navigate(['/']);
            }
        }
        else {
            this.router.navigate(['/member']);
        }
        ;
        //
    };
    NewUploadComponent.prototype.update = function (id, title, content) {
        var _this = this;
        var data = {
            title: title,
            content: content
        };
        var r = window.confirm("Are you sure to update??");
        if (r == true) {
            this.newservice.updateData(id, data)
                .subscribe(function (data) { return _this.response = JSON.stringify(data); }, function (error) { return console.log(error); });
        }
    };
    NewUploadComponent.prototype.onPost = function (title, content, author) {
        var _this = this;
        var data = {
            title: title,
            content: content,
            author: author
        };
        this.newservice.postNews(data)
            .subscribe(function (data) { return _this.response = JSON.stringify(data); }, function (error) { return console.log(error); }, function () { return window.alert("上傳成功"); });
    };
    NewUploadComponent.prototype.getNews = function () {
        var _this = this;
        this.newservice.getNews()
            .subscribe(function (products) { return _this.new = products; }, function (error) { return _this.errorMessage = error; });
    };
    NewUploadComponent.prototype.deleteData = function (id) {
        var r = window.confirm("Are you sure to delete??");
        if (r == true) {
            this.newservice.deleteData(id)
                .subscribe(function (response) {
            });
        }
    };
    NewUploadComponent.prototype.gotoOrder = function () {
        this.router.navigate(['/orderAdmin']);
    };
    NewUploadComponent.prototype.gotoUpload = function () {
        this.router.navigate(['/upload']);
    };
    NewUploadComponent = __decorate([
        //+
        core_1.Component({
            template: " \n    <div class=\"big-about\"> \n        </div>\n        \n        <div class=\"container\">\n        <div class=\"title-clothes\">\n        <div class=\"title-clothes-line\"></div>\u4E0A\u50B3\u6D88\u606F<div class=\"title-clothes-line2\"></div>\n        </div>\n       </div>\n    <div class=\"container\">\n    <label for=\"name\">Title\uFF1A</label>\n    <input type=\"text\" #title>\n    <div class=\"upload_content\">\n    <label for=\"name\">Content\uFF1A</label>\n    <!--<input type=\"text\" #content>-->\n    <textarea class=\"newsUploadTextarea\" type=\"text\" #content rows=\"4\" cols=\"50\"></textarea>\n    <button (click)=\"onPost(title.value,content.value,'');title.value='';content.value='';\">Upload</button>\n    </div>\n    <div class=\"title-clothes\">\n        <div class=\"title-clothes-line\"></div>\u6D88\u606F\u7BA1\u7406<div class=\"title-clothes-line2\"></div>\n        </div>\n        <div class=\"news_table\">\n        <table width=\"100%\"> \n        <tr>    \n        <td>\u6A19\u984C</td>\n        <td>\u5167\u5BB9</td>\n        <td>\u522A\u9664</td>\n        <td>\u4FEE\u6539</td>\n        </tr>\n        <tr *ngFor=\"let n of new\">    \n        <td><input type=\"text\" value={{n.title}} #utitle></td>\n        <td><textarea type=\"text\" value={{n.content}} #ucontent rows=\"4\" cols=\"10\"></textarea></td>\n        <!-- <td><input type=\"text\" value={{n.content}} #ucontent></td> -->\n        <td><button (click)=\"deleteData(n.id)\">\u522A\u9664</button></td>\n        <td><button (click)=\"update(n.id,utitle.value,ucontent.value)\">\u4FEE\u6539</button></td>\n        </tr>\n        \n        </table>\n        </div>\n        <div class=\"new_button\" style=\"text-align: center;margin-bottom: 30px;\">\n        <button style=\"color: white;background-color: #CC3366;border: none; float: none!important;\" (click)=\"gotoOrder()\">\u8A02\u55AE\u7BA1\u7406</button></div>\n        <div class=\"new_button\" style=\"text-align: center;margin-bottom: 30px;\">\n        <button style=\"color: white;background-color: #CC3366;border: none; float: none!important;\" (click)=\"gotoUpload()\">\u4E0A\u50B3\u5546\u54C1</button></div> \n        \n        </div>\n    ",
            providers: [new_service_1.NewService, member_service_1.MemberService]
        })
    ], NewUploadComponent);
    return NewUploadComponent;
}());
exports.NewUploadComponent = NewUploadComponent;
//# sourceMappingURL=new-upload.component.js.map
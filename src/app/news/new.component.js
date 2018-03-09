"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var new_service_1 = require("./new.service");
var NewComponent = (function () {
    function NewComponent(newservice, router) {
        this.newservice = newservice;
        this.router = router;
    }
    NewComponent.prototype.ngOnInit = function () {
        this.getNews();
    };
    NewComponent.prototype.select2 = function (title, content) {
        this.newservice.add(title, content);
    };
    NewComponent.prototype.getNews = function () {
        var _this = this;
        this.newservice.getNews()
            .subscribe(function (products) { return _this.new = products; }, function (error) { return _this.errorMessage = error; });
    };
    NewComponent.prototype.gotoNewDetail = function () {
        this.router.navigate(['newdetail']);
    };
    NewComponent = __decorate([
        core_1.Component({
            template: "    \n    <div class=\"big-about\">\n       \n        <div class=\"middle-box\"><br>\n        <h2>\u6700\u65B0\u6D88\u606F</h2><br>\n        <div class=\"line-about\"></div><br>\n        <p>\u95DC\u65BC\u672C\u5E97\u8FD1\u6CC1\u53CA\u5546\u54C1\u7684\u6700\u65B0\u6D88\u606F\u7686\u6703\u5728\u6B64\u4E0D\u5B9A\u671F\u767C\u4F48\uFF01\uFF01\uFF01\n        </p>\n        </div></div>\n        <div class=\"container\">\n        <div class=\"title-clothes\">\n        <div class=\"title-clothes-line\"></div>\u6700\u65B0\u6D88\u606F<div class=\"title-clothes-line2\"></div>\n        </div>\n        <div class=\"cool\"> <button *ngFor=\"let n of new\" (click)=\"select2(n.title,n.content);gotoNewDetail();\">{{n.title}}<br><br></button></div>\n\t\t\t\t\t\n        \n        \n       </div>\n    ",
            providers: [new_service_1.NewService],
            styles: ["    \n    .cool button{\n    float: left;\n    background-color: white;\n    margin-left: 30px;\n    border: none;\n    \n    }\n    \n    .cool{\n    width:700px;\n    font-size: 18px;\n    font-weight: bold;\n    }\n    \n   \n    .container{\n    margin-bottom: 30px;\n    }\n    \n    "],
            inputs: ['ptitle', 'pcontent']
        })
    ], NewComponent);
    return NewComponent;
}());
exports.NewComponent = NewComponent;
//# sourceMappingURL=new.component.js.map
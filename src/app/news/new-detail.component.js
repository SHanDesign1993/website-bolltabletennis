"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var newdetailComponent = (function () {
    function newdetailComponent(newservice, router) {
        this.newservice = newservice;
        this.router = router;
    }
    newdetailComponent.prototype.ngOnInit = function () {
        this.ptitle = this.newservice.getTitle();
        console.log(this.ptitle);
        this.pcontent = this.newservice.getContent();
    };
    newdetailComponent.prototype.gotoNew = function () {
        this.router.navigate(['new']);
    };
    newdetailComponent = __decorate([
        core_1.Component({
            template: "    \n    <div class=\"big-about\">\n       \n        <div class=\"middle-box\"><br>\n        <h2>\u6700\u65B0\u6D88\u606F</h2><br>\n        <div class=\"line-about\"></div><br>\n        <p>\u95DC\u65BC\u6CE2\u723E\u7684\u6700\u65B0\u6D88\u606F\uFF01\n        </p>\n        </div></div>\n        <div class=\"container\">\n        <div class=\"title-clothes\">\n        {{ptitle}}\n        </div>\t\t\t\t\t\n        \n        <p class=\"news_content_wrap\">{{pcontent}}</p>\n       </div>\n       <div class=\"new_button\" style=\"text-align: center;margin-bottom: 30px;\">\n       <button style=\"color: white;background-color: #CC3366;border: none;\" (click)=\"gotoNew()\">\u56DE\u5230\u6700\u65B0\u6D88\u606F</button></div>\n    ",
            styles: ["    \n    .cool button{\n    float: left;\n    background-color: white;\n    margin-left: 30px;\n    border: none;\n    \n    }\n    \n    .cool{\n    width:700px;\n    font-size: 18px;\n    font-weight: bold;\n    }\n    \n   \n    .container{\n    margin-bottom: 30px;\n    }\n    \n    "],
            inputs: ['ptitle', 'pcontent']
        })
    ], newdetailComponent);
    return newdetailComponent;
}());
exports.newdetailComponent = newdetailComponent;
//# sourceMappingURL=new-detail.component.js.map
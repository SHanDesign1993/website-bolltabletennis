"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent(router, searchvalue) {
        this.router = router;
        this.searchvalue = searchvalue;
        this.isMenuOn = false;
    }
    AppComponent.prototype.gotoResult = function (value, value2) {
        this.searchvalue.add(value, value2);
        this.router.navigate(['SearchResult']);
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.close = function (event) {
        console.log(this.side);
        if (!this.side.nativeElement.contains(event.target)) {
            this.isMenuOn = false;
        }
    };
    AppComponent.prototype.sideMenuClick = function () {
        this.isMenuOn = !this.isMenuOn;
    };
    __decorate([
        core_1.ViewChild('side')
    ], AppComponent.prototype, "side");
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: "\n        <header>\n        \n            <nav class=\"slide-left\"  *ngIf=\"isMenuOn\">\n            <ul>\n                <li class=\"c-menu__item\"><a  [routerLink]=\"['/']\">\u9996\u9801</a></li>\n                \n                <li><a [routerLink]=\"['about']\" routerLinkActive=\"active\">\u5546\u5E97\u4ECB\u7D39</a></li>\n                \n                <li><a (click)=\"gotoResult('Butterfly','')\" style=\"cursor:pointer;\">\u8774\u8776\u5C08\u5340</a></li>\n                <li class=\"c-menu__item\"><a [routerLink]=\"['new']\">\u6700\u65B0\u6D88\u606F</a></li>\n              \n                <li class=\"c-menu__item\"><a [routerLink]=\"['flow']\">\u8CFC\u7269\u6307\u5357</a></li>\n               \n                \n                 <li class=\"c-menu__item\"><a [routerLink]=\"['notification']\">\u532F\u6B3E\u901A\u77E5</a></li>\n                <li class=\"c-menu__item\"><a [routerLink]=\"['member']\">\u6703\u54E1\u5C08\u5340</a></li>\n            </ul>\n            </nav>\n            <nav>\n            <ul>  \n                <li class=\"logo\"><a [routerLink]=\"['/']\"><img src=\"img/logo.png\" height=\"75\" width=\"160\"></a></li>\n\n                <div class=\"sideMenu\" (click)=\"sideMenuClick()\"  #side><i class=\"fa fa-bars\" aria-hidden=\"true\"></i></div>\n                \n              <li><a [routerLink]=\"['about']\" routerLinkActive=\"active\">\u5546\u5E97\u4ECB\u7D39</a></li>\n                <li><a (click)=\"gotoResult('Butterfly','')\" style=\"cursor:pointer;\">\u8774\u8776\u5C08\u5340</a></li>\n                <li><a [routerLink]=\"['new']\">\u6700\u65B0\u6D88\u606F</a></li>\n                <li><a [routerLink]=\"['flow']\">\u8CFC\u7269\u6307\u5357</a></li> \n                 \n                <li><a [routerLink]=\"['member']\">\u6703\u54E1\u5C08\u5340</a></li>\n                <li><a [routerLink]=\"['notification']\">\u532F\u6B3E\u901A\u77E5</a></li> \n                \n                <span class=\"navigation\">\n                <li><cart></cart></li>\n                <!-- <li><a [routerLink]=\"['classroom']\"><img src=\"img/blog.png\" height=\"32\" width=\"32\"></a></li> -->\n                <li><a href=\"https://www.facebook.com/%E6%B3%A2%E7%88%BE%E6%A1%8C%E7%90%83%E7%94%A8%E5%93%81%E5%B0%88%E8%B3%A3%E5%BA%97-353230954792473/?fref=ts\" target=\"_blank\"><img src=\"img/fb.png\" height=\"32\" width=\"32\"></a></li>\n                </span>\n            </ul>\n            </nav>\n\n        </header>\n\n        <router-outlet></router-outlet>\n        <footer>\n            \n\t\t\t<div class=\"footer_top\">\n\t\t\t    <div class=\"footer_new\">BUTTERFLY\u5B98\u65B9\u6388\u6B0A\u7D93\u92B7\u5546</div>\n\t\t\t\t<ul>\n\t\t\t\t    <li>\u96FB\u8A71(\u4EE3\u8868\u865F)\uFF1A(02)3151-7171 | </li>\n\t\t\t\t\t<li>\u7DB2\u8CFC\u5BA2\u670D\u5C08\u7DDA\uFF1A(02)3151-3888 | </li>\n                    <li>\u5E73\u65E5 11:30~21:00 \u5047\u65E5 11:00~18:00 | </li>\n\t\t\t\t\t<li>\u65B0\u5317\u5E02\u4E2D\u548C\u5340\u81EA\u5F37\u8DEF60\u865F(\u8FD1\u79C0\u5C71\u570B\u5C0F) | </li>\n\t\t\t\t\t<li>Mail\uFF1Amajestic168168@gmail.com | </li>\n\t\t\t\t\t<li>\u672C\u5E97\u4FDD\u7559\u8A02\u55AE\u6210\u7ACB\u8207\u5426\uFF0C\u4E00\u5207\u4EE5\u5BE6\u7269\u70BA\u4E3B | </li>\n\t\t\t\t\t<li>Powered by <a href=\"http://www.aptan.net\"> Aptan </a> </li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"footer_bottom\">\n\t\t\t\t\t\u5275\u7ACB\u65BC2016\n\t\t\t</div>\n\t\t</footer>\n    ",
            host: {
                '(window:click)': 'close($event)'
            }
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
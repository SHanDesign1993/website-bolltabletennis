"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
require('rxjs/Rx');
var UploadComponent = (function () {
    function UploadComponent(productService, http, router, memberservice, userservice) {
        this.productService = productService;
        this.http = http;
        this.router = router;
        this.memberservice = memberservice;
        this.userservice = userservice;
        //this.loggedIn = !!localStorage.getItem('auth_token');//
        this.url = 'http://45.79.133.15:3000/image';
    }
    //
    //constructor(private router:Router,//++ private memberservice:MemberService,private userservice:UserService){}
    UploadComponent.prototype.ngOnInit = function () {
        this.getProducts();
        if (this.userservice.isLoggedIn() == true) {
            if (localStorage.getItem('userid') == '32') {
                console.log("upload_product");
                this.router.navigate(['/upload']);
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
    //
    UploadComponent.prototype.getProducts = function () {
        var _this = this;
        this.productService.getProduct()
            .subscribe(function (products) { return _this.products = products; }, function (error) { return _this.errorMessage = error; });
    };
    UploadComponent.prototype.update = function (id, name, description, price, brand, category, sorting) {
        var _this = this;
        var data = {
            name: name,
            description: description,
            price: price,
            brand: brand,
            category: category,
            sorting: sorting
        };
        var r = window.confirm("Are you sure to update??");
        if (r == true) {
            this.productService.updateData(id, data)
                .subscribe(function (data) { return _this.response = JSON.stringify(data); }, function (error) { return console.log(error); });
        }
    };
    UploadComponent.prototype.onPost = function (name, price, imgsrc, description, category, brand, blade_structure, blade_special, blade_vibrate, blade_hitsize, blade_thick, blade_holdwidth, blade_holdsize, blade_madein) {
        var _this = this;
        var data = {
            name: name,
            price: price,
            imgsrc: imgsrc,
            description: description,
            category: category,
            brand: brand,
            blade_structure: blade_structure,
            blade_special: blade_special,
            blade_vibrate: blade_vibrate,
            blade_hitsize: blade_hitsize,
            blade_thick: blade_thick,
            blade_holdwidth: blade_holdwidth,
            blade_holdsize: blade_holdsize,
            blade_madein: blade_madein
        };
        this.productService.postData(data)
            .subscribe(function (data) { return _this.response = JSON.stringify(data); }, function (error) { return console.log(error); }, function () { return window.alert("上傳成功"); });
    };
    UploadComponent.prototype.onPost2 = function (name, price, imgsrc, description, category, brand, robber_property, robber_speed, robber_spin, robber_control, robber_hard, robber_madein) {
        var _this = this;
        var data = {
            name: name,
            price: price,
            imgsrc: imgsrc,
            description: description,
            category: category,
            brand: brand,
            robber_property: robber_property,
            robber_speed: robber_speed,
            robber_spin: robber_spin,
            robber_control: robber_control,
            robber_hard: robber_hard,
            robber_madein: robber_madein
        };
        this.productService.postData(data)
            .subscribe(function (data) { return _this.response = JSON.stringify(data); }, function (error) { return console.log(error); }, function () { return window.alert("上傳成功"); });
    };
    UploadComponent.prototype.onPost3 = function (name, price, imgsrc, description, category, brand, other_madein) {
        var _this = this;
        var data = {
            name: name,
            price: price,
            imgsrc: imgsrc,
            description: description,
            category: category,
            brand: brand,
            other_madein: other_madein
        };
        this.productService.postData(data)
            .subscribe(function (data) { return _this.response = JSON.stringify(data); }, function (error) { return console.log(error); }, function () { return window.alert("上傳成功"); });
    };
    UploadComponent.prototype.deleteData = function (id) {
        var r = window.confirm("Are you sure to delete??");
        if (r == true) {
            this.productService.deleteData(id)
                .subscribe(function (response) {
            });
        }
    };
    UploadComponent.prototype.change = function (file) {
        var _this = this;
        var xhr = new XMLHttpRequest();
        var formData = new FormData();
        formData.append("file", file);
        Rx_1.Observable.fromPromise(fetch(this.url, { method: 'post', body: formData }))
            .subscribe(function (response) {
            console.log(response.body);
            response.json().then(function (json) {
                _this.imageSource = "http://" + json['imgsrc'];
            });
        });
    };
    UploadComponent.prototype.gotoNewUpload = function () {
        this.router.navigate(['/newUpload']);
    };
    UploadComponent.prototype.gotoOrder = function () {
        this.router.navigate(['/orderAdmin']);
    };
    UploadComponent.prototype.postTestConfig = function (made, t4) {
        var _this = this;
        var data = {
            config_json_str: [2, 4, 1, 7, 95, made, t4],
            config_purpose: "tryConfig"
        };
        this.productService.postConfigData(data)
            .subscribe(function (data) { return _this.response = JSON.stringify(data); }, function (error) { return console.log(error); });
    };
    UploadComponent = __decorate([
        core_1.Component({
            selector: 'upload',
            template: "\n       <div class=\"container\">\n       \n       <div class=\"title-clothes\">\n        <div class=\"title-clothes-line\"></div>\u4E0A\u50B3\u5546\u54C1<div class=\"title-clothes-line2\"></div>\n        </div>\n        <h2 align=\"center\">\u7403\u677F</h2><hr>\n        \n        <div class=\"upload\">\n        <div class=\"left-upload\">\n\n       <input type=\"file\" #files (change)=\"change(files.files[0])\"/>\n   \n       <label for=\"name\">Name\uFF1A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>\n       <input type=\"text\" id=\"blade_name\" #blade_name><br>\n       <label for=\"price\">Price\uFF1A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>\n       <input type=\"text\" id=\"blade_price\" #blade_price><br>\n       <label for=\"description\">Description\uFF1A</label>\n       <!-- <input type=\"text\" id=\"blade_description\" #blade_description><br> -->\n       <textarea class=\"productUploadTextarea\" type=\"text\" id=\"blade_description\" #blade_description rows=\"4\" cols=\"20\"></textarea><br>       \n       <label for=\"category\">Brand\uFF1A</label>\n       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n       <select #t>\n       <option value=\"\"></option>\n       <option value=\"Butterfly\">Butterfly</option>\n       <option value=\"Nittaku\">Nittaku</option>\n       <option value=\"Stiga\">Stgia</option>\n       <option value=\"Donic\">Donic</option>\n       <option value=\"Yasaka\">Yasaka</option>\n       <option value=\"Andro\">Andro</option>\n       <option value=\"Tibhar\">Tibhar</option>\n       <option value=\"Xion\">Xiom</option>\n       <option value=\"\u7D05\u96D9\u559CDHS\">\u7D05\u96D9\u559CDHS</option>\n       <option value=\"Tsp\">Tsp</option>\n       <option value=\"Victas\">Victas</option>\n       <option value=\"Joola\">Joola</option>\n       <option value=\"Dr.Neubauer\u7D10\u9B91\u723E\">Dr.Neubauer\u7D10\u9B91\u723E</option>\n       <option value=\"Adidas\">Adidas</option>\n       <option value=\"\u9280\u6CB3\">\u9280\u6CB3</option>\n       <option value=\"Kokutaku\">Kokutaku</option>\n       <option value=\"Darker\">Darker</option>\n       <option value=\"Mizuno\">Mizuno</option>\n       <option value=\"Palio\">Palio</option>\n       <option value=\"Kison\">Kison</option>\n       <option value=\"\u8A31\u7D39\u767C\">\u8A31\u7D39\u767C</option>\n       <option value=\"\u96D9\u9B5A\">\u96D9\u9B5A</option>\n       <option value=\"Crack\">Crack</option>\n       <option value=\"\u4E16\u5967\u5F97Sword\">\u4E16\u5967\u5F97Sword</option>\n       <option value=\"\u53F0\u7063\u795E\u6728\">\u53F0\u7063\u795E\u6728</option>\n       <option value=\"\u5176\u4ED6\">\u5176\u4ED6</option>       \n       </select><br>\n       \n      <label for=\"category\">Category\uFF1A</label>\n       &nbsp;\n       <select #tt> \n       <option value=\"\"></option>\n       <option value=\"blades\">\u5200\u677F</option>\n       <option value=\"penhold\">\u76F4\u677F</option>\n       \n       </select><br>\n       <label for=\"brand\">\u5E95\u677F\u7D50\u69CB\uFF1A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>\n       <input type=\"text\" id=\"blade_structure\" #blade_structure><br>\n       \n      </div>\n      \n      <div class=\"right-upload\">    \n      <label for=\"name\">\u53CD\u767C\u7279\u6027\uFF1A</label>\n       <input type=\"text\" id=\"blade_special\" #blade_special><br>\n       <label for=\"price\">\u632F\u52D5\u7279\u6027\uFF1A</label>\n       <input type=\"text\" id=\"blade_vibrate\" #blade_vibrate><br>\n       <label for=\"description\">\u677F\u9762\u5C3A\u5BF8\uFF1A</label>\n       <input type=\"text\" id=\"blade_hitsize\" #blade_hitsize><br>\n       <label for=\"brand\">\u677F\u9762\u539A\u5EA6\uFF1A</label> \n       <input type=\"text\" id=\"blade_thick\" #blade_thick><br>\n       <label for=\"brand\">\u62CD\u67C4\u5E95\u5BEC\uFF1A</label>\n       <input type=\"text\" id=\"blade_holdwidth\" #blade_holdwidth><br>\n       <label for=\"brand\">\u62CD\u67C4\u5C3A\u5BF8\uFF1A</label>\n       <input type=\"text\" id=\"blade_holdsize\" #blade_holdsize><br>\n       <label for=\"brand\">\u51FA\u7522\u5730\uFF1A&nbsp;&nbsp;&nbsp;&nbsp;</label>\n       <input type=\"text\" id=\"blade_madein\" #blade_madein>\n       <button (click)=\"onPost(blade_name.value,blade_price.value,imageSource,blade_description.value,tt.value,t.value,blade_structure.value,blade_special.value,blade_vibrate.value,blade_hitsize.value,blade_thick.value,blade_holdwidth.value,blade_holdsize.value,blade_madein.value);blade_madein.value='';blade_holdsize.value='';blade_holdwidth.value='';blade_thick.value='';blade_hitsize.value='';blade_vibrate.value='';blade_special.value='';blade_structure.value='';blade_name.value='';blade_price.value='';blade_description.value='';\">Upload</button>\n\n      </div><br>\n      <h2 align=\"center\">\u81A0\u76AE</h2><hr>\n      <div class=\"left-upload\">\n        <input type=\"file\" #files2 (change)=\"change(files2.files[0])\"/>\n\n       <label for=\"name\">Name\uFF1A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>\n       <input type=\"text\" id=\"name\" #robber_name><br>\n       <label for=\"price\">Price\uFF1A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>\n       <input type=\"text\" id=\"price\" #robber_price><br>\n       <label for=\"description\">Description\uFF1A</label>\n       <!-- <input type=\"text\" id=\"description\" #robber_description><br> -->\n       <textarea class=\"productUploadTextarea\" type=\"text\" id=\"description\" #robber_description rows=\"4\" cols=\"20\"></textarea><br>\n       <label for=\"brand\">Brand\uFF1A</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n       <select #t2> \n       <option value=\"\"></option>\n      \n        <option value=\"Butterfly\">Butterfly</option>\n       <option value=\"Nittaku\">Nittaku</option>\n       <option value=\"Stiga\">Stgia</option>\n       <option value=\"Donic\">Donic</option>\n       <option value=\"Yasaka\">Yasaka</option>\n       <option value=\"Andro\">Andro</option>\n       <option value=\"Tibhar\">Tibhar</option>\n       <option value=\"Xion\">Xiom</option>\n       <option value=\"\u7D05\u96D9\u559CDHS\">\u7D05\u96D9\u559CDHS</option>\n       <option value=\"Tsp\">Tsp</option>\n       <option value=\"Victas\">Victas</option>\n       <option value=\"Joola\">Joola</option>\n       <option value=\"Dr.Neubauer\u7D10\u9B91\u723E\">Dr.Neubauer\u7D10\u9B91\u723E</option>\n       <option value=\"Adidas\">Adidas</option>\n       <option value=\"Kokutaku\">Kokutaku</option>\n       <option value=\"Darker\">Darker</option>\n       <option value=\"Mizuno\">Mizuno</option>\n       <option value=\"Palio\">Palio</option>\n       <option value=\"Kison\">Kison</option>\n       <option value=\"\u8A31\u7D39\u767C\">\u8A31\u7D39\u767C</option>\n       <option value=\"\u96D9\u9B5A\">\u96D9\u9B5A</option>\n       <option value=\"Crack\">Crack</option>\n       <option value=\"\u4E16\u5967\u5F97Sword\">\u4E16\u5967\u5F97Sword</option>\n       <option value=\"\u53F0\u7063\u795E\u6728\">\u53F0\u7063\u795E\u6728</option>\n       <option value=\"\u5176\u4ED6\">\u5176\u4ED6</option>\n      \n       \n       </select><br>\n       <label for=\"brand\">\u6027\u8CEA\uFF1A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>\n       <input type=\"text\" id=\"blade\" #robber_property>\n      </div>\n      \n       <div class=\"right-upload\">    \n       \n       <label for=\"robber-speed\">\u901F\u5EA6\uFF1A&nbsp;&nbsp;&nbsp;</label>\n       <input type=\"text\" id=\"robber-speed\" #robber_speed><br>\n       <label for=\"robber-spin\">\u65CB\u8F49\uFF1A&nbsp;&nbsp;&nbsp;</label>\n       <input type=\"text\" id=\"robber-spin\" #robber_spin><br>\n       <label for=\"robber-control\">\u63A7\u5236\uFF1A&nbsp;&nbsp;&nbsp;</label> \n       <input type=\"text\" id=\"blade\" #robber_control><br>\n       <label for=\"robber-hard\">\u786C\u5EA6\uFF1A&nbsp;&nbsp;&nbsp;</label>\n       <input type=\"text\" id=\"blade\" #robber_hard><br>\n       <label for=\"robber-madein\">\u51FA\u7522\u5730\uFF1A</label>\n       <input type=\"text\" id=\"robber-madein\" #robber_madein>\n       <button (click)=\"onPost2(robber_name.value,robber_price.value,imageSource,robber_description.value,'robbers',t2.value,robber_property.value,robber_speed.value,robber_spin.value,robber_control.value,robber_hard.value,robber_madein.value);robber_madein.value='';robber_hard.value='';robber_control.value='';robber_spin.value='';robber_speed.value='';robber_property.value='';robber_name.value='';robber_price.value='';robber_description.value='';\">Upload</button>\n\n      </div><br>\n           \n       <h2 align=\"center\">\u5176\u4ED6</h2><hr>\n       <input type=\"file\" #files3 (change)=\"change(files3.files[0])\"/>\n\n       <label for=\"name\">Name\uFF1A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>\n       <input type=\"text\" id=\"name\" #other_name><br>\n       <label for=\"price\">Price\uFF1A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>\n       <input type=\"text\" id=\"price\" #other_price><br>\n       <label for=\"description\">Description\uFF1A</label>\n       <!-- <input type=\"text\" id=\"description\" #other_description><br> -->\n       <textarea class=\"productUploadTextarea\" type=\"text\" id=\"description\" #other_description rows=\"4\" cols=\"20\"></textarea><br>\n       <label for=\"category\">Category\uFF1A&nbsp;&nbsp;</label>\n       <select #t3>\n        <option value=\"\"></option>\n       <option value=\"robbers\">\u81A0\u76AE</option>\n                                <option value=\"blades\">\u5200\u677F</option>\n                                <option value=\"penhold\">\u76F4\u677F</option>\n                                <option value=\"lowblades\">\u6210\u54C1\u62CD</option>\n                                <option value=\"glue\">\u81A0\u6C34&\u589E\u80FD\u5291</option>\n                                <option value=\"balls\">\u7403&\u7F6E\u7403\u76D2</option>\n                                <option value=\"clothes\">\u670D\u98FE</option>\n                                <option value=\"shoes\">\u978B&\u896A</option>\n                                <option value=\"accessory\">\u914D\u4EF6&\u4FDD\u990A\u6E05\u6F54\u54C1</option>\n                                <option value=\"bags\">\u62CD\u5957&\u88DD\u5099\u888B(\u5305)</option>\n                                <option value=\"tables\">\u7403\u684C&\u5468\u908A\uFF0C\u767C\u7403\u6A5F</option>\n                                <option value=\"others\">\u5176\u4ED6\u5546\u54C1</option>\n       </select><br>\n       <label for=\"brand\">Brand\uFF1A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label> \n       <select #t4>\n       <option value=\"\"></option>\n       <option value=\"Butterfly\">Butterfly</option>\n       <option value=\"Nittaku\">Nittaku</option>\n       <option value=\"Stiga\">Stgia</option>\n       <option value=\"Donic\">Donic</option>\n       <option value=\"Yasaka\">Yasaka</option>\n       <option value=\"Andro\">Andro</option>\n       <option value=\"Tibhar\">Tibhar</option>\n       <option value=\"Xion\">Xiom</option>\n       <option value=\"\u7D05\u96D9\u559CDHS\">\u7D05\u96D9\u559CDHS</option>\n       <option value=\"Tsp\">Tsp</option>\n       <option value=\"Victas\">Victas</option>\n       <option value=\"Joola\">Joola</option>\n       <option value=\"Dr.Neubauer\u7D10\u9B91\u723E\">Dr.Neubauer\u7D10\u9B91\u723E</option>\n       <option value=\"Adidas\">Adidas</option>\n       <option value=\"\u9280\u6CB3\">\u9280\u6CB3</option>\n       <option value=\"Kokutaku\">Kokutaku</option>\n       <option value=\"Darker\">Darker</option>\n       <option value=\"Mizuno\">Mizuno</option>\n       <option value=\"Palio\">Palio</option>\n       <option value=\"Kison\">Kison</option>\n       <option value=\"\u8A31\u7D39\u767C\">\u8A31\u7D39\u767C</option>\n       <option value=\"\u96D9\u9B5A\">\u96D9\u9B5A</option>\n       <option value=\"Crack\">Crack</option>\n       <option value=\"\u4E16\u5967\u5F97Sword\">\u4E16\u5967\u5F97Sword</option>\n       <option value=\"\u53F0\u7063\u795E\u6728\">\u53F0\u7063\u795E\u6728</option>\n       <option value=\"\u5176\u4ED6\">\u5176\u4ED6</option>\n       \n       </select><br>\n       <label for=\"other-madein\">\u51FA\u7522\u5730\uFF1A</label>\n       <input type=\"text\" id=\"other-madein\" #other_madein>\n       <button (click)=\"onPost3(other_name.value,other_price.value,imageSource,other_description.value,t3.value,t4.value,other_madein.value);other_name.value='';other_price.value='';other_description.value='';other_madein.value='';\">Upload</button>\n\n      </div>\n      \n     \n        \n          <div class=\"title-clothes\">\n        <div class=\"title-clothes-line\"></div>\u5546\u54C1\u7BA1\u7406<div class=\"title-clothes-line2\"></div>\n       \n        </div> \n        <div class=\"update\">\n        <table width=\"100%\">\n        <tr> \n            <td>\u5546\u54C1\u5716\u7247</td>\n            <td>\u5546\u54C1\u540D\u7A31</td>\n            <td>\u5546\u54C1\u63CF\u8FF0</td>\n            <td>\u5546\u54C1\u50F9\u9322</td>\n            <td>\u5546\u54C1\u54C1\u724C</td>\n            <td>\u5546\u54C1\u7A2E\u985E</td>\n            <td>\u6392\u5E8F</td>\n            <td></td>\n            <td></td>\n        </tr>\n        <tr *ngFor=\"let p of products\">\n        <td><img src={{p.imgsrc}} width=\"80px\" height=\"80px\"></td>\n            <td><input type=\"text\" value={{p.name}} #uname></td>\n            <td><textarea type=\"text\" value={{p.description}} #udescription></textarea></td>\n            <td><input type=\"text\" value={{p.price}} #uprice></td>\n            <td><input type=\"text\" value={{p.brand}} #ubrand></td>\n            <td><input type=\"text\" value={{p.category}} #ucategory></td> \n            <td><input type=\"number\" step=\"any\" value={{p.sorting}} #usorting></td>\n            <td><button (click)=\"deleteData(p.id)\">\u79FB\u9664</button></td>\n            <td><button (click)=\"update(p.id,uname.value,udescription.value,uprice.value,ubrand.value,ucategory.value,usorting.value)\">\u4FEE\u6539</button></td>\n        </tr>\n        </table></div>\n        <div class=\"new_button\" style=\"text-align: center;margin-bottom: 30px;\">\n       <button style=\"color: white;background-color: #CC3366;border: none;margin-left: 30px; margin-bottom: 30px;\" (click)=\"gotoOrder()\">\u8A02\u55AE\u7BA1\u7406</button></div>\n    <div class=\"new_button\" style=\"text-align: center;margin-bottom: 30px;\">\n       <button style=\"color: white;background-color: #CC3366;border: none;\" (click)=\"gotoNewUpload()\">\u4E0A\u50B3\u6700\u65B0\u6D88\u606F</button></div>\n  </div>\n\n  <!--<button (click)=\"postTestConfig(other_madein.value,t4.value)\">testConfig</button>-->\n\n    ",
            styles: ["    \n    button{\n    border: none;\n    color:white;\n    background-color: #CC3366;\n    font-size: 20px;\n    float: right;\n    }\n    label{\n    margin-top: 10px;\n    }\n    table{\n    font-size: 20px;\n    margin-bottom: 50px;\n    }\n    tr{\n    height:40px;\n    }\n    \n    "]
        })
    ], UploadComponent);
    return UploadComponent;
}());
exports.UploadComponent = UploadComponent;
//# sourceMappingURL=upload.component.js.map
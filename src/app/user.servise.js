"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// user.service.ts
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var UserService = (function () {
    function UserService(http, router) {
        this.http = http;
        this.router = router;
        this.loggedIn = false;
        this.memberUrl = 'http://45.79.133.15:3000/user/';
        this.orderUrl = 'http://45.79.133.15:3000/order';
        this.loggedIn = !!localStorage.getItem('auth_token');
    }
    UserService.prototype.extractRoot = function (res) {
        return res.json() || {};
    };
    UserService.prototype.getOrder = function () {
        return this.http.get("http://45.79.133.15:3000/user/" + localStorage.getItem('userid') + "/order")
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.getMember = function () {
        var _this = this;
        console.log(this.user_id);
        /* new */
        this.http.get(localStorage.getItem('userUrl'))
            .map(function (res) { return res.json(); })
            .catch(this.handleError).subscribe(function (members) { return _this.members = members; }, function (error) { return _this.errorMessage = error; });
        /* end new */
        return this.http.get(localStorage.getItem('userUrl'))
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.getMemberData = function () {
        return this.members;
    };
    UserService.prototype.login = function (identity, password) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http
            .post('http://45.79.133.15:3000/login', JSON.stringify({ identity: identity, password: password }), { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            console.log(res.token);
            localStorage.setItem('userid', res.user);
            _this.memberUrl = 'http://45.79.133.15:3000/user/' + localStorage.getItem('userid');
            localStorage.setItem('userUrl', _this.memberUrl);
            localStorage.setItem('auth_token', res.token);
            _this.loggedIn = true;
            console.log("Success");
            ////
            if (identity == "admin@gmail.com") {
                //     //console.log("upload_product");
                _this.router.navigate(['OrderAdmin']);
            }
            else if (identity == "test2@gmail.com") {
                _this.router.navigate(['/memberAdmin']);
            }
            else {
                _this.router.navigate(['MemberLogin']);
            }
            console.log("Success");
            return res.success;
        });
    };
    UserService.prototype.logout = function () {
        localStorage.removeItem('auth_token');
        localStorage.clear();
        this.loggedIn = false;
        // this.router.navigate(['Member']); // new
    };
    UserService.prototype.usernum = function () {
        console.log(localStorage.getItem('userid'));
        return localStorage.getItem('userid');
    };
    UserService.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    UserService.prototype.updateData = function (data) {
        var body = JSON.stringify(data);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(localStorage.getItem('userUrl'), body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.checkPassword = function (identity, password) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http
            .post('http://45.79.133.15:3000/login', JSON.stringify({ identity: identity, password: password }), { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            console.log(res.token);
            localStorage.setItem('userid', res.user);
            _this.memberUrl = 'http://45.79.133.15:3000/user/' + localStorage.getItem('userid');
            localStorage.setItem('userUrl', _this.memberUrl);
            localStorage.setItem('auth_token', res.token);
            _this.loggedIn = true;
            console.log("pwcorrect");
            return res.success;
        });
    };
    UserService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = error.message || error.statusText || 'Server error';
        console.error(errMsg); // log to console instead
        return Rx_1.Observable.throw(errMsg);
    };
    UserService = __decorate([
        core_1.Injectable()
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.servise.js.map
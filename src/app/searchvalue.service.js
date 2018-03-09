"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var SearchValue = (function () {
    function SearchValue(_http) {
        this._http = _http;
        this.productUrl = 'http://45.79.133.15:3000/product';
        this.ss = '';
    }
    SearchValue.prototype.add = function (v, c) {
        if (v == '' && c == '') {
            this.productUrl = 'http://45.79.133.15:3000/product';
        }
        if (v != '' && c == '') {
            this.productUrl = 'http://45.79.133.15:3000/product/search?b=' + v;
        }
        if (v == '' && c != '') {
            this.productUrl = 'http://45.79.133.15:3000/product/search?c=' + c;
        }
        if (v != '' && c != '') {
            this.productUrl = 'http://45.79.133.15:3000/product/search?b=' + v + "&c=" + c;
        }
        console.log(this.productUrl);
    };
    SearchValue.prototype.getProduct = function () {
        return this._http.get(this.productUrl)
            .map(function (res) { return res.json(); }, function (res) { return res.extra = JSON.parse(res.json().json_str); })
            .catch(this.handleError);
    };
    SearchValue.prototype.getNum = function (arr) {
        var count = 0;
        arr.forEach(function (index, array) {
            count = count + 1;
        });
        return count;
    };
    SearchValue.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    SearchValue.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = error.message || error.statusText || 'Server error';
        console.error(errMsg); // log to console instead
        return Rx_1.Observable.throw(errMsg);
    };
    SearchValue = __decorate([
        core_1.Injectable()
    ], SearchValue);
    return SearchValue;
}());
exports.SearchValue = SearchValue;
//# sourceMappingURL=searchvalue.service.js.map
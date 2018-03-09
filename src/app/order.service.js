"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require('rxjs/Rx');
var OrderService = (function () {
    function OrderService(_http) {
        this._http = _http;
        this.orderUrl = 'http://45.79.133.15:3000/order';
    }
    OrderService.prototype.getProduct = function () {
        return this._http.get(this.orderUrl)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    OrderService.prototype.postData = function (data) {
        var body = JSON.stringify(data);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post(this.orderUrl, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    OrderService.prototype.updateData = function (id, data) {
        var body = JSON.stringify(data);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.put(this.orderUrl + '/' + id, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    OrderService.prototype.deleteData = function (id) {
        console.log(this.orderUrl + '/' + id);
        return this._http.delete(this.orderUrl + '/' + id);
    };
    OrderService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    OrderService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = error.message || error.statusText || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    OrderService = __decorate([
        core_1.Injectable()
    ], OrderService);
    return OrderService;
}());
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map
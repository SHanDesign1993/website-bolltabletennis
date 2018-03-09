"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
require('rxjs/Rx');
var NewService = (function () {
    function NewService(_http) {
        this._http = _http;
        this.productUrl = 'http://45.79.133.15:3000/news';
        this.ptitle = '';
        this.pcontent = '';
    }
    NewService.prototype.getNews = function () {
        return this._http.get(this.productUrl)
            .map(function (res) { return res.json(); }, function (res) { return res.extra = JSON.parse(res.json().json_str); })
            .catch(this.handleError);
    };
    NewService.prototype.add = function (title, content) {
        this.ptitle = title;
        this.pcontent = content;
        console.log(this.ptitle);
        localStorage.setItem('newTitle', this.ptitle);
        localStorage.setItem('newContent', this.pcontent);
    };
    NewService.prototype.getTitle = function () {
        return localStorage.getItem('newTitle');
    };
    NewService.prototype.getContent = function () {
        return localStorage.getItem('newContent');
    };
    NewService.prototype.postNews = function (data) {
        var body = JSON.stringify(data);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post(this.productUrl, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    NewService.prototype.deleteData = function (id) {
        console.log(this.productUrl + '/' + id);
        return this._http.delete(this.productUrl + '/' + id);
    };
    NewService.prototype.updateData = function (id, data) {
        var body = JSON.stringify(data);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.put(this.productUrl + '/' + id, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    NewService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = error.message || error.statusText || 'Server error';
        console.error(errMsg); // log to console instead
        return Rx_1.Observable.throw(errMsg);
    };
    NewService = __decorate([
        core_1.Injectable()
    ], NewService);
    return NewService;
}());
exports.NewService = NewService;
//# sourceMappingURL=new.service.js.map
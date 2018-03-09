"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var LineComponent = (function () {
    function LineComponent() {
    }
    LineComponent = __decorate([
        core_1.Component({
            selector: 'line',
            template: "\n    <button type=\"button\" data-toggle=\"modal2\" data-target=\"#myModal5\"></button>   \n    <div id=\"myModal5\" class=\"modal fade\" role=\"dialog\">\n        <div class=\"modal-dialog\">                    \n            <div class=\"modal-content\">                   \n            <h2>wow</h2>                   \n            </div>     \n        </div>\n    </div>\n    \n    "
        })
    ], LineComponent);
    return LineComponent;
}());
exports.LineComponent = LineComponent;
//# sourceMappingURL=line.component.js.map
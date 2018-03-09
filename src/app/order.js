"use strict";
var Order = (function () {
    function Order(user, ordered_products, json_str, status) {
        this.user = user;
        this.ordered_products = ordered_products;
        this.json_str = json_str;
        this.status = status;
    }
    return Order;
}());
exports.Order = Order;
//# sourceMappingURL=order.js.map
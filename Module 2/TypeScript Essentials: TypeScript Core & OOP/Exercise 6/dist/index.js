"use strict";
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Pending"] = 0] = "Pending";
    OrderStatus[OrderStatus["Shipped"] = 1] = "Shipped";
    OrderStatus[OrderStatus["Delivered"] = 2] = "Delivered";
})(OrderStatus || (OrderStatus = {}));
class Order {
    status = OrderStatus.Pending;
    check() {
        if (this.status === OrderStatus.Delivered)
            console.log("Order finished");
    }
}
const order = new Order();
order.status = OrderStatus.Delivered;
order.check();
//# sourceMappingURL=index.js.map

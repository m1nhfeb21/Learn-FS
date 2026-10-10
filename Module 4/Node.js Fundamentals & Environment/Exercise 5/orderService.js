const EventEmitter = require("node:events");

class OrderService extends EventEmitter {
  createOrder(order) {
    this.emit("order:created", order);
  }
}

module.exports = OrderService;

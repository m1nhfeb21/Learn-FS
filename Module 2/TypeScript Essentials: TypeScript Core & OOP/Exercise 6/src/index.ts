enum OrderStatus {
  Pending,
  Shipped,
  Delivered,
}

class Order {
  status: OrderStatus = OrderStatus.Pending;

  check() {
    if (this.status === OrderStatus.Delivered) console.log("Order finished");
  }
}

const order = new Order();

order.status = OrderStatus.Delivered;
order.check();

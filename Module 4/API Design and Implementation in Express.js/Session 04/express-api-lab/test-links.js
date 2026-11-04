const orders = require("./data/orders");
const buildOrderLinks = require("./utils/links");

console.log("PENDING:");
console.log(buildOrderLinks(orders[0]));

console.log("CANCELLED:");
console.log(buildOrderLinks(orders[1]));

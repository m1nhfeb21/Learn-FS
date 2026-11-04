const test = require("node:test");
const assert = require("node:assert/strict");

const baseUrl = "http://localhost:3000";

test("Pending order includes POST cancellation action", async () => {
  const response = await fetch(baseUrl + "/api/v2/orders/17");
  assert.equal(response.status, 200);
  const order = await response.json();
  assert.equal(order.status, "pending");
  assert.deepEqual(order._links.self, { href: "/api/v2/orders/17", method: "GET" });
  assert.deepEqual(order._links.customer, { href: "/api/v2/users/3", method: "GET" });
  assert.deepEqual(order._links.cancel, { href: "/api/v2/orders/17/cancellation", method: "POST" });
});

test("Cancelled order omits cancellation action", async () => {
  const response = await fetch(baseUrl + "/api/v2/orders/18");
  assert.equal(response.status, 200);
  const order = await response.json();
  assert.equal(order.status, "cancelled");
  assert.ok(!Object.hasOwn(order._links, "cancel"));
  assert.ok(order._links.self);
  assert.ok(order._links.customer);
});

test("Unknown order returns HTTP 404", async () => {
  const response = await fetch(baseUrl + "/api/v2/orders/999");
  assert.equal(response.status, 404);
});

test("Invalid order ID returns HTTP 400", async () => {
  const response = await fetch(baseUrl + "/api/v2/orders/abc");
  assert.equal(response.status, 400);
});

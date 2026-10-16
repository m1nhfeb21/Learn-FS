const NotificationCenter = require("./notificationCenter");

const center = new NotificationCenter();

center.on("error", (err) => {
  console.log("[ERROR]", err.message);
});

center.on("user:registerd", (user) => {
  console.log(`[EMAIL] Chao mung ${user.name}`);
});

center.on("user:registered", (user) => {
  console.log(`[STATUS] Them nguoi dung: ${user.name}`);
});

center.on("order:created", (order) => {
  console.log(`[EMAIL] Gui xac nhan don #${order.id}`);
});

center.on("order:created", (order) => {
  console.log(`[STATS] Cap nhat doanh thu: +${order.total}`);
});

center.on("order:cancelled", (order) => {
  console.log(`[EMAIL] Thong bao huy don #${order.id}`);
});

center.on("order:cancelled", (order) => {
  if (order.total > 1000000) {
    throw new Error(`Don #${order.id} vuot gioi han`);
  }
  console.log(`[STATUS] Giam doanh thu: -${order.total}`);
});

function safeEmit(event, data) {
  try {
    center.emit(event, data);
  } catch (err) {
    center.emit("error", err);
  }
}

console.log("Listener counts:");
console.log("User:", center.listenerCount("user:registered"));
console.log("Created:", center.listenerCount("order:created"));
console.log("Cancelled:", center.listenerCount("order:cancelled"));

safeEmit("user:registered", { name: "Minh" });

safeEmit("order:created", { id: 101, total: 200000 });

safeEmit("order:cancelled", { id: 101, total: 200000 });

safeEmit("order:cancelled", { id: 102, total: 1500000 });

console.log("Chuong trinh tiep tuc sau loi!");

safeEmit("order:created", { id: 103, total: 500000 });

safeEmit("user:registered", { name: "Lan" });

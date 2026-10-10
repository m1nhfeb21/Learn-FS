console.log("1. A: Bắt đầu");
setTimeout(() => console.log("6. setTimeout"), 0);
setImmediate(() => console.log("5. setImmediate"));
Promise.resolve().then(() => console.log("4. Promise"));
process.nextTick(() => console.log("3. nextTick"));
console.log("2. B: Kết thúc đồng bộ");

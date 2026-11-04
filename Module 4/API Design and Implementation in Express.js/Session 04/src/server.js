const express = require("express");
const ordersRouter = require("../express-api-lab/routes/v2/orders");
const app = express();

app.use(express.json());
app.get("/hello", (req, res) => {
  res.status(200).json({
    message: "Hello Backend",
  });
});

const users = [
  { id: 1, name: "An" },
  { id: 2, name: "Binh" },
];
const orders = [
  { id: 101, userId: 1, product: "Laptop" },
  { id: 102, userId: 1, product: "Mouse" },
  { id: 103, userId: 2, product: "Keyboard" },
];
app.get("/users", (req, res) => {
  res.status(200).json({
    success: true,
    data: users,
  });
});

app.get("/users/:id", (req, res) => {
  const id = Number(req.params.id);

  const user = users.find((item) => item.id === id);
  if (!user) {
    return res.status(404).json({
      success: false,
      message: "Không tìm thấy user",
    });
  }
  res.status(200).json({
    success: true,
    data: user,
  });
});

app.get("/users/:id/orders", (req, res) => {
  const id = Number(req.params.id);

  const user = users.find((item) => item.id === id);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "Không tìm thấy người dùng",
    });
  }

  const userOrders = orders.filter((item) => item.userId === id);

  res.status(200).json({
    success: true,
    data: userOrders,
  });
});
let nextUserId = 3;

app.post("/users", (req, res) => {
  const name = req.body.name;
  if (typeof name !== "string" || !name.trim()) {
    return res.status(400).json({
      success: false,
      message: "Tên người dùng không hợp lệ",
    });
  }

  const newUser = {
    id: nextUserId++,
    name: name.trim(),
  };

  users.push(newUser);

  res.status(201).json({
    success: true,
    data: newUser,
  });
});
const statusRouter = require("../routes/status.js");
app.use("/api", statusRouter);
app.use("/api/v2/orders", ordersRouter);
app.listen(3000, () => {
  console.log("Server đang chạy tại port 3000");
});

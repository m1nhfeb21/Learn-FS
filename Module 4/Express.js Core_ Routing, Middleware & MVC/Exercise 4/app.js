const express = require("express");
const app = express();
const port = 3000;
const logger = require("./middlewares/logger");
const checkAuth = require("./middlewares/checkAuth");

app.use(express.json());
app.use(logger);
const studentRoutes = require("./routes/studentRoutes");

app.use("/api/students", studentRoutes);
app.get("/admin/dashboard", checkAuth, (req, res) => {
  res.json({
    message: "Chào mừng Admin",
  });
});
app.listen(port, () => {
  console.log(`Server đang chạy ở port ${port}`);
});

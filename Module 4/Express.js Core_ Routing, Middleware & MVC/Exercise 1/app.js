const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Bookstore API",
  });
});

app.get("/books", (req, res) => {
  res.json({
    message: "Danh sách sách",
    data: [],
  });
});

app.post("/books", (req, res) => {
  res.json({
    message: "Tạo danh sách thành công",
    data: req.body,
  });
});

app.get("/books/:id", (req, res) => {
  const id = req.params.id;
  res.json({
    message: "Chi tiết sách",
    id: id,
  });
});
app.listen(port, () => {
  console.log(`Server đang chạy ở port ${port}`);
});

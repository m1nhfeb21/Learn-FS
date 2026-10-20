const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  const { sort= "desc", limit="20" } = req.query;
  res.json({
    productId: id,
    sort: sort,
    limit: limit,
  });
});

app.listen(port, () => {
  console.log(`Server đang chạy ở port ${port}`);
});

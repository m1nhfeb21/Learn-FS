const http = require("node:http");
require("dotenv").config();
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "application/json; charset=utf-8",
    });
    res.end(
      JSON.stringify({
        message: "Server đang chạy",
        env: process.env.NODE_ENV,
      }),
    );
    return;
  }
  res.writeHead(404, {
    "Content-type": "application/json; charset=utf-8",
  });
  res.end(JSON.stringify({ message: "Không tìm thấy route" }));
});

server.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});

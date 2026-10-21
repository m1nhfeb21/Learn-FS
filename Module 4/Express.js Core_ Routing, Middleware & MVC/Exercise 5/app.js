const express = require("express");
const app = express();
const port = 3000;
const logger = require("./middlewares/logger");
const checkAuth = require("./middlewares/checkAuth");

app.use(express.json());
const tasks = [
  {
    id: 1,
    title: "Học Express",
    completed: false,
  },
  {
    id: 2,
    title: "Làm bài tập Middleware",
    completed: true,
  },
];

app
  .route("/tasks/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const task = tasks.find((item) => item.id === id);

    if (!task) {
      return res.status(404).json({
        message: `Không tìm thấy task ${id}`,
      });
    }

    res.status(200).json(task);
  })
  .put((req, res) => {
    const id = Number(req.params.id);
    const task = tasks.find((item) => item.id === id);

    if (!task) {
      return res.status(404).json({
        message: `Không tìm thấy task ${id}`,
      });
    }

    const { title, completed } = req.body;

    if (title !== undefined) {
      task.title = title;
    }

    if (completed !== undefined) {
      task.completed = completed;
    }
    res.status(200).json(task);
  })
  .delete((req, res) => {
    const id = Number(req.params.id);
    const index = tasks.findIndex((item) => item.id === id);

    if (index === -1) {
      return res.status(404).json({
        message: `Không tìm thấy task ${id}`,
      });
    }

    tasks.splice(index, 1);

    res.status(200).json({
      message: `Đã xóa task ${id}`,
    });
  });

app.use(express.json());
app.use(logger);
const studentRoutes = require("./routes/studentRoutes");

app.listen(port, () => {
  console.log(`Server đang chạy ở port ${port}`);
});

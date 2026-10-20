const express = require("express");

const router = express.Router();

const students = [];

router.get("/", (req, res) => {
  res.json(students);
});

router.post("/", (req, res) => {
  const { name, score } = req.body;

  const student = {
    id: Date.now(),
    name,
    score,
  };
  students.push(student);
  res.status(201).json(student);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const student = students.find((item) => item.id === id);

  if (!student) {
    return res.status(404).json({ message: "Không tìm thấy sinh viên" });
  }
  res.json(student);
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = students.findIndex((item) => item.id === id);

  if (index === -1)
    return res.status(404).json({ message: "Không tìm thấy sinh viên" });

  const deletedStudent = students[index];
  students.splice(index, 1);

  res.status(200).json(deletedStudent);
});
module.exports = router;

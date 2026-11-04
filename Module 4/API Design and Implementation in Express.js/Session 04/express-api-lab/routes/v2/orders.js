const express = require("express");

const orders = require("../../data/orders");

const buildOrderLinks = require("../../utils/links");

const router = express.Router();

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({
      success: false,
      message: "ID không hợp lệ",
    });
  }

  const order = orders.find((item) => item.id === id);
  if (!order) {
    return res.status(404).json({
      success: false,
      message: "Không tìm thấy đơn hàng",
    });
  }

  res.status(200).json({
    ...order,
    _links: buildOrderLinks(order),
  });
});

module.exports = router;

function checkAuth(req, res, next) {
  const authorization = req.headers.authorization;

  if (!authorization) {
    return res.status(401).json({
      message: "Thiếu token xác thực",
    });
  }
  next();
}

module.exports = checkAuth;

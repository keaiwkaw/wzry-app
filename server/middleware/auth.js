module.exports = (options) => {
  const userModel = require("../models/AdminUser");
  const assert = require("http-assert");
  const jwt = require("jsonwebtoken");
  return async (req, res, next) => {
    const token = String(req.headers.authorization || "")
      .split(" ")
      .pop();
    assert(token, 401, "请先登录");

    const {id} = jwt.verify(token, req.app.get("secret"));
    assert(id, 401, "无效用户");

    req.user = await userModel.findById(id);
    assert(req.user, 401, "请先登录");

    await next();
  };
};

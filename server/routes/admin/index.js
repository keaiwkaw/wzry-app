module.exports = (app) => {
  const express = require("express");

  const router = express.Router({
    mergeParams: true,
  });

  //创建分类
  router.post("/", async (req, res) => {
    const model = await req.Model.create(req.body);
    res.send(model);
  });
  //获取分类
  router.get("/", async (req, res) => {
    const queryOptions = {};
    if (req.Model.modelName === "Category") {
      queryOptions.populate = "parent";
    }
    console.log(req.Model);
    const items = await req.Model.find().setOptions(queryOptions).limit(10);
    res.send(items);
  });
  //根据分类ID查询分类
  router.get("/:id", async (req, res) => {
    const model = await req.Model.findById(req.params.id);
    res.send(model);
  });
  //更新分类
  router.put("/:id", async (req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body);
    res.send(model);
  });
  //删除分类
  router.delete("/:id", async (req, res) => {
    const model = await req.Model.findByIdAndDelete(req.params.id, req.body);
    res.send({
      success: true,
    });
  });
  app.use(
    "/admin/api/rest/:resource",
    async (req, res, next) => {
      const modelName = require("inflection").classify(req.params.resource);
      console.log(modelName)
      req.Model = require("../../models/" + modelName);
      next();
    },
    router
  );
  const multer = require("multer");
  const upload = multer({dest: __dirname + "./../../uploads"});
  app.post("/admin/api/upload", upload.single("file"), async (req, res) => {
    const file = req.file;
    file.url = "http://localhost:3000/uploads/" + file.filename;
    res.send(file);
  });
};

module.exports = (app) => {
  const router = require("express").Router();
  const mongoose = require("mongoose");
  const Article = mongoose.model("Article");
  const Category = mongoose.model("Category");
  router.get("/news/init", async (req, res) => {
    let newsTitle = [
      "老亚瑟的答疑时间：甄姬-冰雪圆舞曲优化设计稿、青白蛇重做后续计划公布",
      "小乔周瑜新皮肤抢先直播测评！更有百套新皮肤在线抽送",
      "召唤师专属省钱福利，尽在王者人生",
      "狄某有话说丨顶级理解，打野百里、AD张飞请求出战？！",
      "《王者荣耀》项目组诚邀您加入",
      "挂车行为专项违规处罚公告",
      "体验服专区福利升级维护，功能暂停使用",
      "5月18日体验服停机更新公告",
      "5月17日部分安卓机型闪退异常说明",
      "5月18日全服不停机更新公告",
      "【助力5:20-音乐制作人】活动公告",
      "甜蜜时光携手共度，音你心动爱在峡谷",
      "“初夏超值福利卡”活动公告",
      "凤凰偕飞活动相关FAQ",
      "凤凰偕飞抽奖活动限时上线",
      "十六强集结，骚白战队首亮相！斗鱼大师赛S3精彩揭幕",
      "四周超四万人报名，女选手当仁不让!全国大赛合作赛道海选赛数据回顾",
      "赛点搬到家门口|第三届王者荣耀全国大赛城市赛道盛况空前，王者人生助力全民绽放电竞",
      "集合，目标武汉总决赛！全国大赛城市赛道第一期晋级资格赛战队巡礼",
      "全国大赛全国行｜这个五一你参赛了吗？第三届王者荣耀全国大赛第一期大区决赛完美收官",
    ];
    const parent = await Category.findOne({
      name: "新闻分类",
    });
    const cats = await Category.find()
      .where({
        parent: parent,
      })
      .lean();
    //不带mogo里面的数据、
    const newsList = newsTitle.map((title) => {
      const catsRandom = cats.slice(0).sort((a, b) => Math.random - 0.5);
      return {
        title,
        categories: catsRandom.slice(0, 2),
      };
    });
    await Article.deleteMany({});
    await Article.insertMany(newsList);
    res.send(newsList);
  });
  router.get("/news/list", async (req, res) => {
    const parent = await Category.findOne({
      name: "新闻分类",
    });
    //   .populate({
    //     path: "childern",
    //     populate: {
    //       path: "newList",
    //     },
    //   })
    //   .lean();

    //聚合查询
    const cats = await Category.aggregate([
      {$match: {parent: parent._id}},
      {
        $lookup: {
          from: "article",
          localField: "_id",
          foreignField: "categories",
          as: "newsList",
        },
      },
      {
        $addFields: {
          newsList: {$slice: ["$newsList", 5]},
        },
      },
    ]);
    const subCats = cats.map((v) => v._id);
    cats.unshift({
      name: "热门",
      newsList: await Article.find()
        .where({
          categories: {$in: subCats},
        })
        .populate("categories")
        .limit(5).lean()
    });
    cats.map((cat) => {
      cat.newsList.map((news) => {
        news.categoryName =
          cat.name === "热门" ? news.categories[0].name : cat.name;
        return news;
      });
      return cat;
    });
    res.send(cats);
  });
  app.use("/web/api", router);
};

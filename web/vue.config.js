module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets: "@/assets",
        common: "@/common",
        components: "@/components",
        views: "@/views",
      },
    },
  },
  lintOnSave: false, //关闭eslint检查
  outputDir: __dirname + "/../server/web",
};

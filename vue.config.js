module.exports = {
  lintOnSave: false,

  outputDir: "../backend/static/dist",
  assetsDir: "static",
  indexPath: "./index.html",
  devServer: {
    disableHostCheck: true,
    port: 3329,
    proxy: {
      "/api": {
        target: "https://api.douban.com/v2/movie", // 这个就是我们要请求的豆瓣的接口
        changeOrigin: true, // 允许跨域，在本地会创建一个虚拟服务端，
        // 然后发送请求的数据，
        //并同时接收请求的数据，
        //这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRewrite: {
          "^/api": "", // 替换成target中的地址
        },
      },
    },
  },
};

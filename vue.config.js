module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "" : "/",
  lintOnSave: "warning",
  devServer: {
    contentBase: "./dist",
    open: true,
    hotOnly: true,
    port: 8091,
    hot: true, //热加载
    // proxy: {
    //     '/api': {
    //         target: 'http://192.168.6.100:8080/dist/',
    //         ws: true,
    //         changeOrigin: true,
    //         pathRewrite: {
    //             '^/api': ''
    //         }
    //     },
    //     '/foo': {
    //         target: '<other_url>'
    //     }
    // }
  },
};

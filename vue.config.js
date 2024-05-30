const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: ['vuetify'],
  devServer: {
    // port: 8080,
    client: {
      overlay: false,
      // overlay: {
      //   warnings: false,
      //   errors: false,
      // },
    },
  },
  lintOnSave:false,
  // publicPath: "/vuejs/template/",
  publicPath: "/",
});

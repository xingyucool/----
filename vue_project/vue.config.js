module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [require('postcss-pxtorem')({ rootValue: 37.5 })],
      },
    },
  },
};

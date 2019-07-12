const path = require('path');

module.exports = {
  // 1. 基础配置项
  entry: 'src/index.jsx',
  publicPath: './',
  // devPublicPath: 'http://127.0.0.1/', //
  // 2. 插件配置
  plugins: [
    ['ice-plugin-fusion', {
      themePackage: '@icedesign/theme',
    }],
    ['ice-plugin-moment-locales', {
      locales: ['zh-cn'],
    }],
  ],
  alias: {
    '@': path.resolve(__dirname, './src/'),
  },
  // 3. 自定义 webpack 配置
  // chainWebpack: (config) => {
  //   // 通过 webpack-chain 形式修改 webpack 配置
  //   config.devServer.hot(true);
  // }
};

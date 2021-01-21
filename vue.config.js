const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

const path = require('path');
// 处理路径
const resolve = (dir) => path.join(__dirname, dir);

// 添加less全局变量文件
function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, 'src/assets/less/var.less'), // 需要全局导入的less
      ],
    });
}

const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);

module.exports = {
  outputDir: 'dist',
  publicPath: process.env.NODE_ENV === 'production' ? '/vant-demo/' : '/',
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        '@assets': resolve('src/assets'),
        '@components': resolve('src/components'),
        '@store': resolve('src/store'),
      },
    },
  },
  chainWebpack(config) {
    // 修复热更新失效
    config.resolve.symlinks(true);

    // 全局添加less变量
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach((type) =>
      addStyleResource(config.module.rule('less').oneOf(type))
    );

  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 37.5,
            propList: ['*'],
          }),
        ],
      },
      less: {
        javascriptEnabled: true,
      },
    },
  },
};

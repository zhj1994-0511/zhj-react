const {
  override,
  fixBabelImports,
  addLessLoader,
  addDecoratorsLegacy
} = require('customize-cra');
//按需加载
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  //自定义主题
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#f90'
    },
  }),
  //装饰器
  addDecoratorsLegacy()
);
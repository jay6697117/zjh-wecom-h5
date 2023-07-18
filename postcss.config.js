const path = require('path')
module.exports = {
  plugins: {
    // 使用 cnjm-postcss-px-to-viewport 规避 postcss.plugin was deprecated 警告
    'cnjm-postcss-px-to-viewport': {
      unitToConvert: 'px', // 要转化的单位
      // viewportWidth: 750, // UI设计稿的宽度
      viewportWidth: 375, // 设置为375就不存在vant组件下的设计稿为375问题
      unitPrecision: 6, // 转化精度，转换后保留位数
      propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
      viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
      fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
      selectorBlackList: ['ignore'], // 指定不转换为视窗单位的类名
      minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
      mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
      replace: true, // 是否转换后直接更换属性值
      exclude: [], // 设置忽略文件，用正则做目录名匹配
      landscape: false, // 是否处理横屏情况
      // 如果没有使用其他的尺寸来设计，下面这个方法可以不需要，比如vant是375的
      customFun: ({ file }) => {
        // 这个自定义的方法是针对处理vant组件下的设计稿为375问题
        const designWidth = path.join(file).includes(path.join('node_modules', 'vant')) ? 375 : 375
        return designWidth
      }
    },
    autoprefixer: {
      overrideBrowserslist: ['Android >= 4.0', 'iOS >= 7', 'Chrome > 31', 'ff > 31']
    }
  }
}

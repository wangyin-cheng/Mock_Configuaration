const path = require('path');

const resolve = (dir) => {
    return path.join(__dirname, './', dir);
};

module.exports = {
    publicPath: './',
    assetsDir: 'static',
    productionSourceMap: false,
    // webpack-dev-server 相关配置
    devServer: {
        port: 3000,
        // 代理示例 https://webpack.docschina.org/configuration/dev-server/#devserver-proxy
        proxy: {
            '/local/api': {
                target: 'http://10.188.136.94:10000/g/hspf-shelf-svr/v',
                ws: true,
                changeOrigin: true, // 是否允许跨域
                pathRewrite: {
                    '^/local/api': ''
                }
            }
        }
    },
    css: {
        loaderOptions: {
            less: {
                // 全局注入变量及mixins
                additionalData: `@import "@/assets/style/variable.less";`,
            }
        }
    },
    configureWebpack: () => ({
        resolve: {
            alias: {
                '@': resolve('src'),
                '@assets': resolve('src/assets'),
                '@style': resolve('src/assets/style'),
                '@js': resolve('src/assets/js'),
                '@components': resolve('src/components'),
                '@mixins': resolve('src/mixins'),
                '@filters': resolve('src/filters'),
                '@store': resolve('src/store'),
                '@views': resolve('src/views'),

                // 文件别名
                'services': resolve('src/services'),
                'variable': resolve('src/assets/style/variable.less'),
                'utils': resolve('node_modules/@winner-fed/cloud-utils/dist/cloud-utils.esm'),
                'mixins': resolve('node_modules/@winner-fed/magicless/magicless.less'),
            }
        }
    })
}

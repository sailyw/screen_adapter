module.exports = {
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-px2rem')({
                        // 以设计稿1920为例， 1920 / 10 = 192
                        remUnit: 192
                    }),
                ]
            }
        }
    },
    lintOnSave: false,
    productionSourceMap: false,
    publicPath: "./",
    devServer: {
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
        proxy: {
            // 配置跨域
            "/api": {
                target: 'xxxxx',
                changOrigin: true,
                pathRewrite: {
                    "^/api": "",
                    "^/res": ""
                },
            },
        },
    },
}

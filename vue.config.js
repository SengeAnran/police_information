/**
 * vue、webpack等配置
 * https://cli.vuejs.org/zh/config
 */

module.exports = {
    // 打包后资源路径
    publicPath: '/',

    // 打包后文件夹名称
    outputDir: 'dist',

    // 文件名是否有哈希值
    filenameHashing: true,

    // 是否开启eslint保存时检测
    lintOnSave: true,

    // 是否使用包含运行时编译器（用于组件内子模板）
    runtimeCompiler: false,

    // 是否生成SourceMap
    productionSourceMap: false,

    // dev服务器配置
    devServer: {
        // 代理
        proxy: {
            '/api': {
                target: process.env.VUE_APP_BASE_API,//代理地址，这里设置的地址会代替axios中设置的baseURL
                changeOrigin: true,// 如果接口跨域，需要进行这个参数配置
                ws: true, // proxy websockets
                pathRewrite: {
                    '^/api': '/api'
                    //pathRewrite: {'^/api': '/'} 重写之后url为 http://192.168.1.16:8085/xxxx
                    //pathRewrite: {'^/api': '/api'} 重写之后url为 http://192.168.1.16:8085/api/xxxx
                }
            }
        }
    }
}

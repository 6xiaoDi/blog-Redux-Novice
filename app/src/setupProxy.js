const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use('/api', createProxyMiddleware({
        target: 'http://localhost:7777/',
        // 路径重写，去掉“/api”
        pathRewrite: {
            '^/api': ''
        } }));
    // （存在多个服务器）如果想配置多个再调用ues方法即可
}
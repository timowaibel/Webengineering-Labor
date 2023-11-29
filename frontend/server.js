const express = require('express');
const proxy = require('http-proxy-middleware');
const path = require('path');

const app = express();

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use('/api', proxy.createProxyMiddleware({
    target: process.env.API_URL,
    changeOrigin: true,
    pathRewrite: {
        '^/api': ''
    }
}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.all('*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

const port = process.env.PORT || 80;

app.listen(port, () => console.log(`Server started on port ${port}`));

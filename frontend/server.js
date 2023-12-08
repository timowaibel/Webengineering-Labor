const express = require('express');
const proxy = require('http-proxy-middleware');
const path = require('path');

// Create Express app.
const app = express();

// Serve static files.
app.use('/public', express.static(path.join(__dirname, 'public')));

// Proxy API requests to the API server.
app.use('/api', proxy.createProxyMiddleware({
    target: process.env.API_URL,
    changeOrigin: true,
    pathRewrite: {
        '^/api': ''
    }
}));

// Serve the frontend application.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Handle 404.
app.all('*', (req, res) => {
    res.status(404).send('Not Found');
});

// Start the server.
const port = process.env.PORT || 80;
app.listen(port, () => console.log(`Server started on port ${port}`));

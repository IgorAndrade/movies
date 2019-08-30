const express = require('express');
const proxy = require('express-http-proxy');
const PORT = process.env.PORT || 8080;
const API_URL = process.env.API_URL || 'https://api.themoviedb.org';
const API_KEY = process.env.API_KEY;
const API_VERSION = process.env.API_VERSION || '3';

if (!API_KEY) {
    console.log("API_KEY is requerid")
    return process.exit(1);
}

const app = express();

let resolver =  {
    proxyReqPathResolver: function (req) {
        var parts = req.url.split('?');
        var queryString = parts[1];
        var updatedPath = parts[0].replace(/api/, API_VERSION);
        var key = `api_key=${API_KEY}`
        return updatedPath + (queryString ? `?${queryString}&${key}` : `?${key}`);
    }
};

app.use(express.static('dist'));
app.get('/api/*', proxy(API_URL,resolver));
app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});
app.listen(PORT || 8080, () => console.log(`Listening on port ${PORT}!`));

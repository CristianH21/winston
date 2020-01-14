const express = require('express');
const logger = require('./utils/logger');

const app = express();

app.get('', (req, res) => {
    res.send('Hello World');
    logger.log('info', 'Entered home.');
});

app.get('/products', (req, res) => {
    res.send('List of products');
    logger.log('info', 'Searching for products.');
});

app.get('/users', (req, res) => {
    res.send('List of users');
    logger.log('info', 'Searching for users.');
});

app.get('**', (req, res) => {
    res.send('404: NOT FOUND!');
    console.log(req.connection.remoteAddress);
    console.log(req.ip);
    console.log(req.originalUrl);
    console.log(req.baseUrl);
    logger.log('error', `404 - URL [${req.originalUrl}] not found.`);
});

app.listen('3000', () => {
    logger.info('Server on port 3000');
});
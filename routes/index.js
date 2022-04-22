const routes = require('express').Router();
const quotes = require('../controllers/');

routes.get('/', quotes.displayName);
module.exports = routes;
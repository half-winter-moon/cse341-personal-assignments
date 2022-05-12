const express = require('express');
const router = express.Router();
const contactInfo = require('../controllers/contacts.js');

// use contacts.js file to make multiple routes
router.use('/contacts', require('./contacts'));

module.exports = router;
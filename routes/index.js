const express = require('express');
const router = express.Router();
const contactInfo = require('../controllers/contacts.js');

// // GET all docs from contacts collection
// router.get('/', contactInfo.getData);

// // GET a single doc from contacts collection where id matches
// router.get('/:id', contactInfo.getPeiceOfData);

// use contacts.js file to make multiple routes
router.use('/contacts', require('./contacts'));

module.exports = router;
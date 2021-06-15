// stores all the contact us routes
const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.route('/')
    .get(contactController.contact_create_get)
    .post(contactController.contact_create_post);

module.exports = router;

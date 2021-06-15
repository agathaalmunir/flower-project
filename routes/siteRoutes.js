// Display the About Page
const express = require('express');
const router = express.Router();
const siteController = require('../controllers/siteController');

router.route('/')
    .get(siteController.index);
    
router.route('about')
    .get(siteController.about);

module.exports = router;



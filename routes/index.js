// routes.index.js will call our designRoutes.js and messageRoutes.js 

const express = require('express');
const router = express.Router();

// bring in Routes
const siteRoutes = require('./siteRoutes');
const designRoutes = require('./designRoutes');
const messageRoutes = require('./messageRoutes');
const contactRoutes = require('./contactRoutes');


// use Routes 
router.use('/', siteRoutes)
router.use('/design', designRoutes);
router.use('/submission', messageRoutes);
router.use('/contact', contactRoutes)


// export our router to use in app.js
module.exports = router; 
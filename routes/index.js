// routes.index.js will call our designRoutes.js and messageRoutes.js 

const express = require('express');
const router = express.Router();

// bring in designRoutes
const designRoutes = require('./designRoutes');
const messageRoutes = require('./messageRoutes');

// use designRoutes at paths that begin with /design
router.use('/design', designRoutes);
router.use('/submission', messageRoutes);

// export our router to use in app.js
module.exports = router; 
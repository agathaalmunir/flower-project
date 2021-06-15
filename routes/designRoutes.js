// Stores all bouquet design routes

const express = require('express');
const router = express.Router();
const designController = require('../controllers/designController');

// PATH IS /design/
router.route('/')
    .get(designController.all)
    .post(designController.design_create_post);

//PATH IS /design/new
router.route('/new')
    .get(designController.design_create_post); 

//PATH IS /design/:id 
router.route('/:id')
    .get(designController.design_detail) 
    .post(designController.design_update_put);

router.route(':/id/edit')
    .get(designController.design_update_get);

// export designRoutes.js for use in routes/index.js
module.exports = router;






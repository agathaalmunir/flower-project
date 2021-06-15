// Stores all Message Form Routes

const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

// Path is /submission/
router.route('/:idParams')
//Display New Message Form
    .get(messageController.message_create_get)
// Creates new message form
    .post(messageController.message_create_post)


module.exports = router;
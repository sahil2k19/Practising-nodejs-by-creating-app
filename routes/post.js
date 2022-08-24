const express = require('express');
const router = express.Router();

const post = require('../controllers/post_controller');

router.get('/', post.home);

module.exports = router;
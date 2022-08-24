const express = require('express');

const router = express.Router();


//fetching controller
const usersController = require('../controllers/users_controller');

//use controller
//this router can go to: locahost/users/profile
router.get('/profile', usersController.profile);


//this router can go to: locahost/users/
router.get('/', usersController.users);



console.log('profile router loaded');
module.exports = router;
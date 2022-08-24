
// here all the app.get , app.post and everything will be handled by this module

const express = require('express');
const router = express.Router();

//here we storing the home controller 
const homeController = require('../controllers/home_controller');


//here we use home action in homeController
router.get('/', homeController.home);


//here we define router other than home 
router.use('/users', require('./users'));

router.use('/post', require('./post'));


//for refrences
// const homeController = require('../controller/home_controller);
//router.get('/address', homeController.actionName)

console.log('router loaded');
module.exports = router;
const express = require('express');
const router = express.Router();
const authController = require('../controller/auth');
const {isUserLoggedIn} = require('../middleware/authMiddleware');

router.post('/signup', authController.userSignUp)
router.post('/userLogin',authController.userLogin)

module.exports = router;
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController.js');

// Register a new user
router.post('/register', authController.register);

// Login a user (no authentication logic required)
router.post('/login', authController.login);

module.exports = router;

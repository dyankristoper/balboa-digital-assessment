const express = require('express');
const router = express.Router();

const { authenticate, createUser } = require('../controllers/auth.controller');

router.post('/login', authenticate );
router.post('/signup', createUser );

module.exports = router;
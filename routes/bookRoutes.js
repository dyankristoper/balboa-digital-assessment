const express = require('express');
const router = express.Router();

const { findAll, unpublish, publish } = require('../controllers/book.controller');

// Middleware
const { checkUserToPublish } = require('../middlewares/auth');

router.get('/', findAll );
router.put('/:id/publish', checkUserToPublish, publish );
router.delete('/:id/unpublish', unpublish );

module.exports = router;
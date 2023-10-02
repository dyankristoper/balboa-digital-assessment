const express = require('express');
const router = express.Router();

const { findAll, unpublish, publish } = require('../controllers/book.controller');

router.get('/', findAll );
router.put('/:id/publish', publish );
router.delete('/:id/unpublish', unpublish );

module.exports = router;
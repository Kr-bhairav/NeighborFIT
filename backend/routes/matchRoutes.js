const express = require('express');
const router = express.Router();
const { matchNeighborhoods } = require('../controllers/matchController');
const { createNeighborhood, getAllNeighborhoods } = require('../controllers/adminController');

router.post('/', matchNeighborhoods);

router.post('/admin/create', createNeighborhood);
router.get('/admin/all', getAllNeighborhoods); 

module.exports = router;

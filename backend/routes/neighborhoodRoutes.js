const express = require('express');
const router = express.Router();
const { isAuthenticated, isAdmin } = require('../middleware/authMiddleware');
const {
  addNeighborhood,
  deleteNeighborhood,
  updateNeighborhood
} = require('../controllers/neighborhoodController');

// Admin: Add new city
router.post('/', isAuthenticated, isAdmin, addNeighborhood);
router.delete('/:id', isAuthenticated, isAdmin, deleteNeighborhood);
router.put('/:id', isAuthenticated, isAdmin, updateNeighborhood);

module.exports = router;

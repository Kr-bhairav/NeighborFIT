const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../middleware/authMiddleware');
const {
  addReview,
  getReviewsByNeighborhood,
  getAverageRating
} = require('../controllers/reviewController');

// Add a review
router.post('/', isAuthenticated, addReview);
router.get('/:neighborhoodId', getReviewsByNeighborhood);
router.get('/average/:neighborhoodId', getAverageRating);

module.exports = router;

const express = require('express');
const router = express.Router();
const { isAuthenticated, isAdmin } = require('../middleware/authMiddleware');
const {
  submitFeedback,
  getAllFeedbacks
} = require('../controllers/feedbackController');
router.post('/', isAuthenticated, submitFeedback);
router.get('/', isAuthenticated, isAdmin, getAllFeedbacks);

module.exports = router;

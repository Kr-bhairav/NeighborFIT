const Review = require('../models/Review');

// Add a review
exports.addReview = async (req, res) => {
  const { neighborhoodId, rating, comment } = req.body;

  try {
    const existing = await Review.findOne({
      user: req.user._id,
      neighborhood: neighborhoodId
    });

    if (existing) {
      return res.status(400).json({ message: 'You have already reviewed this neighborhood.' });
    }

    const review = new Review({
      user: req.user._id,
      neighborhood: neighborhoodId,
      rating,
      comment
    });

    await review.save();
    res.status(201).json({ message: 'Review added successfully', review });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all reviews for a neighborhood
exports.getReviewsByNeighborhood = async (req, res) => {
  try {
    const reviews = await Review.find({ neighborhood: req.params.neighborhoodId }).populate('user', 'username');
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get average rating for a neighborhood
exports.getAverageRating = async (req, res) => {
  try {
    const data = await Review.aggregate([
      { $match: { neighborhood: require('mongoose').Types.ObjectId(req.params.neighborhoodId) } },
      {
        $group: {
          _id: '$neighborhood',
          averageRating: { $avg: '$rating' },
          totalReviews: { $sum: 1 }
        }
      }
    ]);

    if (!data.length) return res.json({ averageRating: 0, totalReviews: 0 });
    res.json(data[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

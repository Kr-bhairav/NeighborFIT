const Feedback = require('../models/Feedback');

// Submit feedback
exports.submitFeedback = async (req, res) => {
  const { message } = req.body;

  try {
    const feedback = new Feedback({
      user: req.user._id,
      message
    });

    await feedback.save();
    res.status(201).json({ message: 'Thank you for your feedback!' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Admin gets all feedbacks
exports.getAllFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().populate('user', 'username email');
    res.status(200).json(feedbacks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

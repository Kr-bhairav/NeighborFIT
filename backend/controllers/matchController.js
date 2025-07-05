const { calculateScore } = require('../services/matchUtils');
const Neighborhood = require('../models/Neighborhood');

const matchNeighborhoods = async (req, res) => {
  try {
    const { preferences, weights } = req.body;

    if (!preferences || typeof preferences !== 'object' || Object.keys(preferences).length === 0) {
      return res.status(400).json({ error: "Missing or invalid 'preferences' object" });
    }

    if (!weights || typeof weights !== 'object' || Object.keys(weights).length === 0) {
      return res.status(400).json({ error: "Missing or invalid 'weights' object" });
    }

    const neighborhoods = await Neighborhood.find();
    if (!neighborhoods || neighborhoods.length === 0) {
      return res.status(404).json({ error: "No neighborhood data found" });
    }

    const results = neighborhoods.map(area => {
      const score = calculateScore(preferences, weights, area);
      return {
        ...area._doc,
        score: isNaN(score) ? 0 : score
      };
    });

    results.sort((a, b) => b.score - a.score);

    return res.status(200).json({ matches: results.slice(0, 3) });

  } catch (error) {
    console.error("Match error:", error);
    return res.status(500).json({ error: "Internal server error. Please try again later." });
  }
};

module.exports = { matchNeighborhoods };

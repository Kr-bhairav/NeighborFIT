const Neighborhood = require('../models/Neighborhood');

const createNeighborhood = async (req, res) => {
    if (req.headers['x-admin-key'] !== process.env.ADMIN_SECRET) {
  return res.status(403).json({ error: "Unauthorized" });
}
  try {
    const {
      name,
      affordability,
      safety,
      nightlife,
      internet,
      parks,
      schools
    } = req.body;

    if (!name || typeof name !== 'string') {
      return res.status(400).json({ error: "Neighborhood name is required and must be a string." });
    }

    const newNeighborhood = new Neighborhood({
      name,
      affordability: Number(affordability),
      safety: Number(safety),
      nightlife: Number(nightlife),
      internet: Number(internet),
      parks: Number(parks),
      schools: Number(schools)
    });

    await newNeighborhood.save();
    res.status(201).json({ message: "Neighborhood created successfully", data: newNeighborhood });

  } catch (error) {
    console.error("Create error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getAllNeighborhoods = async (req, res) => {
  try {
    const data = await Neighborhood.find();
    res.status(200).json(data);
  } catch (error) {
    console.error("Fetch error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { createNeighborhood, getAllNeighborhoods };

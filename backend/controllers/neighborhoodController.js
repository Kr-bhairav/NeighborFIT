const Neighborhood = require('../models/Neighborhood');

// Admin: Add new neighborhood
exports.addNeighborhood = async (req, res) => {
  try {
    const { name, affordability, safety, nightlife, internet, greenery, education, description } = req.body;

    const existing = await Neighborhood.findOne({ name });
    if (existing) {
      return res.status(400).json({ message: 'Neighborhood already exists' });
    }

    const neighborhood = new Neighborhood({
      name,
      affordability,
      safety,
      nightlife,
      internet,
      greenery,
      education,
      description
    });

    await neighborhood.save();
    res.status(201).json({ message: 'Neighborhood added', neighborhood });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Admin: Delete a neighborhood
exports.deleteNeighborhood = async (req, res) => {
  try {
    const result = await Neighborhood.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ message: 'Neighborhood not found' });

    res.status(200).json({ message: 'Neighborhood deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Admin: Update neighborhood
exports.updateNeighborhood = async (req, res) => {
  try {
    const updated = await Neighborhood.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Neighborhood not found' });

    res.status(200).json({ message: 'Neighborhood updated', updated });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

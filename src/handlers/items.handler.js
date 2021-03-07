const items = require("../data/items.json");

const getItems = async (req, res) => {
  res.status(200).json({ data: items });
};

module.exports = { getItems };

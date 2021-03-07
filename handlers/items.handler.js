const items = require("../items.json");

const getItems = async (req, res) => {
  console.log("in");
  res.status(200).json({ data: items });
};

module.exports = { getItems };

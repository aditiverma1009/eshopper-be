const orders = require("../data/orders.json");

const getOrders = async (req, res) => {
  res.status(200).json({ data: orders });
};

module.exports = { getOrders };

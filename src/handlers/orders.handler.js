const fs = require("fs");
const orders = require("../data/orders.json");

const getOrders = async (req, res) => {
  res.status(200).json({ data: orders });
};

const addOrder = async (req, res) => {
  const existingOrders = JSON.parse(fs.readFileSync("src/data/orders.json"));
  const existingOrdersCount = existingOrders.length;
  const newOrder = {
    ...req.body,
    id: existingOrdersCount + 1,
    date: Date.now(),
  };
  fs.writeFileSync(
    "src/data/orders.json",
    JSON.stringify([...existingOrders, newOrder])
  );
  res.status(200).json({ data: newOrder });
};

module.exports = { getOrders, addOrder };

const express = require("express");
const ordersHandler = require("../handlers/orders.handler");

const ordersRouter = express.Router();

ordersRouter.get("/", ordersHandler.getOrders);

module.exports = {
  ordersRouter,
};

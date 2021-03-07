const express = require("express");
const itemsHandler = require("../handlers/items.handler");

const itemsRouter = express.Router();

itemsRouter.get("/", itemsHandler.getItems);

module.exports = {
  itemsRouter,
};

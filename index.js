const express = require("express");

const {
  healthRouter,
  itemsRouter,
  ordersRouter,
} = require("./src/routes/index");

const app = express();

const port = 8080;

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use(express.json());
app.use("/items", itemsRouter);
app.use("/orders", ordersRouter);
app.use("/health", healthRouter);

app.listen(port, () => {
  console.log(`Server is up at ${port}`);
});

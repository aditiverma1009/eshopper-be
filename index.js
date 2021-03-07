const express = require("express");

const { healthRouter, itemsRouter } = require("./routes/index");

const app = express();

const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use(express.json());
app.use("/items", itemsRouter);
app.use("/health", healthRouter);

app.listen(3000, () => {
  console.log(`Server is up at ${port}`);
});

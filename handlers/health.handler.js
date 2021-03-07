const healthHandler = (req, res) => {
  console.log("health");
  res.status(200).json({
    message: "Running",
  });
};
module.exports = { healthHandler };

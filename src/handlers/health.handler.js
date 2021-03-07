const healthHandler = (req, res) => {
  res.status(200).json({
    message: "Running",
  });
};
module.exports = { healthHandler };

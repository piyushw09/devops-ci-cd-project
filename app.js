const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello from DevOps CI/CD Project deployed using Jenkins and Docker!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

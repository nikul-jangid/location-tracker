const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.json());

// Public folder serve karna
app.use(express.static(path.join(__dirname, "public")));

// API route
app.post("/location", (req, res) => {
  const location = req.body;
  console.log("Received location:", location);
  res.send("Location received successfully");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

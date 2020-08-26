const express = require("express");
const parser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

// fix cors issue for development
app.use(cors());

// resolve possible JSON encoding issues
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log("Server is working as expected");
  res.send("Server is working as expected");
});

app.listen(PORT, (error) => {
  if (error) console.error("ERROR while starting a server: \n", error);
  console.log(`Server is live on port ${PORT}`);
});

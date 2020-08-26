const express = require("express");
const parser = require("body-parser");
const cors = require("cors");
const router = express.Router();
const fetch = require("node-fetch");

const app = express();
const PORT = 3030;

async function getSongs(url) {
  const response = await fetch(url);
  return response;
}

// fix cors issue for development
app.use(cors());

// resolve possible JSON encoding issues
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.get("/get", (req, res) => {
  console.log("Server is working as expected");
  res.send("Server is working as expected");
});

router.route("/generatePlaylist/:query").get(async (req, res) => {
  console.log("getting a get request");
  await getSongs(
    `https://api.musixmatch.com/ws/1.1/track.search?${req.params.query}`
  )
    .then((response) => (console.log(response), response.json()))
    .then((data) => res.send(data))
    .catch((error) => console.error(error));
});

app.use("/api", router);

app.listen(PORT, (error) => {
  if (error) console.error("ERROR while starting a server: \n", error);
  console.log(`Server is live on port ${PORT}`);
});

const { request } = require("express");
const express = require("express");
const app = express();

const { quotes } = require("./data");
const { getRandomElement } = require("./utils");

const PORT = process.env.PORT || 4001;

app.use(express.static("public"));

// app.get("/index", (req, res, next) => {
//   res.send(qoutes);
// });

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

const express = require("express");

const { quotes } = require("./data");
const { getRandomElement } = require("./utils");

quotesRouter = express.Router();

quotesRouter.get("/random", (req, res, next) => {
  const newQuote = getRandomElement(quotes);
  const sendBack = { quote: newQuote };
  res.send(sendBack);
});

module.exports = quotesRouter;

const express = require("express");

const { quotes } = require("./data");
const { getRandomElement } = require("./utils");

quotesRouter = express.Router();

// gets a quote randomly
quotesRouter.get("/random", (req, res, next) => {
  const newQuote = getRandomElement(quotes);
  const sendBack = { quote: newQuote };
  res.send(sendBack);
});

// gets either all the quotes or a specific quote depending on the users input on author
quotesRouter.get("/", (req, res, next) => {
  const person = req.query.person;
  if (person) {
    const returnArr = quotes.filter((quote) => {
      return quote.person === person;
    });
    res.send({ quotes: returnArr });
  } else {
    const quotesResponse = { quotes: quotes };
    res.send(quotesResponse);
  }
});

quotesRouter.post("/", (req, res, next) => {
  if (!req.query.quote && !req.query.person) {
    res.status(400).send();
  } else {
    const person = req.query.person;
    const quote = req.query.quote;
    quotes.push({ person: person, quote: quote });
    res.send({ quote: { person: person, quote: quote } });
  }
});

module.exports = quotesRouter;

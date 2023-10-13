const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const Spending = require("./model/Spending");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let spendings = [];
let spendingId = 1;

app.get("/spendings", (req, res) => {
  res.send(spendings);
});

app.post("/spending", (req, res) => {
  try {
    const { description, amount, currency } = req.body;
    const newSpending = new Spending(spendingId, description, amount, currency);
    spendings.push(newSpending);
    spendingId++;

    res.send(newSpending);
  } catch(error) {
    throw error;
  }
});

module.exports = app;

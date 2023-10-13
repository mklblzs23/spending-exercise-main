class Spending {
  constructor(id, description, amount, currency) {
    this.id = id;
    this.description = description;
    this.amount = amount;
    this.spent_at = new Date();
    this.currency = currency;
  }
}

module.exports = Spending;

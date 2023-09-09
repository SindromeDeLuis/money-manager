const mongoose = require('mongoose');
const { Schema } = mongoose;

const TransactionsSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, default: null, required: true },
    category: { type: String, required: true },
    type: { type: String, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    wallet: { type: String, required: true },
    userID: { type: String, required: true }
  });

  module.exports = mongoose.model('Transaction', TransactionsSchema);
const Transaction = require('../models/Transaction');
const moment = require('moment');

async function index(req, res) {
    const transactions = await Transaction.find({ userID: '1'/*req.user.id*/ })
        .sort({ date: "desc" })
        .lean();
    //res.render("notes/all-notes", { notes });
    return transactions;
}

async function create(req, res) {
    console.log('create form')
}

async function store(req, res) {
    const { name, description, type, category, amount, date, wallet } = req.body
    const newTransaction = new Transaction({ name, description, type, category, amount, date, wallet });
    newTransaction.userID = 1 //req.user.id;
    await newTransaction.save();
}

async function edit(req, res) {
    
    const transaction = await Transaction.findById({ _id: req.params.id }).lean();
    transaction.date = moment(transaction.date).format("YYYY-MM-DDTkk:mm")
    return transaction
}

async function update(req, res) {
    const { name, description, type, amount, date, wallet } = req.body;
    await Transaction.findByIdAndUpdate(req.params.id, { name, description, type, category, amount, date, wallet });
}

async function destroy(req, res) {
    await Transaction.findByIdAndDelete(req.params.id);
}

module.exports = { index, create, store, edit, update, destroy };
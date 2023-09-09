const express = require("express");
const router = express.Router();
const { index, create, store, edit, update, destroy } = require('../controllers/transaction');

router.get("/transactions", async (req, res) => {
    //res.render("transactions", { transactions: index });
    const transactions = await index(req, res)
    res.json(transactions)
});

router.get("/newTransaction", (req, res) => {
    //res.render("newTansaction", { create });
    res.json(create)
});

router.post("/newTransaction", (req, res) => {
    store(req, res)
    res.redirect("/transactions");
});

router.get("/editTransaction/:id", async (req, res) => {
    //res.render("editTansaction", { transaction: edit });
    const transaction = await edit(req, res)
    res.json(transaction)
});

router.put("/editTransaction/:id", (req, res) => {
    update(req, res)
    res.redirect("/transactions");
});

router.delete("/deleteTransaction/:id", (req, res) => {
    destroy(req, res)
    res.redirect("/transactions");
});

module.exports = router;
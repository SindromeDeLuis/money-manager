<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-sm-6">
        <div class="card">
          <div class="card-header">
            <h5>Edit transaction</h5>
          </div>
          <div class="card-body">
            <form>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  v-model="transaction.type"
                  id="exampleRadios1"
                  value="Income"
                />
                <label class="form-check-label" for="exampleRadios1">
                  Income
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  v-model="transaction.type"
                  id="exampleRadios2"
                  value="Expense"
                />
                <label class="form-check-label" for="exampleRadios2">
                  Expense
                </label>
              </div>
              <div class="form-group">
                <label for="name">Transaction title</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Transaction title"
                  v-model="transaction.name"
                />
              </div>
              <div class="form-group">
                <label for="categories">Categories</label>
                <select class="form-control" id="categories" v-model="transaction.category">
                  <option>Food & Beverages</option>
                  <option>Clothes & Shoes</option>
                  <option>Personal Hygiene</option>
                  <option>Home</option>
                  <option>Health</option>
                </select>
              </div>
              <div class="form-group">
                <label for="description">Description</label>
                <textarea
                  class="form-control"
                  id="description"
                  rows="2"
                  v-model="transaction.description"
                ></textarea>
              </div>
              <div class="form-group row">
                <label for="date" class="col-sm-2 col-form-label">Date</label>
                <div class="col-sm-4">
                  <input
                    type="datetime-local"
                    class="form-control"
                    id="date"
                    v-model="transaction.date"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="wallets">Wallets</label>
                <select class="form-control" id="wallets" v-model="transaction.wallet">
                  <option>Cash</option>
                  <option>Bank account #1</option>
                  <option>Bank account #1</option>
                  <option>Credit card</option>
                  <option>Paypal</option>
                  <option>Binance</option>
                </select>
              </div>
              <div class="form-group">
                <label for="name">Amount</label>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text">$</span>
                  </div>
                  <div class="col-sm-6">
                    <input
                      type="number"
                      min="0"
                      class="form-control"
                      aria-label="Amount (to the nearest dollar)"
                      v-model="transaction.amount"
                    />
                  </div>
                </div>
              </div>
              <div class="d-flex flex-row-reverse">
                <button
                  @click="storeTransaction()"
                  class="btn btn-success"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: "TransactionsEditView",
  setup() {
    const transaction = reactive({
        name: "",
        description: "",
        type: "",
        category: "",
        amount: "",
        date: "",
        wallet: ""
      })
    return {
      transaction
    };
  },
  methods: {
    async storeTransaction() {
      const transactionData = this.transaction;
      let url = "http://localhost:3000/newTransaction";
      try {
        await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            //"x-access-token": "token-value",
          },
          body: JSON.stringify({
            name: this.transaction.name,
            description: this.transaction.description,
            type: this.transaction.type,
            category: this.transaction.category,
            amount: this.transaction.amount,
            date: this.transaction.date,
            wallet: this.transaction.wallet
          })
        })
        //let data = await request.json();
        console.log(transactionData)
      } catch (error) {
        console.log(error);
      }
    }
  },
  components: {},
};
</script>

<style scoped></style>

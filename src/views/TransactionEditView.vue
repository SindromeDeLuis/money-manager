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
                  v-model="state.transaction.type"
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
                  v-model="state.transaction.type"
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
                  placeholder="Transaction title" v-model="state.transaction.name"
                />
              </div>
              <div class="form-group">
                <label for="categories">Categories</label>
                <select class="form-control" id="categories" v-model="state.transaction.category">
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
                  rows="2" v-model="state.transaction.description" 
                ></textarea>
              </div>
              <div class="form-group row">
                <label for="date" class="col-sm-2 col-form-label">Date</label>
                <div class="col-sm-4">
                  <input
                    type="datetime-local"
                    class="form-control"
                    id="date"
                    v-model="state.transaction.date"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="wallets">Wallets</label>
                <select class="form-control" id="wallets" v-model="state.transaction.wallet">
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
                      type="number" min="0"
                      class="form-control"
                      aria-label="Amount (to the nearest dollar)" v-model="state.transaction.amount"
                    />
                  </div>
                </div>
              </div>
              <div class="d-flex flex-row-reverse">
                <button class="btn btn-success">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed, onMounted  } from 'vue'
import { useRoute , useRouter } from 'vue-router'

export default {
    name: 'TransactionsEditView',
    setup() {
      const route = useRoute();
      const Id = computed(() => route.params.id);
      const state = reactive({
        transaction: {}
      })

      async function getTransaction(id) {
        let url = "http://localhost:3000/editTransaction/" + id;
        try {
          let response = await fetch(url)
          let data = await response.json();
          state.transaction = data
        } catch (error) {
          console.log(error);
        }
      }

      onMounted(() => {
        getTransaction(Id.value)
      })
    return { state, getTransaction };
  },
  methods: {
    async updateTransaction() {
      const transactionData = this.transaction;
      let url = "http://localhost:3000/newTransaction" + Id.value;
      try {
        await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            //"x-access-token": "token-value",
          },
          body: JSON.stringify({
            name: this.state.transaction.name,
            description: this.state.transaction.description,
            type: this.state.transaction.type,
            category: this.state.transaction.category,
            amount: this.state.transaction.amount,
            date: this.state.transaction.date,
            wallet: this.state.transaction.wallet
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

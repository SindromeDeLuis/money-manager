<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-10">
        <div class="card">
          <div class="card-header">
            <p class="fs-4 m-0 fw-bold">Transactions</p>
          </div>
          <div class="card-body">
            <div
              v-for="transaction in state.transactions"
              :key="transaction._id"
            >
            <h5 v-show="SameDate(transaction.date)">{{ formatDate(transaction.date) }}</h5>
            <a href="#" class="card mb-2">
                <div class="card-header card-head">
                    <h5>{{ transaction.name }}</h5> <p>{{ transaction.amount }}</p>
                </div>
                <div class="card-body">
                    <p>{{ transaction.description }}</p>
                    <!--<router-link :to="`/editTransaction/${transaction._id}`"
                        >Edit</router-link
                    >-->
                </div>
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted } from "vue";
import moment from 'moment';

var date1 = 0;

export default {
  name: "TransactionsView",
  setup() {
    const state = reactive({
      transactions: {},
    });

    async function getAll() {
      let url = "http://localhost:3000/transactions";
      try {
        let response = await fetch(url);
        let data = await response.json();
        state.transactions = data;
      } catch (error) {
        console.log(error);
      }
    }

    onMounted(() => {
      getAll();
    });

    return { state, getAll };
  },
  components: {},
  methods: {
    formatDate(date) {
        return moment(date).format('MMMM DD')
    },
    SameDate(newDate) {
        let show = moment(date1).format('MMMM DD YYYY') != moment(newDate).format('MMMM DD YYYY')
        date1 = newDate
        return show
    }
  },
};
</script>

<style scoped>
    a.card {
        text-decoration: none;
    }
    .card-head {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .card-head > h5 {
        margin-bottom: 0;
    }
    .card-head > p {
        font-size: 20px;
        margin-bottom: 0;
    }
    .card-body > p {
        margin-bottom: 0;
    }
</style>

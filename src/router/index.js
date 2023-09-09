import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TransactionsView from '../views/TransactionsView.vue'
import TransactionNewView from '../views/TransactionNewView.vue'
import TransactionEditView from '../views/TransactionEditView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/transactions',
    name: 'transactions',
    component: TransactionsView
  },
  {
    path: '/newTransaction',
    name: 'newTransaction',
    component: TransactionNewView
  },
  {
    path: '/editTransaction/:id',
    name: 'editTransaction',
    component: TransactionEditView
  }
]

const router = createRouter({
  history: createWebHistory(/*process.env.BASE_URL*/),
  routes
})

export default router
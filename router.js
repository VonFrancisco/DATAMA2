// src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import Login from './pages/Login.vue'
import Dashboard from './pages/Dashboard.vue'
import CreateReceipt from './pages/CreateReceipt.vue'
import Payment from './pages/Payment.vue'

const routes = [
  { path: '/', component: Login },
  { path: '/dashboard', component: Dashboard },
  { path: '/create-receipt', component: CreateReceipt },
  { path: '/payment/:receiptId', component: Payment },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

<template>
  <div>
    <h2>Dashboard</h2>
    <button @click="goCreate">Create Receipt</button>
    <table border="1">
      <thead>
        <tr>
          <th>Receipt ID</th>
          <th>Customer</th>
          <th>Total</th>
          <th>Status</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="r in receipts" :key="r.receipt_id">
          <td>{{ r.receipt_id }}</td>
          <td>{{ r.customer_name }}</td>
          <td>{{ r.total_amount }}</td>
          <td>{{ r.status }}</td>
          <td>{{ r.date_created }}</td>
          <td>
            <button @click="goPayment(r.receipt_id)">Pay</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { supabase } from '../supabase.js'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const receipts = ref([])

    const fetchReceipts = async () => {
      const { data, error } = await supabase.from('receipt_summary').select('*')
      if (!error) receipts.value = data
    }

    const goCreate = () => router.push('/create-receipt')
    const goPayment = (id) => router.push(`/payment/${id}`)

    fetchReceipts()

    return { receipts, goCreate, goPayment }
  },
}
</script>

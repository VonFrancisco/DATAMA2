<template>
  <div>
    <h2>Create Receipt</h2>
    <input v-model="customerId" placeholder="Customer ID" />
    <input v-model="employeeId" placeholder="Employee ID" />
    <button @click="createReceipt">Create</button>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
import { supabase } from '../supabase.js'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const customerId = ref('')
    const employeeId = ref('')
    const message = ref('')

    const createReceipt = async () => {
      const { data, error } = await supabase.from('receipt').insert({
        customer_id: parseInt(customerId.value),
        employee_id: parseInt(employeeId.value),
      })
      if (!error) {
        message.value = 'Receipt created!'
        router.push('/dashboard')
      } else {
        message.value = error.message
      }
    }

    return { customerId, employeeId, createReceipt, message }
  },
}
</script>

<template>
  <div>
    <h2>Process Payment for Receipt {{ receiptId }}</h2>
    <input v-model="amount" placeholder="Amount Paid" />
    <button @click="pay">Pay</button>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
import { supabase } from '../supabase.js'
import { useRoute, useRouter } from 'vue-router'

export default {
  setup() {
    const route = useRoute()
    const router = useRouter()
    const receiptId = route.params.receiptId
    const amount = ref('')
    const message = ref('')

    const pay = async () => {
      const { error } = await supabase.rpc('process_payment', {
        p_receipt_id: parseInt(receiptId),
        p_amount: parseFloat(amount.value),
      })
      if (!error) {
        message.value = 'Payment processed!'
        router.push('/dashboard')
      } else {
        message.value = error.message
      }
    }

    return { receiptId, amount, pay, message }
  },
}
</script>

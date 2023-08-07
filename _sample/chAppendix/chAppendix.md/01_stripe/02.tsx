import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'

// 以下の公開可能キーをご自身のものに置き換えてください
const stripePromise = loadStripe('pk_test_XXXXXXXXXXXXX')

function Payment() {
  const createPaymentSession = async () => {
    const stripe = await stripePromise
    if (stripe) {
      // 先ほど実装したサーバーサイドのAPIを呼び出します
      const res = await axios.post('/api/payment/session')
      // JSON形式で返ってくるセッションIDを指定してStripe決済ページへリダイレクトします
      const result = await stripe.redirectToCheckout({
        sessionId: res.data.id,
      })
      if (result.error) {
        alert(result.error.message)
      }
    }
  }

  return (
    <div>
      <section>
        <div>
          <h3>Tシャツ</h3>
          <h5>2,000円</h5>
        </div>
        <div>
          <button onClick={createPaymentSession}>購入する</button>
        </div>
      </section>
    </div>
  )
}

export default Payment
import { NextApiRequest, NextApiResponse } from 'next'
// 以下のシークレットキーをご自身のものに置き換えてください
const stripe = require('stripe')('sk_test_xxxxxxxxxxxxxxxxxxx')

export default async function payment(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  // クライアントから決済のボタンが押された際に、Stripeのカード決済を行います
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        // 以下のPrice IDをご自身のものに置き換えてください
        price: 'price_XXXXXXXXXXXXX',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'http://localhost:3000/payment/success',
    cancel_url: 'http://localhost:3000/payment/cancel',
  })
  res.json({ id: session.id })
}

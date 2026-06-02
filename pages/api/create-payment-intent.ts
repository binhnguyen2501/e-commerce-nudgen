import Stripe from "stripe";
import { NextApiRequest, NextApiResponse } from "next";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY as string, {
  apiVersion: '2022-11-15'
});

const calculateOrderAmount = (item: any) => {
  const totalPrice = item.reduce((acc: any, item: any) => {
    return acc + item.unit_amount! * item.quantity!
  }, 0)
  return totalPrice
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { items, payment_intent_id } = req.body

  if (payment_intent_id) {
    const current_intent = await stripe.paymentIntents.retrieve(payment_intent_id)

    if (current_intent) {
      const update_intent = await stripe.paymentIntents.update(
        payment_intent_id,
        {
          amount: calculateOrderAmount(items)
        }
      )
      res.status(200).json({ paymentIntent: update_intent })
      return
    }
  } else {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(items),
      currency: 'usd',
      automatic_payment_methods: {
        enabled: true
      }
    })

    res.status(200).json({ paymentIntent })
    return
  }

}



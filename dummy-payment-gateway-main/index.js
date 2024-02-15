import express from 'express'
import morgan from 'morgan'
import { validatePaymentRequest } from './middleware.js'
import { processPayment } from './payment.js'

const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.post('/pay', validatePaymentRequest, (req, res) => {
  const { amount, cardNumber } = req.body

  // emulate loading time
  setTimeout(() => {
    const result = processPayment(amount, cardNumber)

    if (!result.success) {
      res.status(400).json({ message: 'Payment failed', error: result.error })
      return
    }

    res.status(200).json({
      message: 'Payment successful',
      data: result.data
    })
  }, 2000)
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(400).json({ message: 'Invalid request' })
})

app.listen(3000, () => {
  console.log('Server started on port 3000')
})

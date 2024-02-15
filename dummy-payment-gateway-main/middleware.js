/**
 * Validates a payment request.
 *
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @param {function} next - The next middleware function.
 * @returns {void}
 */
export const validatePaymentRequest = (req, res, next) => {
  const { amount, cardNumber, cvv, expiryMonth, expiryYear } = req.body

  const errors = {}

  if (!amount) {
    errors.amount = 'Amount is required'
  }

  // amount should be a positive number
  if (amount <= 0 || isNaN(amount)) {
    errors.amount = 'Invalid amount'
  }

  if (!cardNumber) {
    errors.cardNumber = 'Card number is required'
  }

  if (!cvv) {
    errors.cvv = 'CVV is required'
  }

  // cvv should be a 3 or 4 digit number
  if (cvv.length < 3 || cvv.length > 4 || isNaN(cvv)) {
    errors.cvv = 'Invalid CVV'
  }

  if (!expiryMonth) {
    errors.expiryMonth = 'Expiry month is required'
  }

  if (!expiryYear) {
    errors.expiryYear = 'Expiry year is required'
  }

  // expiry month and year should be in the future
  if (
    expiryYear < new Date().getFullYear() ||
    (expiryYear === new Date().getFullYear() && expiryMonth < new Date().getMonth() + 1)
  ) {
    errors.expiryYear = 'Invalid expiry month/year'
  }

  if (Object.keys(errors).length > 0) {
    return res.status(422).json({ errors })
  }

  next()
}

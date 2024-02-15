/**
 * Process a payment transaction.
 *
 * @param {number} amount - The amount to be paid.
 * @param {string} cardNumber - The card number used for payment.
 * @returns {object} - An object containing the payment transaction details.
 *                    If the payment is successful, the object will have the following properties:
 *                      - success: true
 *                      - data: {
 *                          - transactionId: string
 *                          - amount: number
 *                          - date: Date
 *                        }
 *                    If the payment fails due to an invalid card number, the object will have the following properties:
 *                      - success: false
 *                      - error: string
 */
export const processPayment = (amount, cardNumber) => {
  if (!validCardNumbers.includes(cardNumber)) {
    return { success: false, error: 'Invalid card number' }
  }

  return {
    success: true,
    data: {
      transcationId: generateTransactionId(),
      amount,
      date: new Date()
    }
  }
}

/**
 * Generates a 16-digit transaction ID by joining 4 random 4-digit numbers.
 * @returns {string} The generated transaction ID.
 */
const generateTransactionId = () => {
  // generate 16 digit transaction id joined from 4 random 4 digit numbers
  const transactionId = Array.from({ length: 4 }, () =>
    Math.floor(Math.random() * 10000)
      .toString()
      .padStart(4, '0')
  ).join('')

  return transactionId
}

const validCardNumbers = [
  '4111111111111111',
  '4012888888881881',
  '4917610000000000',
  '5105105105105100',
  '6011111111111117',
  '3530111333300000',
  '3566002020360505',
  '2223000048400011',
  '2223520043560014',
  '5555555555554444',
  '5105105105105100',
  '3782822463100052',
  '3714496353984314'
]

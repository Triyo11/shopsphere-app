# Dummy Payment Gateway API

## Overview

The Dummy Payment Gateway API is a simple, mock payment processing service designed for testing and development purposes. It allows developers to simulate payment transactions without dealing with real financial institutions. This API only includes a single endpoint, `/pay`, which processes mock payments.

## API Endpoint

### Pay Endpoint

- **URL**: `/pay`
- **Method**: `POST`
- **Content-Type**: `application/json`
- **Description**: Processes a payment with the provided credit card information.

#### Request Body

| Attribute     | Type   | Description                               | Required |
| ------------- | ------ | ----------------------------------------- | -------- |
| `amount`      | Number | The payment amount in cents.              | Yes      |
| `cardNumber`  | String | The credit card number.                   | Yes      |
| `cvv`         | Number | The card's CVV (Card Verification Value). | Yes      |
| `expiryMonth` | String | The card's expiry month (MM).             | Yes      |
| `expiryYear`  | String | The card's expiry year (YYYY).            | Yes      |

#### Sample Request

```json
{
  "amount": 100,
  "cardNumber": "4012888888881881",
  "cvv": 201,
  "expiryMonth": "02",
  "expiryYear": "2024"
}
```

#### Valid Card Numbers

The following are valid card numbers that can be used for testing:

- `4111111111111111`
- `4012888888881881`
- `4917610000000000`
- `5105105105105100`
- `6011111111111117`
- `3530111333300000`
- `3566002020360505`
- `2223000048400011`
- `2223520043560014`
- `5555555555554444`
- `5105105105105100`
- `3782822463100052`
- `3714496353984314`

#### Response

- **Success Response Code**: `200 OK`
- **Error Response Code**: `400 Bad Request` (for invalid inputs or unsupported card numbers)

#### Success Response Body

```json
{
  "message": "Payment successful",
  "data": {
    "transcationId": "2166699451095975",
    "amount": 100,
    "date": "2024-02-07T09:12:11.268Z"
  }
}
```

#### Error Response Body

```json
{
  "message": "Payment failed",
  "error": "Invalid card number"
}
```

## Usage

This API is designed for development and testing purposes only and should not be used in production environments. Ensure that you use the provided valid card numbers for testing your payment integrations.

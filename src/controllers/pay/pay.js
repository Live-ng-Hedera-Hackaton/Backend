const Flutterwave = require('flutterwave-node-v3');
require('dotenv').config()

const flw = new Flutterwave(process.env.FLW_PUBLIC_KEY, process.env.FLW_SECRET_KEY);

// Initiating the transaction
const payload = {
    "card_number": "5531886652142950",
    "cvv": "564",
    "expiry_month": "09",
    "expiry_year": "24",
    "currency": "NGN",
    "amount": "100",
    "redirect_url": "https://www.google.com",
    "fullname": "Flutterwave Developers",
    "email": "developers@flutterwavego.com",
    "phone_number": "09000000000",
    "enckey": process.env.FLW_ENCRYPTION_KEY,
    "tx_ref": "example01"

}

const payload2 = {
    "card_number": "4242424242424242",
    "cvv": "812",
    "expiry_month": "01",
    "expiry_year": "31",
    "currency": "NGN",
    "amount": "100",
    "redirect_url": "https://www.google.com",
    "fullname": "Flutterwave Developers",
    "email": "developers@flutterwavego.com",
    "phone_number": "09000000000",
    "enckey": process.env.FLW_ENCRYPTION_KEY,
    "tx_ref": "example01"

}

const chargeCard = async () => {
    try {
        const response = await flw.Charge.card(payload2)
        console.log(response)
return response

    } catch (error) {
        console.log(error)
    }
}

module.exports=chargeCard
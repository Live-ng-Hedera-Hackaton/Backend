require('dotenv').config()
const { uuid } = require('uuidv4');

async function initPayment(amt, desc) {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'mono-sec-key': process.env.MONO_API,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      amount: amt,
      type: 'onetime-debit',
      description: desc,
      reference: uuid(),
      redirect_url: 'https://loanlink.vercel.app/dashboard/profile',
    }),
  }
  var data
  await fetch('https://api.withmono.com/v1/payments/initiate', options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response)
      data = response
    })
    .catch((err) => console.error(err))

  return data
}

module.exports = initPayment

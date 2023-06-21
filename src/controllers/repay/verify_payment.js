require('dotenv').config()

async function verifyPayment(ref) {
  var data

  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'mono-sec-key':process.env.MONO_API,
      'content-type': 'application/json',
    },
    body: JSON.stringify({ reference: ref }),
  }

  await fetch('https://api.withmono.com/v1/payments/verify', options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response)
      data = response
    })
    .catch((err) => console.error(err))

  return data
}

module.exports = verifyPayment

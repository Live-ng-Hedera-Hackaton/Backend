require('dotenv').config()

async function verifyBVNOtp(phone, sessionId) {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'mono-sec-key': process.env.MONO_API,
      'x-session-id': sessionId,
      'content-type': 'application/json',
    },
    body: JSON.stringify({ method: phone }),
  }

  await fetch('https://api.withmono.com/v2/lookup/bvn/verify', options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response)
      data = response
    })
    .catch((err) => console.error(err))
}

module.exports=verifyBVNOtp

require('dotenv').config()

async function initBVN(bvn) {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'mono-sec-key': process.env.MONO_API,
      'content-type': 'application/json',
    },
    body: JSON.stringify({ bvn: bvn }),
  }

  await fetch('https://api.withmono.com/v2/lookup/bvn/initiate', options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response)
      data = response
    })
    .catch((err) => console.error(err))
}
module.exports=initBVN
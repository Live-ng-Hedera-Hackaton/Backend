//This resource returns all the bank accounts linked to the BVN or Phone specified.
require('dotenv').config()

async function threeSixtyView(phone) {
  var data
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'mono-sec-key': process.env.MONO_API,
      'content-type': 'application/json',
    },
    body: JSON.stringify({ mode: 'BVN', number: phone}),
  }

  await fetch('https://api.withmono.com/v1/lookup/360view', options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response)
      data = response
    })
    .catch((err) => console.error(err))
}

module.exports=threeSixtyView
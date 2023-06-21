require('dotenv').config()

async function lookUpName() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'mono-sec-key': process.env.MONO_API,
    },
  }

 await fetch(`https://api.withmono.com/v1/cac/lookup?name=${businessName}`, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response)
      data = response
    })
    .catch((err) => console.error(err))
}

module.exports = lookUpName

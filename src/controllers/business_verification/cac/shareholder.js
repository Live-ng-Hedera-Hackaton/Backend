
require('dotenv').config()



async function getShareHolder(lookUpID) {
  var data
  const options = {
    method: 'GET',
    headers: { accept: 'application/json', 'mono-sec-key':process.env.MONO_API },
  }

 await fetch(`https://api.withmono.com/v1/cac/company/${lookUpID}`, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      data=response
    })
    .catch((err) => console.error(err))

    return data
}

module.exports=getShareHolder
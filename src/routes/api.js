const express = require('express');
const router = express.Router();
const wallet = require('../controllers/create_wallet')

router.get('/create-wallet', async (req, res) => {

  try {
    const success = await wallet();
    console.log(success);
    res.send(success);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred during the transfer.');
  }
});


router.post('/transfer', async (req, res) => {
  const address = req.body.address;
  const amount = req.body.amount;

  try {
    const success = await SendHBar(address, amount);
    console.log(success);
    res.send(success);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred during the transfer.');
  }
});

module.exports = router;

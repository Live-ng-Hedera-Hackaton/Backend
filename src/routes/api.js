const express = require('express');
const router = express.Router();
const wallet = require('../controllers/create_wallet')
const snd = require('../controllers/send')
const initPayment = require('../controllers/repay/charge');
const verifyPayment = require('../controllers/repay/verify_payment');
const lookUpName = require('../controllers/business_verification/cac/look_up');
const getShareHolder = require('../controllers/business_verification/cac/shareholder');
const chargeCard = require('../controllers/pay/pay');






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

router.get('/send', async (req, res) => {

  try {
    const success = await snd();
    console.log(success);
    res.send(success);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred during the transfer.');
  }
});

router.get('/charge', async (req, res) => {

  try {
    const success = await chargeCard();
    console.log(success);
    res.send(success);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred during the transfer.');
  }
});


router.get('/look-up-cac', async (req, res) => {
  try {
    const success = await lookUpName(req.body.businessName);
    console.log(success);
    res.send(success);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred during the transfer.');
  }
});


router.get('/get-biz-shareholder', async (req, res) => {
  try {
    const success = await getShareHolder(req.body.lookUpID);
    console.log(success);
    res.send(success);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred during the transfer.');
  }
});
0xFC5F5ae18214039c90d20d31824efE565BEeDaB4

router.post('/verify-payment', async (req, res) => {

  try {
    const success = await verifyPayment(req.body.reference);
    console.log(success);
    res.send(success);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred during the transfer.');
  }
});


router.post('/init-repayment', async (req, res) => {

  try {
    const success = await initPayment(req.body.amount,req.body.description);
    console.log(success);
    res.send(success);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred during the transfer.');
  }
});

router.post('/transferHbar', async (req, res) => {
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

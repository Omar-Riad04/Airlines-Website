const express = require('express');
const router = express.Router();
const Usercontrollers = require('../Controllers/Usercontrollers');
router.post('/submitbook', Usercontrollers.submitbookingForm);
router.post('/submitpay', Usercontrollers.submitpayform);
module.exports = router;
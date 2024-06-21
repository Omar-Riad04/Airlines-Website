const express = require('express');
const router = express.Router();
const Usercontrollers = require('../Controllers/Usercontrollers');


router.post('/searchflights', Usercontrollers.searchFlights);





router.post('/submitpay', Usercontrollers.submitpayform);




module.exports = router;
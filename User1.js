const express = require('express');
const router = express.Router();
const Usercontrollers = require('../Controllers/Usercontrollers');

router.post('/submit', Usercontrollers.submitcontactForm);


router.post('/submitstatus', Usercontrollers.searchstatus);


module.exports = router;
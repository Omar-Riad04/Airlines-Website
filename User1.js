const express = require('express');
const router = express.Router();
const Usercontrollers = require('../Controllers/Usercontrollers');
router.post('/submit', Usercontrollers.submitcontactForm);
module.exports = router;
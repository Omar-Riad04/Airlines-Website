const express = require('express');
const router = express.Router();
const Admincontrollers = require('../Controllers/Admincontrollers');
router.post('/editflightt', Admincontrollers.updateflight);
router.post('/deleteflight', Admincontrollers.deleteflight);
module.exports = router;
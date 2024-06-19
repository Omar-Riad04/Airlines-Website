const express = require('express');
const router1 = express.Router();
const Admincontrollers = require('../Controllers/Admincontrollers');
router1.post('/edituser', Admincontrollers.updateUser);
router1.post('/deleteuser', Admincontrollers.deleteUser);
module.exports = router1;
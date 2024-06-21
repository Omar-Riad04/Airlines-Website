const express = require('express');
const router = express.Router();
const Usercontrollers = require('../Controllers/Usercontrollers');
router.post('/submitsignup', Usercontrollers.submitadduserform);

router.post('/submitsignin', Usercontrollers.signInForm);



module.exports = router;
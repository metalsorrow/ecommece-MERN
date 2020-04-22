const router = require('express').Router();
const registerController = require('../controller/registerController');


router.get('/',registerController.getRegister);

router.post('/login',registerController.postLogin);

router.post('/newRegister',registerController.postNewRegister);


module.exports = router;
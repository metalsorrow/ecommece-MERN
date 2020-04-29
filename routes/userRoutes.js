const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

const {tokenValidator} = require('../middlewares/tokenValidator')


router.get('/',tokenValidator,userController.getUsers)


module.exports = router;
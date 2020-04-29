const router = require('express').Router();
const productController = require('../controller/productController');
const tokenValidator = require('../middlewares/tokenValidator')
const permissionValidator = require('../middlewares/permissionValidator')


router.get('/:page',productController.getProducts)
router.get('/:filter',productController.getFilterProducts)
router.get('/:productId',productController.getProduct)
router.post('/new-product',tokenValidator,permissionValidator,productController.postNewProduct)




module.exports.Router;
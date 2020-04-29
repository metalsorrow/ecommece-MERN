const router = require('express').Router();
const categoryController = require('../controller/categoryController');


router.get('/', categoryController.getCategories);

router.get('/:idCategory', categoryController.getCategory);

router.post('/postNewCategory', categoryController.postNewCategory);

router.update('/:idCategory', categoryController.updateCategory);


module.exports.router;
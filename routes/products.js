const express=require('express');
const router=express.Router();

const controller=require('../controller/products_controller');

//get product
router.get('/',controller.products);

//create product
router.post('/create', controller.create);

//delete product
router.delete('/:productID', controller.delete);

// update product quantity
router.post('/:productID/update_quantity/', controller.updateQunatity);







module.exports=router;
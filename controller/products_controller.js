

const Product=require('../models/product');

//all the product


module.exports.products = (req, res, next) => {
    Product.find()
      .then(products => {
        // Handle the result here
        res.json(products);
      })
      .catch(error => {
        // Handle any errors
        next(error);
      });
  };

// create product
module.exports.create=function(req,res){
    const newProduct=new Product({
        name:req.body.name,
        quantity:req.body.quantity
    });

    
    newProduct.save()
    .then(newProduct => {
      // Handle the result
      res.json(newProduct);
    })
    .catch(err => {
      // Handle the error
      next(error);
    });
}

// delete product
module.exports.delete=function(req,res){
    
    Product.deleteOne({ _id:req.params.productID})
    .then(() => {
      // Handle successful deletion
      console.log(' deleted successfully.');
    })
    .catch((error) => {
      // Handle error
      console.error('Error deleting document:', error);
    });
}
//update quantity

module.exports.updateQunatity=function(req,res){
    const ID=req.params.productID;
    //find product by id
      Product.findById(ID,function(err,found){
          if(err){
              res.send(err);
          }else{
            //increment and decrement 
            const q=parseInt(found.quantity)+parseInt(req.query.number);
            //update  quantity
            Product.findByIdAndUpdate(ID,{quantity:q},function(err,updateProduct){
               if(err){
                   res.send(err);
               }else{
                updateProduct.quantity=q;
                res.send({
                    product:updateProduct,
                    Message:'updated successfully'
                
                });
              }
            });

          }
      });

}
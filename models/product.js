const mongoose=require('mongoose');
//schema
const USchema=new mongoose.Schema(
    {
        name:String,
        quantity:Number
    },
    {
        versionKey:false
    }
);

const Product=mongoose.model('Product',USchema);

module.exports=Product;

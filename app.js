//packages
const express=require('express');
const bodyParser=require('body-parser');
const db=require('./config/mongoose');
const app=express();

app.use(bodyParser.urlencoded({extended:true}));

//routes
app.use('/products',require('./routes/products'));

//server
app.listen(8000,function(){
    console.log('server running ');
})
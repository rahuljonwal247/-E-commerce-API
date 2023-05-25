const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/latestdb"
  
);

const db=mongoose.connection;

db.on('error',console.error.bind(console,"error connect to mongodb"));

db.once('open',function(){
    console.log('connected to database');
});

module.exports=db;
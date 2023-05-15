const mongoose=require('mongoose');
const dotenv=require("dotenv");

dotenv.config({path:'./config.env'})

const uri=process.env.DB;

const connectToMongo=()=>{
  try {
    mongoose.connect(uri);    
    }catch (error) { 
    console.log("could not connect");    
    }

}

module.exports=connectToMongo;
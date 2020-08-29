const dbConfig=require("../config/db.config");
const mongoose=require("mongoose");
db.mongoose=mongoose;
db.url=dbConfig.url;
db.product=require("./Product.model");
module.exports=db;



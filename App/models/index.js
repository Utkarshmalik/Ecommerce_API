const path=require("path");
const dbConfig=require(path.join(__dirname,"../config/db.config"));
const mongoose=require("mongoose");

const db={}

db.mongoose=mongoose;
db.url=dbConfig.url;
db.product=require(path.join(__dirname,"./Product.model"))(mongoose);

module.exports=db;
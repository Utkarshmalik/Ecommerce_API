<<<<<<< HEAD
const path=require("path");
const dbConfig=require(path.join(__dirname,"../config/db.config"));
=======
const path = require('path')

const dbConfig = require(path.join(__dirname,"../config/db.config"));

>>>>>>> 1b69c73a4527dc870ba9f084aed1378c6c61871a
const mongoose=require("mongoose");

const db={}

db.mongoose=mongoose;
db.url=dbConfig.url;
<<<<<<< HEAD
db.product=require(path.join(__dirname,"./Product.model"))(mongoose);
=======

db.product = require(path.join(__dirname,"./Product.model"))(mongoose);
>>>>>>> 1b69c73a4527dc870ba9f084aed1378c6c61871a

module.exports=db;
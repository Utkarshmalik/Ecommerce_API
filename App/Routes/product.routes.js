const path=require('path');

module.exports = app => {
 
  const product = require(path.join(__dirname,"../controllers/product.controller"));
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", product.create);
  
    // Retrieve all Tutorials
    router.get("/", product.findAll);


    app.use('/',router);

}
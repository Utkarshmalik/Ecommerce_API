<<<<<<< HEAD
const path=require("path");
var db=require(path.join(__dirname,"../models/index"));
var Product=db.product;

//handle the requests
// make computations with the DB
//Send back the appropriate response


exports.create=(req,res)=>
{
    const product=new Product({
        id:req.body.id,
        title:req.body.title,
        price:req.body.price,
        description:req.body.description,
        category:req.body.category,
        image:req.body.image
    })

    product.save(product)
    .then(data=>res.send(data))
    .catch(err => {
=======
const path = require('path')

const db = require(path.join(__dirname,"../models"));

const Product = db.product;

exports.create = (req, res) => {
    // Validate request
    // if (!req.body.title) {
    //   res.status(400).send({ message: "Content can not be empty!" });
    //   return;
    // }
  

    // Create a Product
    const product = new Product({
    id:req.body.id,
      title: req.body.title,
      price:req.body.price,
      category:req.body.category,
      description: req.body.description,
      image:req.body.image
    });
    // Save Tutorial in the database
    product
      .save(product)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
>>>>>>> 1b69c73a4527dc870ba9f084aed1378c6c61871a
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
<<<<<<< HEAD
    
};

exports.findAll=(req,res)=>
{


    Product.find({})
    .then(data=>res.send(data))
    .catch(err => {
=======
  
    };
exports.findAll = (req, res) => {

    Product.find({})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
>>>>>>> 1b69c73a4527dc870ba9f084aed1378c6c61871a
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
<<<<<<< HEAD
      });    
};


exports.findOne=(req,res)=>
{

    Product.find({id:req.params.id})
    .then(data=>res.send(data))
    .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });    
};





=======
      });
  };
>>>>>>> 1b69c73a4527dc870ba9f084aed1378c6c61871a

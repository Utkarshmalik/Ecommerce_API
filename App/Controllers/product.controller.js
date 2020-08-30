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
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
  
    };
exports.findAll = (req, res) => {

    Product.find({})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };
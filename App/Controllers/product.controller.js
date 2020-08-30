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
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
    
};

exports.findAll=(req,res)=>
{


    Product.find({})
    .then(data=>res.send(data))
    .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
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






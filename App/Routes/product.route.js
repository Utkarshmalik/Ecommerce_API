const path=require("path");


module.exports= app =>
{
    const ProductControllers=require(path.join(__dirname,"../Controllers/product.controller"));

    const Router=require("express").Router();

    Router.post('/products',ProductControllers.create);
    Router.get("/products/:id",ProductControllers.findOne);
    Router.get('/products',ProductControllers.findAll);

    app.use('/',Router);
}



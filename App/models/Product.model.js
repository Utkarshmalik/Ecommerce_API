module.exports = mongoose=>
{
    var Product=mongoose.model(
        "product",
        mongoose.Schema({
            id:Number,
            title:String,
            price:Number,
            description:String,
            category:String,
            image:String
        })
    )
    return Product;
}


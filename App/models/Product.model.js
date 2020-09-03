<<<<<<< HEAD
module.exports = mongoose=>
{


    
      var prodcutSchema= mongoose.Schema({
            id:{
                type:Number,
                required:true,
                unique:true
            },
            title:String,
            price:Number,
            description:String,
            category:String,
            image:String
        })

    prodcutSchema.pre('save', function(next) {
        console.log(`Pre -> save - begin ...`)
        setTimeout(() => {
           
            console.log(`Pre -> save - end`)
            next()
        }, 3000);
    })

    prodcutSchema.post('save', function (doc,next) {
        console.log(`Post -> save - begin ...`)

        setTimeout(() => {
            console.log(`Post -> save - end`)
            next()
        }, 3000);
    })
    

    const Product=mongoose.model("prdouct",prodcutSchema)

    return Product;
=======
module.exports = (mongoose)=>
{
    const Product=mongoose.model(
        "product",
        mongoose.Schema({
            id:Number,
            title:String,
            price:Number,
            description:String,
            categoty:String,
            image:String
        })
    )
    return Product
>>>>>>> 1b69c73a4527dc870ba9f084aed1378c6c61871a
}


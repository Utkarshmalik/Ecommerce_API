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
}


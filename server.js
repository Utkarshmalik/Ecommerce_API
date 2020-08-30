const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors");
const app=express();
const path=require('path');
const db= require(path.join(__dirname,'./App/models/index'))

const URL="mongodb+srv://utkarsh:qwerty123@cluster0.dfduc.mongodb.net/ecommerce_app?retryWrites=true&w=majority";


db.mongoose.connect(URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true  
}).then(()=>{
    console.log("Connected to DataBase");
})
.catch((err)=>
{
    console.log("cannot connect  to DataBase ",err);
})



  app.use(cors());

  app.use(bodyParser.json());

//   app.get("/",(req,res)=>
// {
//     res.json({message:"Successful"});
// })

const routes=require(path.join(__dirname,'./App/Routes/product.route'));
routes(app);

const port=process.env.PORT || 8080;


app.listen(port,()=>
{
    console.log(`Server is running on port ${port}`);
})
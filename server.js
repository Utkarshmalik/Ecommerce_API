const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors");
const app=express();
const path=require('path');
<<<<<<< HEAD
const db= require(path.join(__dirname,'./App/models/index'))

//const URL="mongodb+srv://utkarsh:qwerty123@cluster0.dfduc.mongodb.net/ecommerce_app?retryWrites=true&w=majority";


db.mongoose.connect(db.url,{
    useNewUrlParser: true,
    useUnifiedTopology: true  
=======

const db=require(path.join(__dirname,"./App/models/index"));


const dbURL = "mongodb+srv://utkarsh:Ragman*16@cluster0.kedzq.mongodb.net/temp_1?retryWrites=true&w=majority";

db.mongoose.connect(dbURL,{
    userNewUrlParser:true,
    useUnifiedTopology: true
  
>>>>>>> 1b69c73a4527dc870ba9f084aed1378c6c61871a
}).then(()=>{
    console.log("Connected to DataBase");
})
.catch((err)=>
{
    console.log("cannot connect  to DataBase ",err);
    process.exit();

})



<<<<<<< HEAD
  app.use(cors());

=======
  

//all all sites as per now 
app.use(cors());
>>>>>>> 1b69c73a4527dc870ba9f084aed1378c6c61871a
  app.use(bodyParser.json());

//   app.get("/",(req,res)=>
// {
//     res.json({message:"Successful"});
// })
<<<<<<< HEAD

const routes=require(path.join(__dirname,'./App/Routes/product.route'));
routes(app);
=======
>>>>>>> 1b69c73a4527dc870ba9f084aed1378c6c61871a

const port=process.env.PORT || 8080;

require(path.join(__dirname,"./App/Routes/product.routes"))(app);


app.listen(port,()=>
{
    console.log(`Server is running on port ${port}`);
})
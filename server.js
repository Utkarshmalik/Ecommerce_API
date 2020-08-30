const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors");
const app=express();
const path=require('path');

const db=require(path.join(__dirname,"./App/models/index"));


const dbURL = "mongodb+srv://utkarsh:Ragman*16@cluster0.kedzq.mongodb.net/temp_1?retryWrites=true&w=majority";

db.mongoose.connect(dbURL,{
    userNewUrlParser:true,
    useUnifiedTopology: true
  
}).then(()=>{
    console.log("Connected to DataBase");
})
.catch((err)=>
{
    console.log("cannot connect  to DataBase ",err);
    process.exit();

})



  

//all all sites as per now 
app.use(cors());
  app.use(bodyParser.json());

//   app.get("/",(req,res)=>
// {
//     res.json({message:"Successful"});
// })

const port=process.env.PORT || 8080;

require(path.join(__dirname,"./App/Routes/product.routes"))(app);


app.listen(port,()=>
{
    console.log(`Server is running on port ${port}`);
})
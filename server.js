const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors");
const app=express();

const db=require("./App/models/index");

db.mongoose.connect(db.url,{
    userNewUrlParser:true    
}).then(()=>{
    console.log("Connected to DataBase");
})
.catch((err)=>
{
    console.log("cannot connect  to DataBase ",err);
})

var corsOptions = {
    origin:'http://localhost:8080'
  }

  app.use(cors(corsOptions));
  app.use(bodyParser.json());

  app.get("/",(req,res)=>
{
    res.json({message:"Successful"});
})

const port=process.env.PORT || 8080;


app.listen(port,()=>
{
    console.log(`Server is running on port ${port}`);
})
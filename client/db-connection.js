const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/client-ms").then(()=>{
    console.log("Database Connected Successfully");
}).catch((err)=>{
    console.log("No Connection to Database");
})

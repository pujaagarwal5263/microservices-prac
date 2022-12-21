const express=require("express");
require("./db-connection")
const router = require("./router/routes");
const app=express();

app.use(express.json());
app.use(router)

app.listen(8001,()=>{
    console.log("Client service is running at 8001");
})
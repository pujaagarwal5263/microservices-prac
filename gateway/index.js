const express=require("express");
const cors=require("cors");
const proxy=require("express-http-proxy");

const app=express();

app.use(cors());
app.use(express.json());

app.use("/client",proxy('http://localhost:8001'))
app.use("/admin",proxy('http://localhost:8002')) //admin

app.listen(8000,()=>{
    console.log("Gateway service is running at 8000");
})

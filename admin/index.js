const express=require("express");
require("./db-connection")
const router = require("./admin-router/admin-routes");
const app=express();

app.use(express.json());
app.use(router)

app.listen(8002,()=>{
    console.log("Admin service is running at 8002");
})
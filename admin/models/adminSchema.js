const mongoose=require("mongoose");

const adminSchema=new mongoose.Schema({
    name:String,
    aID:Number,
    active:Boolean
})

const Admin=mongoose.model("Admin",adminSchema);
module.exports=Admin;
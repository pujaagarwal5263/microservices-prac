const axios=require("axios")
const Admin=require("../models/adminSchema")

const userList=async(req,res)=>{
    try{
        const data=await axios.get("http://localhost:8000/client/allusers")
        return res.status(200).send(data.data)   
    }catch(err){
        if(err.response.status==500){
            return res.status(400).send("Client service is down")
        }
        else{
            console.log(err);
        }
    }
}

const addAdmin=async(req,res)=>{
    try{
      const data=req.body;
      const admin= await Admin.create(data);
      return res.status(200).send(admin)
    }catch(err){
        console.log(err);
    }
}

module.exports={userList, addAdmin}
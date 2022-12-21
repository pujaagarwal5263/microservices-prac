const User = require("../models/userSchema");

const getUsers=async(req,res)=>{
  try{
    const users=await User.find();
    return res.status(200).send(users);
  }catch(err){
    console.log(err);
  }
}

const postUser=async(req,res)=>{
    try{
     const {name,email,city,cID, active}=req.body;
     const data=req.body;
     const userExist = await User.findOne({email});
   
    if(userExist){
        return res.status(400).json({error: "Credentials already exist"});
     }
    else{ 
      const userRegister=await User.create(data);
      if(userRegister){
        res.status(200).json({message:"Registration Successful"})
      }else{
        return res.status(500).json({error: "Failed to register"})
      }
    }
    }catch(err){
        console.log(err);
    }
}

module.exports={getUsers, postUser}
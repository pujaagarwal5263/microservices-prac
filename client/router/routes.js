const express=require("express");
const { getUsers, postUser } = require("../dataControllers/controllers");
const router=express.Router()

router.get("/allusers",getUsers)
router.post("/adduser", postUser)

module.exports=router;
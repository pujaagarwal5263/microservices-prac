const express=require("express");
const {  userList, addAdmin } = require("../adminControllers/admin-controllers");
const router=express.Router()

router.get("/userlist",userList)
router.post("/addadmin",addAdmin)

module.exports=router;
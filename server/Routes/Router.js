const express = require("express");
const usercontroler = require("./../controler/Usercontroler");
//const Checklogin = require("./../middleware/Checklogin");
//const isChecked = require("./../middleware/Checklogin");

const router = express.Router();

//userroutes
router.post("/api/register", usercontroler.Register);
router.post("/api/login", usercontroler.Login);
router.delete("/api/logout", usercontroler.Logout);

module.exports = router;

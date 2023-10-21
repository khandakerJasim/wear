const express = require("express");
const ContactControler = require("./../controler/ContactControler");

const router = express.Router();

router.post("/api/contact", ContactControler.Contact);

module.exports = router;

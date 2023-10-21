const express = require("express");
const dotenv = require("dotenv");
const userouter = require("./Routes/Router");
const contactrouter = require("./Routes/Contactrouter");

const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

const products = require("./data/Products.json");
const app = express();

//mongoose connect

mongoose
  .connect("mongodb://127.0.0.1:27017/Wear")
  .then(() => console.log("mongoose connect successfully"))
  .catch((err) => console.log(err));

//cors setup
app.use(cors());
//bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//cookie use

app.use(cookieParser(process.env.COOKIESECRET));

//dotenv config
dotenv.config();

//routeruse
app.use(userouter);

//contact router
app.use(contactrouter);

app.get("/api/products", (req, res) => {
  res.send(products);
});

app.get("/api/products/:id", (req, res) => {
  const id = req.params.id;
  const result = products.find((p) => p.id === id);
  res.send(result);
});

app.get("api/products/:type", (req, res) => {
  const type = req.params.type;
  const filterdataproducts = products
    .filter((t) => t.type === type)
    .slice(0, 9);

  res.send(filterdataproducts);
});

module.exports = app;

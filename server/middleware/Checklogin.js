const jwt = require("jsonwebtoken");
const { check } = require("express-validator");

const isChecked = [
  check("username")
    .isLength({ min: 1 })
    .withMessage("email or phone is required"),
  check("password").isLength({ min: 1 }).withMessage("password is required"),
];

const Checklogin = async (req, res, next) => {
  const { authorization } = req.headers;
  try {
    const token = await authorization.split(" ")[1];
    const decoded = jwt.verify(process.env.SECRET, token);
    const { name, gender, phone, email } = decoded;
    req.name = name;
    req.email = email;
    req.phone = phone;
    req.gender = gender;
    next();
  } catch {
    next("login failur");
  }
};

module.exports = { Checklogin, isChecked };

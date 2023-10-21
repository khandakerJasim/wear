const mongoose = require("mongoose");
const validator = require("email-validator");

//create schema

const userschema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: function () {
        return validator.validate(this.email);
      },
    },
    gender: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },
    cpassword: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//create model

const Users = new mongoose.model("User", userschema);

module.exports = Users;

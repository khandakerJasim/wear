const mongoose = require("mongoose");
const validator = require("email-validator");

const Contactschema = new mongoose.Schema(
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
    phone: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
      minLength: 20,
      maxLength: 200,
    },
  },
  { timestamps: true }
);

//mongosse model
const Contact = new mongoose.model("Contact", Contactschema);

module.exports = Contact;

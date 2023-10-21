const Contact = require("./../model/ContactSchema");

exports.Contact = async (req, res) => {
  const { name, email, phone, message } = req.body;
  try {
    const preuser = await Contact.findOne({ email: email });

    if (preuser) {
      res.status(400).json("the user is already exits");
    } else {
      const newuser = await Contact({
        name: name,
        email: email,
        phone: phone,
        message: message,
      });

      const saveuser = await newuser.save();
      res.status(200).json({ status: 200, saveuser });
    }
  } catch (err) {
    res.status(500).json({ mess: "this is server error" });
    console.log(err);
  }
};

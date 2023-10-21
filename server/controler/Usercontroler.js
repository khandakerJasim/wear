const Users = require("./../model/Useschema");
const bcryt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.Register = async (req, res) => {
  const { name, email, gender, phone, password, cpassword } = req.body;
  const hpassword = await bcryt.hash(password, 10);
  const chaspassword = await bcryt.hash(cpassword, 10);

  try {
    const preuser = await Users.findOne({ email: email });
    if (preuser) {
      res.status(400).json("the user is already exits");
    } else {
      const newuser = await Users({
        name: name,
        email: email,
        gender: gender,
        phone: phone,
        password: hpassword,
        cpassword: chaspassword,
      });

      const saveuser = await newuser.save();
      res.status(200).json({ status: 200, saveuser });
    }
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
};

//login data

exports.Login = async (req, res) => {
  try {
    const user = await Users.findOne({
      $or: [{ email: req.body.username }, { phone: req.body.username }],
    });

    if (user && user._id) {
      const isvalidpassword = await bcryt.compare(
        req.body.password,
        user.password
      );
      if (isvalidpassword) {
        const userobject = {
          name: user.name,
          email: user.email,
          phone: user.phone,
          gender: user.gender,
        };

        const token = jwt.sign(
          userobject,

          process.env.SECRET,
          {
            expiresIn: "24h",
          }
        );

        //cookie set
        res.cookie(process.env.COOKIENAME, token, {
          maxAge: process.env.EXPIRE,
          httpOnly: true,
        });

        //set locals

        res.locals.loggedInuser = userobject;
        const result = {
          status: 200,
          user,
          token,
        };
        res.status(200).json(result);
      } else {
        res.status(400).json("authentical error");
      }
    } else {
      res.status(400).json("authenticals error");
    }
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
};

exports.Logout = async (req, res) => {
  res.clearCookie(process.env.COOKIENAME);
  res.status(200).json("logout");
};

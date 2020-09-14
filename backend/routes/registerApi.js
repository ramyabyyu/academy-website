const User = require("../models/userModel");
const config = require("config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const route = require("express").Router();

/* 
    @route      POST /api/user/register
    @desc       Register new User
    @access     Private
*/
route.post("/register", (req, res) => {
  const { name, email, password, major } = req.body;

  // validation field
  if (!name || !email || !password || !major) {
    return res.status(400).json({
      message: "Semua kolom harus diisi",
    });
  }

  // validation major
  if (major != "multimedia" && major != "rekayasa perangkat lunak") {
    return res.status(400).json({
      message: "Jurusan tidak tersedia",
    });
  }

  // Check for the existing user
  User.findOne({ email }).then((user) => {
    if (user) {
      return res.status(400).json({
        message: "Email ini sudah diregisterasi, silahkan coba email yang lain",
      });
    }

    const newUser = new User({
      name,
      email,
      password,
      major,
    });

    // Create salt & hash password
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then((user) => {
          // Verify with jwt
          jwt.sign(
            { id: user.id },
            config.get("jwtSecret"),
            { expiresIn: "1h" },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user: {
                  id: user.id,
                  name: user.name,
                  email: user.email,
                  major: user.major,
                },
              });
            }
          );
        });
      });
    });
  });
});

module.exports = route;

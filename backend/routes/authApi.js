const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const router = require("express").Router();

/* 
    @route      POST /api/user/auth
    @desc       Sign in
    @access     Private
*/
router.post("/auth", (req, res) => {
  const { email, password } = req.body;

  // Validation
  if (!email || !password) {
    return res.status(400).json({
      message: "Semua kolom haarus diisi",
    });
  }

  // check if user is exist or not
  User.findOne({ email }).then((user) => {
    if (!user) return res.status(400).json({ message: "Email tidak sesuai" });

    // Validate Password
    bcrypt.compare(password, user.password).then((correct) => {
      if (!correct) return res.status(400).json({ message: "Password Salah" });
    });

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

module.exports = router;

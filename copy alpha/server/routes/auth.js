// Require router from express
import express from "express";
const router = express.Router();

// Require bcrypt
import bcrypt from "bcrypt";

// Require the json web token
import jwt from "jsonwebtoken";

// Require the User Schema
import User from "../models/User.js";

import isAuth from "../middlewares/isAuth.js";

import {
  validator,
  registerRules,
  loginRules,
} from "../middlewares/validator.js";

//@route POST api/auth/register
//@desc Register new user
//@access Public
router.post("/register", registerRules(), validator, async (req, res) => {
  const { name, lastName, email, password } = req.body;
  try {
    // Simple Validation
    /*  if (!name || !lastName || !email || !password) {
      return res.status(400).json({ msg: 'Please enter all fields!' });
    } */
    // Check for existing user
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }
    // Create new User
    user = new User({ name, lastName, email, password });

    // Create Salt & hash
    const salt = 10;
    const hashedPassword = await bcrypt.hash(password, salt);

    user.password = hashedPassword;

    // Save the user
    await user.save();

    // sing user
    const payload = {
      id: user._id,
    };

    const token = await jwt.sign(payload, "test", {
      expiresIn: "7 days",
    });

    res.status(200).send({ msg: "User registred with success", user, token });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Server Error" });
  }
});

//@route POST api/auth/login
//@desc Login User
//@access Public
router.post("/login", loginRules(), validator, async (req, res) => {
  const { email, password } = req.body;
  try {
    //simple Validation
    /* if (!email || !password) {
      return res.status(400).send({ msg: 'Please enter all fields' });
    } */
    // Check for existing user
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({ msg: "Bad Credentials! email" });
    }
    //Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send({ msg: "Bad Credentials! password" });
    }

    // sing user
    const payload = {
      id: user._id,
    };

    const token = await jwt.sign(payload, "test", {
      expiresIn: "7 days",
    });

    res.send({ msg: "Logged in with success", user, token });
  } catch (error) {
    res.status(500).send({ msg: "Server Error" });
  }
});

//@route GET api/auth/user
//@desc Get authentified user
//@access Private
router.get("/user", isAuth, (req, res) => {
  res.status(200).send({ user: req.user });
});

export default router;

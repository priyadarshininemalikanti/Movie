
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");
const router = express.Router();

router.post("/", async (req, res) => {
    console.log(req);
    try {
      const exists = await User.findOne({ username: req.body.username });
      if (exists) {
        return res.status(401).json("Username already exists");
      }
      const user = req.body;
      console.log(user);
      const newUser = new User(user);
      await newUser.save();
      res.status(200).json("user is successfully registered");
    } catch (error) {
      console.log("Error", error.message);
      return res.status(400).json(error.message);
    }
  });
  
  router.get("/login", async (req, res) => {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      res.json(400).json("Username is incorrect");
    } else {
      let username = user.username;
      let password = user.password;
      if (username == req.body.username && password == req.body.password) {
        let token = jwt.sign(
          {
            username: req.body.username,
            password: req.body.password,
          },
          "secret"
        );
        res.json(token);
      } else {
        res.status(400).json("Password is incorrect");
      }
    }
  });

  module.exports=router;
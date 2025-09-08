const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../model/User");

exports.signup = async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;

        const exist = await User.findOne({ username });
        if (exist) {
            return res.status(400).json({
                message: "User already exist"
            })
        }

        const hashedpassword = await bcrypt.hash(password, 10);

        const user = await User.create({ username, password: hashedpassword });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.status(201).json({
            message: "User successfully created",
            token,
            user: { id: user._id, username: username }
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: " Server Error"
        })
    }

};


exports.signin = async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({
                message: "Invalid credentials"
            })
        };

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(400).json({
                message: "Invalid credentials"
            })
        };

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.json({
            message: "Login successful",
            token,
            user: { id: user._id, username: user.username },
        });
    }catch(err){
        console.log(err);
        res.status(500).json({
            message :  "Server Error"
        })
    }
}


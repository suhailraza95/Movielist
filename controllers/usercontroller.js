const bcrypt = require("bcryptjs");
const User = require('../models/userModel');
const asynchandler = require('express-async-handler');
const validator = require('validator');
const ResponseHandler = require("../resources/response-handler");
const generateToken = require('../resources/generateToken');

const registerUser = asynchandler (async(req, res) =>{
      
    const{username,email,password}= req.body

    if (!username || username.trim().length < 3) {
        res.status(400);
        throw new Error("Please provide a valid username");
    }

        const isValidEmail = validator.isEmail(email); 
   
    if (!isValidEmail) {
       res.status(400);
        throw new Error("Please provide a valid email");
    } 
        const isStrongPassword = validator.isStrongPassword(password); 
    if (!isStrongPassword) {
       res.status(400);
        throw new Error("Please provide a strong password");
    } 

    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error("User already exists");
    }

  const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({username: username,email: email, password: hashedPassword});
     if (user) {
        res.status(201).json({
            _id: user.id,
            username: user.username,
            email: user.email
        });
    } else {
        res.status(400);
        throw new Error("User creation failed");
    }
    });

    const loginUser = asynchandler(async (req, res) => {

    const { email, password } = req.body;

    // Validate email
    if (!validator.isEmail(email)) {
        res.status(400);
        throw new Error("Please provide a valid email");
    }

    // Validate password
    if (!password) {
        res.status(400);
        throw new Error("Password is required");
    }

    // Find user
    const user = await User.findOne({ email });

    // Check user exists
    if (!user) {
        res.status(401);
        throw new Error("Invalid email or password");
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    // Check password match
    if (!isMatch) {
        res.status(401);
        throw new Error("Invalid email or password");
    }

    // Success response
    res.status(200).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        token: generateToken(user._id)
    });

});

    const currentUser = asynchandler(async (req, res) => {
    const user = await User.find(req.body);

    res.json(user);
});

module.exports = {
    registerUser,
    loginUser,
    currentUser
};
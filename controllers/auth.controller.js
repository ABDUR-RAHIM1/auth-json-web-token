const User = require("../model/authModel")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv") 



const getUser = async (req, res) => {
    const user = await User.find()
    res.json(user)
}

// create user 
const registerUser = async (req, res) => {
    try {
        const newUser = await User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
        const user = await newUser.save()
        res.status(200).json({ message: "User Register SuccessFull", user })
    } catch (error) {
        res.status(500).json({ message: "Something went wrong on the server" });
    }
}

// login user 
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        if (user && user.password === password) {
            const token = jwt.sign({
                username: user.username,
                userId: user._id
            }, process.env.JWT_SECRET)

            res.status(200).json({
                "message": "Logged in successfully",
                "token": token,
            });
        } else {
            res.status(401).send({ message: "Please provide a valid email and password" });
        }
    } catch (error) {
        res.status(500).json({ message: "Something went wrong on the server" });
    }
}

// delete User  
const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findByIdAndDelete({ _id: userId })
        res.send(user)
    } catch (error) {
        res.status(500).json({ massege: 'showthinf went wrong on Server' })
    }
}




module.exports = { getUser, registerUser, loginUser, deleteUser }
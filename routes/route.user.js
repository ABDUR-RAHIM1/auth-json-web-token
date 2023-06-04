const { getUser, registerUser, loginUser } = require("../controllers/auth.controller");
const checkLogin = require("../middleweres/checkLogin");

const router = require("express").Router() 
// get user 
router.get("/", checkLogin , getUser)

// create user
router.post('/register', registerUser)

// login 
router.post("/login", loginUser)

module.exports = router;
const jwt = require("jsonwebtoken")

const checkLogin = (req, res, next) =>{
     
    const {auhtorize} = req.headers;
    try {
         const token = auhtorize.split(" ")[1]
         const decoded = jwt.verify(token , process.env.JWT_SECRET)
         const { username , userId} = decoded
         req.username = username
         req.userId = userId
         next()
    } catch (error) {
        console.log(error)
         next("Authentication failure")
    }
}

module.exports =  checkLogin
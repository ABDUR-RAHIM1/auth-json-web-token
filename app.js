const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
// routes middlewere 
app.use('/auth', require("./routes/route.user"))

// home route 
app.get("/", (req, res) => {
      res.sendFile(__dirname + '/view/index.html')
})

// error handler
app.use((req, res, next) => {
     res.send("page not found")
})
module.exports = app;
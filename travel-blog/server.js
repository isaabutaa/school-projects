const express = require("express")
const app = express()
require("dotenv").config()
const mongoose = require("mongoose")
const morgan = require("morgan")
const expressJWT = require("express-jwt")
const PORT = 8999

// middleware
app.use(express.json())
app.use(morgan("dev"))

// connect to DB
mongoose.connect("mongodb://localhost:27017/blogDB",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log("Connected to DB")
)

// routes
app.use("/auth", require("./routes/authRouter.js"))
app.use("/api", expressJWT({ secret: process.env.SECRET }))
app.use('/api/blogposts', require('./routes/blogRouter.js'))

// error handling
app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError") {
      res.status(err.status)
    }
    return res.send({errMsg: err.message})
  })

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))
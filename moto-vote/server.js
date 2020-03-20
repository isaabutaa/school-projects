const express = require("express")
const app = express()
require("dotenv").config()
const morgan = require("morgan")
const mongoose = require("mongoose")
const expressJwt = require("express-jwt")
const PORT = 8000

// middleware
app.use(express.json())
app.use(morgan("dev"))

// connect to DB
mongoose.connect("mongodb://localhost:27017/moto-vote",
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
app.use("api", expressJwt({ secret: process.env.SECRET }))
app.use("/api/motos", require("./routes/motoRouter.js"))

// error handling
app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError") {
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
const express = require("express")
const morgan = require("morgan")
const mongoose = require("mongoose")
const app = express()

// middleware
app.use(express.json())
app.use(morgan("dev"))

// connect to DB
mongoose.connect("mongodb://localhost:27017/bucketListDB", 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log("Connected to bucketListDB")
)

// routes  
app.use("/bucket-list", require("./routes/bucketListRouter"))

// console error message
app.use((err, req, res, next) => {
    console.log(err)
    res.send({errorMsg: err})
})


app.listen(8000, () => console.log("Server is running on port 8000"))
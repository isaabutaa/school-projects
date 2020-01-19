const express = require("express")
const app = express()
const morgan = require("morgan")

//middleware
app.use(express.json())
app.use(morgan("dev"))

// routes
app.use("/bounties", require("./routes/bountyRouter"))

app.listen(8099, () => console.log("Server is running on port 8099"))
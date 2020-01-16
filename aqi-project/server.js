const express = require("express")
const app = express()
const getCountries = require("./routes/countryRouter")

app.use(express.json())
// getCountries(req, res)

//routes
app.use("/", function(req, res) {
    getCountries(req, res)
})

app.listen(4000, () => console.log("server is running on port 4000"))
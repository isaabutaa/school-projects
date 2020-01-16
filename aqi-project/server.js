const express = require("express")
const app = express()
// require("dotenv").config()
// const getCountries = require("./routes/countryRouter")
// const axios = require('axios')

// const apiKey = process.env.API_KEY
app.use(express.json())
// getCountries(req, res)

//routes
// app.get("/countries", function(req, res) {
//     axios.get(`http://api.airvisual.com/v2/countries?&key=${apiKey}`)
//         .then(response => {
//             console.log(response.data)
//             return res.send(JSON.stringify(response.data))
//         })
//         .catch(err => console.log(err))
// })


app.use("/countries", require("./routes/countryRouter.js"))
// app.use("/countries", require("./routes/stateRouter"))
app.use("/cities", require("./routes/cityRouter"))



app.listen(4000, () => console.log("server is running on port 4000"))
const express = require("express")
const stateRouter = express.Router()
const axios = require("axios")
const countries = require("./countries")

require("dotenv").config()
const apiKey = process.env.API_KEY

// Route
stateRouter.get("/:country", (req, res) => {
    const country = req.params.country
    const selectedCountry = countries.find(country => {
        country.country === country
    })
    res.send(selectedCountry)
})

// stateRouter.get("/:country", (req, res) => {
//     console.log("req params", req.params.country)
//     axios.get(`http://api.airvisual.com/v2/states?country=${req.params.country}&key=${apiKey}`)
//         .then(response => {
//             console.log("response",response.data)
//             res.send(response.data)
//         })
//         .catch(err => console.log(err, "error"))    
// })

module.exports = stateRouter
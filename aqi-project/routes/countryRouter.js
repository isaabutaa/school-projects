const express = require("express")
const countryRouter = express.Router()
const axios = require("axios")
const countries = require("./countries")

require("dotenv").config()

const apiKey = process.env.API_KEY

// Route
// countryRouter.get("/", (req, res) => {
//     console.log(req.params.country)
//     axios.get(`http://api.airvisual.com/v2/countries?&key=${apiKey}`)
//         .then(response => {
//             console.log("lkasjdflaksdjf", response.data)
//             res.send(response.data)
//         })
//         .catch(err => console.log(err))
// })

countryRouter.get("/", (req, res) => {
    res.send(countries)
})

countryRouter.get("/:country", (req, res) => {
    const country = req.params.country
    const selectedCountry = countries.find(place => {
        return place.country === country
    })
    res.send(selectedCountry)
})

countryRouter.get("/:state", (req, res) => {
    console.log(req.params)
    const {state} = req.params
    // const selectedCountry = countries.find(place => place.country === country)
    const selectedState = countries.find(place => place.country.state === state)
    res.send(selectedState)
})


module.exports = countryRouter
const express = require("express")
const countryRouter = express.Router()
const axios = require("axios")

require("dotenv").config()

const apiKey = process.env.API_KEY

function getCountries(req, res) {
    axios.get(`http://api.airvisual.com/v2/countries?&key=${apiKey}`)
        .then(response => {
            console.log(response.data)
            res.send(response.data)
        })
        .catch(err => console.log(err))
}


module.exports = getCountries
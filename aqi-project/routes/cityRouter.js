const express = require("express")
const cityRouter = express.Router()
const axios = require("axios")

require("dotenv").config()

const apiKey = process.env.API_KEY

// Route
cityRouter.get("/", (req, res) => {
    axios.get(`http://api.airvisual.com/v2/cities?country=usa&key=${apiKey}`)
        .then(response => {
            console.log(response.data)
            res.send(response.data)
        })
        .catch(err => console.log(err, "error!!!!"))
})

module.exports = cityRouter
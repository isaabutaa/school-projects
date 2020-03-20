const mongoose = require("mongoose")
const Schema = mongoose.Schema

const motoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Moto", motoSchema)
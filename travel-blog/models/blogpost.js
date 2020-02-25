const mongoose = require("mongoose")
const Schema = mongoose.Schema

const blogpostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("BlogPost", blogpostSchema)
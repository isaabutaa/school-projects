const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Bucket List Item blueprint
const bucketListSchema = new Schema (
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        completeByYear: {
            type: String,
            required: true
        }
    }
)

module.exports = mongoose.model("BucketList", bucketListSchema)
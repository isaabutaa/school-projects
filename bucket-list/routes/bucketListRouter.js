const express = require("express")
const bucketListRouter = express.Router()
const BucketList = require("../models/bucketList.js")

// fake data for testing
// const bucketListData = [
//     {
//         title: "Motorcycle road trip across Australia",
//         description: "I want to visit Australia, and I want to do a motorcycle road trip. Why not do both at the same time?",
//         completeByYear: "2023"
//     },
//     {
//         title: "Compete in an amateur boxing match",
//         description: "Boxing is a cool sport. I want to prove myself in the ring! And I want to get in better shape and have stronger presence.",
//         completeByYear: "2022"
//     },
//     {
//         title: "Visit Sweden, see the countryside, see the Northern Lights",
//         description: "I've been wanting to visit Sweden for a long time. It's a beautiful country. I'd love to experience the culture and see the countryside.",
//         completeByYear: "2027"
//     },
//     {
//         title: "Perform live with guitar for family & friends, or at a bar",
//         description: "I'm learning the guitar. It's a sweet instrument. I'd love to get better so I can perform for some people.",
//         completeByYear: "2027"
//     },
//     {
//         title: "Take an ice bath",
//         description: "Swedish ice bath! I'll do this when I travel to Sweden.",
//         completeByYear: "2027"
//     }
// ]

// routes

// POST
bucketListRouter.post("/", (req, res, next) => {
    const newItem = new BucketList(req.body)
    newItem.save((err, savedItem) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedItem)
    })
})

// GET all
bucketListRouter.get("/", (req, res, next) => {
    BucketList.find((err, bucketList) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bucketList)
    })
})

// DELETE
bucketListRouter.delete("/:itemId", (req, res, next) => {
    BucketList.findOneAndDelete({_id: req.params.itemId}, (err, deletedItem) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully removed ${deletedItem.title} from bucket list`)
    })
})

//PUT
bucketListRouter.put("/:itemId", (req, res, next) => {
    BucketList.findOneAndUpdate(
        {_id: req.params.itemId},
        req.body,
        { new: true },
        (err, updatedItem) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(202).send(updatedItem)
        })
})

module.exports = bucketListRouter
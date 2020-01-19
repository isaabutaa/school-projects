const express = require("express")
const bountyRouter = express.Router()
const uuid = require("uuid/v4")

// fake data //
const bounties = [
    {
        firstName: "sith",
        lastName: "bamboozle",
        isLiving: true,
        bounty: 5000,
        type: "sith",
        _id: uuid()
    },

    {
        firstName: "baby",
        lastName: "yoda",
        isLiving: true,
        bounty: 50000000,
        type: "jedi",
        _id: uuid()
    }
]

// routes //

//GET All
bountyRouter.get("/", (req, res) => {
    res.send(bounties)
})

// POST One
bountyRouter.post("/", (req, res) => {
    const newBounty = req.body
    newBounty.isLiving = true
    newBounty._id = uuid()
    bounties.push(newBounty)
    res.send(newBounty)
})

// DELETE One
bountyRouter.delete("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send(bounties)
})

// PUT/Update One
bountyRouter.put("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
    res.send(updatedBounty)
})

// bountyRouter.route("/")
//     .get((req, res) => {
//         res.send(bounties)
//     })
//     .post((req, res) => {
//         const newBounty = req.body
//         newBounty._id = uuid()
//         bounties.push(newBounty)
//         res.send(`Successfully added '${newBounty.firstName} ${newBounty.lastName}' to the bounties list`)
//     })
//     .delete("/:bountyId", (req, res) => {
//         const bountyId = req.params.bountyId
//         const foundBounty = bounties.find(bounty => bounty._id === bountyId)
//         res.send(foundBounty)
//     })

module.exports = bountyRouter
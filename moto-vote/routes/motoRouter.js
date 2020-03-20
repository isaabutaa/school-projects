const express = require("express")
const motoRouter = express.Router()
const Moto = require("../models/moto.js")

// Routes

// Get
motoRouter.get("/", (req, res, next) => {
    Moto.find((err, motos) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(motos)
    })
})

// Post
motoRouter.post("/", (req, res, next) => {
    const newMoto = new Moto(req.body)
    newMoto.save((err, savedMoto) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(savedMoto)
    })
})

// Put
motoRouter.put("/:motoId", (req, res, next) => {
    Moto.findOneAndUpdate(
        { _id: req.params.motoId },
        req.body,
        { new: true },
        (err, updatedMoto) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedMoto)
        }
    )
})

// Delete
motoRouter.delete("/:motoId", (req, res, next) => {
    Moto.findOneAndDelete(
        { _id: req.params.motoId },
        (err, deletedMoto) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted ${deletedMoto.name}`)
        }
    )
})

module.exports = motoRouter
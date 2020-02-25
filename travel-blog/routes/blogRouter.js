const express = require('express')
const blogRouter = express.Router()
const BlogPost = require("../models/blogpost.js")

// ************ Routes  *********** //

// GET
blogRouter.get("/", (req, res, next) => {
    BlogPost.find((err, posts) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(posts)
    })
})

// GET by user Id
blogRouter.get("/user", (req, res, next) => {
    BlogPost.find(
        { user: req.user._id }, 
        (err, posts) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(posts)
        }
    )
}) 

// POST
blogRouter.post("/", (req, res, next) => {
    req.body.user = req.user._id
    const newBlogPost = new BlogPost(req.body)
    newBlogPost.save((err, savedPost) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedPost)
    })
})

// PUT
blogRouter.put("/:postId", (req, res, next) => {
    BlogPost.findOneAndUpdate(
        { _id: req.params.postId, user: req.user._id },
        req.body,
        { new: true },
        (err, updatedPost) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedPost)
        }
    )
})

// DELETE
blogRouter.delete("/:postId", (req, res, next) => {
    BlogPost.findOneAndDelete(
        { _id: req.params.postId, user: req.user._id },
        (err, deletedPost) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted ${deletedPost.title}`)
        }
    )
})

module.exports = blogRouter
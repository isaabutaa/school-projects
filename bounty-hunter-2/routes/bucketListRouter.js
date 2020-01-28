const express = require("express")
const bucketListRouter = express.Router()

// fake data for testing
const bucketListData = [
    {
        title: "Motorcycle road trip across Australia",
        description: "I want to visit Australia, and I want to do a motorcycle road trip. Why not do both at the same time?",
        completeByYear: "2023"
    },
    {
        title: "Compete in an amateur boxing match",
        description: "Boxing is a cool sport. I want to prove myself in the ring! And I want to get in better shape and have stronger presence.",
        completeByYear: "2022"
    },
    {
        title: "Visit Sweden, see the countryside, see the Northern Lights",
        description: "I've been wanting to visit Sweden for a long time. It's a beautiful country. I'd love to experience the culture and see the countryside.",
        completeByYear: "2027"
    },
    {
        title: "Perform live with guitar for family & friends, or at a bar",
        description: "I'm learning the guitar. It's a sweet instrument. I'd love to get better so I can perform for some people.",
        completeByYear: "2027"
    },
    {
        title: "Take an ice bath",
        description: "Swedish ice bath! I'll do this when I travel to Sweden.",
        completeByYear: "2027"
    }
]

// routes

module.exports = bucketListRouter
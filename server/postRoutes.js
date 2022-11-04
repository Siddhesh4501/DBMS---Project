const express = require("express")
const postControllers = require("./postControllers")
const router = express.Router()

router.route("/").get(postControllers.getAllPosts).post(postControllers.createNewPost)
module.exports = router

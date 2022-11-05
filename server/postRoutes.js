const express = require("express")
const postControllers = require("./postControllers")
const router = express.Router()

router.route("/student").get(postControllers.getAllPostsStudent).post(postControllers.createNewPostStudent)
router.route("/company").get(postControllers.getAllPostsCompany).post(postControllers.createNewPostCompany)
router.route("/interview-experience").get(postControllers.getAllPostsInterviewExperience).post(postControllers.createNewPostInterviewExperience)
router.route("/questions").get(postControllers.getAllPostsQuestions).post(postControllers.createNewPostQuestions)
module.exports = router

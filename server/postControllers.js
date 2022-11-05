const { PostStudent, PostCompany, PostInterviewExperience } = require("./Post")

// for adding student records
exports.getAllPostsStudent = async (req, res, next) => {
    res.send("Get all the posts")
}

exports.createNewPostStudent = async (req, res, next) => {
    let { mis, first_name, last_name, email_id } = req.body
    let post = new PostStudent(mis, first_name, last_name, email_id)
    post = await post.save()
    console.log(post)
    res.send("Create New Post Route")
}

exports.getPostByIdStudent = async (req, res, next) => {
    res.send("Get post by id")
}

// for adding company records
exports.getAllPostsCompany = async (req, res, next) => {
    res.send("Get all the posts")
}

exports.createNewPostCompany = async (req, res, next) => {
    let { company_id, company_name, role, location, stipend, no_of_rounds, no_of_people_selected, duration_of_aptitude } = req.body
    let post = new PostCompany(company_id, company_name, role, location, stipend, no_of_rounds, no_of_people_selected, duration_of_aptitude)
    post = await post.save()
    console.log(post)
    res.send("Create New Post Route")
}

exports.getPostByIdCompany = async (req, res, next) => {
    res.send("Get post by id")

}

// for adding interview experience records
exports.getAllPostsInterviewExperience = async (req, res, next) => {
    res.send("Get all the posts")
}

exports.createNewPostInterviewExperience = async (req, res, next) => {
    let { mis, company_id, interview_rating, overall_experience, result } = req.body
    let post = new PostInterviewExperience(mis, company_id, interview_rating, overall_experience, result)
    post = await post.save()
    console.log(post)
    res.send("Create New Post Route")
}

exports.getPostByIdInterviewExperience = async (req, res, next) => {
    res.send("Get post by id")

}
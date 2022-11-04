const PostStudent = require("./Post")
exports.getAllPosts = async (req, res, next) => {
    res.send("Get all the posts")
}

exports.createNewPost = async (req, res, next) => {
    let { mis, first_name, last_name, email_id } = req.body
    let post = new PostStudent(mis, first_name, last_name, email_id)
    post = await post.save()
    console.log(post)
    res.send("Create New Post Route")
}

exports.getPostById = async (req, res, next) => {
    res.send("Get post by id")

}
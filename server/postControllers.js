const { execute } = require("./db")
const { PostStudent, PostCompany, PostInterviewExperience, PostQuestions, DoubtQuestions, Answers, StudentLogin} = require("./Post")

exports.getAllStudentPasswords = async (req, res, next) => {
    let ans=await StudentLogin.findAll();
    console.log(ans)
    res.send(ans);
}

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

// for adding questions records
exports.getAllPostsQuestions = async (req, res, next) => {
    res.send("Get all the posts")
}

exports.createNewPostQuestions = async (req, res, next) => {
    let { question_tag, mis, question_description, company_id } = req.body
    let post = new PostQuestions(question_tag, mis, question_description, company_id)
    post = await post.save()
    console.log(post)
    res.send("Create New Post Route")
}

exports.getPostByIdQuestions = async (req, res, next) => {
    res.send("Get post by id")
}


exports.getAllDoubts=async(req,res,next)=>{
    let doubt= await DoubtQuestions.findAll();
    console.log(doubt);
    res.send(doubt) ;

}

exports.createNewDoubt=async(req,res,next)=>{
    let {mis,company_id,doubt}=req.body;
    let post=new DoubtQuestions(mis,company_id,doubt);
    post= await post.save();
    console.log(post);
    res.send(post)
}

exports.getAllAns= async(req,res,next)=>{
    let id=req.params.id;
    let ans=await Answers.findAll(id);
    res.send(ans);
}

exports.createNewAns = async(req,res,next)=>{
    let id=req.params.id;
    try{
        let {doubt_id,mis,answer}=req.body;
        let post=new Answers(doubt_id,mis,answer);
        post= await post.save();
        console.log(post);
        res.send(post)
    }
    catch{
        res.send("Error in post")
    }
    // res.send("This is post requst");
}
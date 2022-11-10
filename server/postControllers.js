const { execute } = require("./db")
const { PostStudent, PostCompany, PostInterviewExperience, PostQuestions, DoubtQuestions, Answers, StudentLogin } = require("./Post")

exports.getAllStudentPasswords = async (req, res, next) => {
    let ans = await StudentLogin.findAll();
    console.log(ans)
    res.send(ans);
}
const { query } = require("./db")
const db = require("./db")
// const { PostStudent, PostCompany, PostInterviewExperience, PostQuestions, DoubtQuestions, Answers } = require("./Post")

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
    let company = await PostCompany.findCompanyName();
    console.log(company);
    res.send(company);
}

exports.getAllPostsCompanyDetails = async (req, res, next) => {
    let company = await PostCompany.findAll();
    console.log(company);
    res.send(company);
}

exports.createNewPostCompany = async (req, res, next) => {
    let { company_id, company_name, role, location, stipend, no_of_rounds, no_of_people_selected, duration_of_aptitude } = req.body
    let post = new PostCompany(company_id, company_name, role, location, stipend, no_of_rounds, no_of_people_selected, duration_of_aptitude)
    post = await post.save()
    console.log(post)
    res.send("Create New Post Route")
}

exports.getPostByMisCompany = async (req, res, next) => {
    let mis = req.params.mis;
    let company = await PostCompany.findAllByMis(mis);
    console.log(company);
    res.send(company);

}

// for adding interview experience records
exports.getAllPostsInterviewExperience = async (req, res, next) => {
    res.send("Get all the posts")
}

exports.createNewPostInterviewExperience = async (req, res, next) => {
    let { mis, overall_experience, interview_rating, verdict } = req.body
    let company_id = 0 // execute a query and get an ans; 
    let post = new PostInterviewExperience(mis, company_id, interview_rating, overall_experience, verdict)
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


exports.getAllDoubts = async (req, res, next) => {
    try {
        let doubt = await DoubtQuestions.findAll();
        // console.log(doubt);
        res.send(doubt);
    }
    catch {
        res.send({
            "doubt_id": "0",
            "mis": "0",
            "company_id": "0",
            "doubt": "0",
            "first_name": "0",
            "last_name": "0",
            "company_name": "0"
        });
    }

}

exports.createNewDoubt = async (req, res, next) => {
    // try {
    let { mis, company_name, doubt } = req.body;
    if (mis.substr(0, 4) != "1121") {
        return res.send({ status: "MIS invalid" });
    }
    let query = `select company_id from company where company_name="${company_name}";`
    const newPost = await db.execute(query);
    const company_id = newPost[0][0]["company_id"];
    let post = new DoubtQuestions(mis, company_id, doubt);
    post = await post.save();
    res.send({ status: "success" });
    // 
    // }
    // catch {
    //     res.send({ status: "Error" });
    // }
}

exports.getAllAns = async (req, res, next) => {
    try {
        let id = req.params.id;
        let ans = await Answers.findAll(id);
        res.send(ans);
    }
    catch {
        res.send({
            "doubt_id": "0",
            "company_id": "0",
            "mis": "0",
            "answer": "0",
            "first_name": "0",
            "last_name": "0",
            "company_name": "0"
        });

    }
}

exports.createNewAns = async (req, res, next) => {

    try {
        let { doubt_id, mis, answer } = req.body;
        if (mis.substr(0, 4) != "1120") {
            return res.send({ status: "MIS invalid" });
        }
        let query = `select company_id from doubt_forum where doubt_id="${doubt_id}" except select company_id from Interview_Experience where mis="${mis}"`;
        const [newPost, _] = await db.execute(query);
        if (newPost.length !== 0) {
            return res.send({ status: "MIS invalid" });
        }
        let post = new Answers(doubt_id, mis, answer);
        post = await post.save();
        res.send({ status: "success" });
    }
    catch {
        res.send({ status: "Error" });
    }
}

exports.getStudentDetails = async (req, res, next) => {
    let details= await PostStudent.findAllStudentwithInfo();
    console.log(details);
    res.send(details);




}
const db = require("./db")

class StudentLogin { 

    static async findAll() {
        let sql = `SELECT mis, email, password FROM Student_Password;`
        const [newPost, _] =await db.execute(sql);
        return newPost;
    }
}
class PostStudent {
    constructor(mis, first_name, last_name, email_id) {
        this.mis = mis;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email_id = email_id;
    }

    async save() {
        let sql = `
        INSERT INTO student VALUES(
            "${this.mis}",    
            "${this.first_name}",    
            "${this.last_name}",    
            "${this.email_id}"
        );
        `

        const [newPost, _] = await db.execute(sql)
        return newPost
    }

    static findAll() {
        let sql = "SELECT * FROM students;"
        return devicePixelRatio.execute(sql)
    }

}

class PostCompany {
    constructor(company_id, company_name, role, location, stipend, no_of_rounds, no_of_people_selected, duration_of_aptitude) {
        this.company_id = company_id;
        this.company_name = company_name;
        this.role = role;
        this.location = location;
        this.stipend = stipend;
        this.no_of_rounds = no_of_rounds;
        this.no_of_people_selected = no_of_people_selected;
        this.duration_of_aptitude = duration_of_aptitude;
    }

    async save() {
        let sql = `
        INSERT INTO company VALUES(
            ${this.company_id},    
            "${this.company_name}",    
            "${this.role}",    
            "${this.location}",
            "${this.stipend}",
            "${this.no_of_rounds}",
            "${this.no_of_people_selected}",
            "${this.duration_of_aptitude}"
        );
        `

        const [newPost, _] = await db.execute(sql)
        return newPost
    }

    static findAll() {
        let sql = "SELECT * FROM company;"
        return devicePixelRatio.execute(sql)
    }

}

class PostInterviewExperience {
    constructor(mis, company_id, interview_rating, overall_experience, result) {
        this.mis = mis;
        this.company_id = company_id;
        this.interview_rating = interview_rating;
        this.overall_experience = overall_experience;
        this.result = result;
    }

    async save() {
        let sql = `
        INSERT INTO interview_experience VALUES(
            "${this.mis}",    
            "${this.company_id}",    
            "${this.interview_rating}",    
            "${this.overall_experience}",
            "${this.result}"
        );
        `

        const [newPost, _] = await db.execute(sql)
        return newPost
    }

    static findAll() {
        let sql = "SELECT * FROM interview_experience;"
        return devicePixelRatio.execute(sql)
    }

}
class PostQuestions {

    constructor(question_tag, mis, question_description, company_id) {
        this.question_tag = question_tag;
        this.mis = mis;
        this.question_description = question_description;
        this.company_id = company_id;
    }

    async save() {
        let sql = ""
        if (this.question_tag == "dsa") {
            sql = `
            INSERT INTO dsa_questions VALUES(
                "${this.mis}",    
                "${this.question_description}",    
                "${this.company_id}"
            );
            `
        }
        else if (this.question_tag == "core") {
            sql = `
            INSERT INTO core_questions VALUES(
                "${this.mis}",    
                "${this.question_description}",    
                "${this.company_id}"
            );
            `
        }
        else {
            sql = `
            INSERT INTO hr_questions VALUES(
                "${this.mis}",    
                "${this.question_description}",    
                "${this.company_id}"
            );
            `
        }


        const [newPost, _] = await db.execute(sql)
        return newPost
    }

    static findAll() {
        let sql = ""
        if (this.question_tag == "dsa") {
            sql = `
            SELECT * FROM dsa_questions;
            `
        }
        else if (this.question_tag == "core") {
            sql = `
            SELECT * FROM core_questions;
            `
        }
        else {
            sql = `
            SELECT * FROM hr_questions;
            `
        }
        return devicePixelRatio.execute(sql)
    }

}


class DoubtQuestions {

    constructor(mis, company_id, doubt) {
        this.mis = mis;
        this.company_id = company_id;
        this.doubt=doubt
    }

    async save() {
            let sql = `
            INSERT INTO doubt_forum(mis,company_id,doubt) VALUES(
                "${this.mis}",    
                "${this.company_id}",    
                "${this.doubt}"
            );
            `
        const [newPost, _] = await db.execute(sql);
        return newPost;
    }

    static async findAll() {
        let sql = `SELECT Doubt_Forum.doubt_id,Doubt_Forum.mis,Doubt_Forum.company_id,Doubt_Forum.doubt,student.first_name,student.last_name,company.company_name FROM doubt_forum
                   JOIN student on Doubt_Forum.mis=student.mis JOIN company on Doubt_Forum.company_id=company.company_id`
         const [newPost, _] =await db.execute(sql);
         return newPost;
    }

}

class Answers {

    constructor(doubt_id, mis, ans) {
        this.doubt_id = doubt_id;
        this.mis = mis;
        this.ans=ans;
    }

    async save() {
            let sql = `
            INSERT INTO answers VALUES(
                "${this.doubt_id}",    
                "${this.mis}",    
                "${this.ans}"
            );
            `
        const [newPost, _] = await db.execute(sql);
        return newPost;
    }

    static async findAll(id) {
        let sql = `SELECT answers.doubt_id,Doubt_Forum.company_id,answers.mis,answers.answer,student.first_name,student.last_name,company.company_name FROM answers
                   JOIN student on answers.mis=student.mis JOIN Doubt_Forum on Doubt_Forum.doubt_id= answers.doubt_id JOIN company on company.company_id=Doubt_Forum.company_id
                   where answers.doubt_id="${id}";`
         const [newPost, _] =await db.execute(sql);
         return newPost;
    }

}


module.exports = { PostStudent, PostCompany, PostInterviewExperience, PostQuestions,DoubtQuestions,Answers, StudentLogin };
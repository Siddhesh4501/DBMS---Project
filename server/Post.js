const db = require("./db")

class StudentLogin {
    static async findAll() {
        let sql = `SELECT mis, email, password FROM Student_Password;`
        const [newPost, _] = await db.execute(sql);
        return newPost;
    }
}

class Interview_Experience {
    static async findAll() {
        let sql = `SELECT student.first_name, student.last_name, student.email_id,company.company_name, interview_experience.company_id,interview_experience.mis, interview_experience.interview_rating, interview_experience.overall_experience,interview_experience.verdict from interview_experience join company on interview_experience.company_id = company.company_id join student on interview_experience.mis = student.mis;`
        const [newPost, _] = await db.execute(sql);
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
    static async findAllStudentwithInfo() {
        let sql = `select student.mis,student.first_name,student.last_name,student.email_id,Interview_Experience.Company_id,company.Company_name,company.stipend 
        from student
        JOIN
        Interview_Experience ON student.mis=Interview_Experience.mis 
        JOIN
        company ON company.company_id=Interview_Experience.company_id 
        where Interview_Experience.verdict="selected";`;
        const [newPost, _] = await db.execute(sql);
        return newPost;
    }
}

class PostCompany {
    constructor(company_name, role, location, stipend, no_of_rounds, no_of_people_selected, duration_of_aptitude) {
        // console.log(company_name, role, location, stipend, no_of_rounds, no_of_people_selected, duration_of_aptitude)
        this.company_name = company_name;
        this.role = role;
        this.stipend = stipend;
        this.location = location;
        this.no_of_rounds = no_of_rounds;
        this.no_of_people_selected = no_of_people_selected;
        this.duration_of_aptitude = duration_of_aptitude;
    }

    async save() {
        let sql = `
        INSERT INTO company(company_name, role, location, stipend, no_of_rounds, no_of_people_selected, duration_of_aptitude) 
        VALUES("${this.company_name}",    
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

    static async findAll() {
        let sql = "SELECT * FROM company;"
        const [newPost, _] = await db.execute(sql);
        return newPost;
    }

    static async findAllByMis(mis) {
        let sql = `SELECT company_name from company 
                    JOIN interview_experience
                    ON interview_experience.company_id = company.company_id
                   where interview_experience.mis ="${mis}";`
        const [newPost, _] = await db.execute(sql);
        return newPost;
    }

    static async findCompanyName() {
        let sql = "SELECT company_name FROM company;"
        const [newPost, _] = await db.execute(sql);
        return newPost;
    }

}

class PostInterviewExperience {
    constructor(interview_rating, mis, company_name, overall_experience, verdict) {
        this.mis = mis;
        this.company_name = company_name;
        this.interview_rating = interview_rating;
        this.overall_experience = overall_experience;
        this.verdict = verdict;
    }

    async save() {


        let sql = `
        INSERT INTO interview_experience(interview_rating, mis, overall_experience, verdict, company_id)
            SELECT 
            "${this.interview_rating}",
            "${this.mis}",    
            "${this.overall_experience}",
            "${this.verdict}",
            company.company_id FROM company 
            WHERE company.company_name = "${this.company_name}"
        ;
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

    constructor(question_tag, mis, question_description, company_name) {
        this.question_tag = question_tag;
        this.mis = mis;
        this.question_description = question_description;
        this.company_name = company_name;
    }

    async save() {
        let sql = ""
        if (this.question_tag == "dsa") {
            sql = `
            INSERT INTO dsa_questions (mis, question_description, company_id)
            SELECT 
                "${this.mis}",    
                "${this.question_description}",    
                company.company_id FROM company 
                WHERE company.company_name = "${this.company_name}"
            ;
            `
        }
        else if (this.question_tag == "core") {
            sql = `
            INSERT INTO core_questions (mis, question_description, company_id)
            SELECT 
                "${this.mis}",    
                "${this.question_description}",    
                company.company_id FROM company 
                WHERE company.company_name = "${this.company_name}"
            ;
            `
        }
        else {
            sql = `
            INSERT INTO hr_questions (mis, question_description, company_id)
            SELECT 
                "${this.mis}",    
                "${this.question_description}",    
                company.company_id FROM company 
                WHERE company.company_name = "${this.company_name}"
            ;
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
        this.doubt = doubt
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
        const [newPost, _] = await db.execute(sql);
        return newPost;
    }

}

class Answers {

    constructor(doubt_id, mis, ans) {
        this.doubt_id = doubt_id;
        this.mis = mis;
        this.ans = ans;
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
        const [newPost, _] = await db.execute(sql);
        return newPost;
    }

}


module.exports = { PostStudent, PostCompany, PostInterviewExperience, PostQuestions, DoubtQuestions, Answers, StudentLogin, Interview_Experience };
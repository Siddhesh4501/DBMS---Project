const db = require("./db")
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
            ${this.mis},    
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
            ${this.mis},    
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

// module.exports = PostStudent;
module.exports = { PostStudent, PostCompany, PostInterviewExperience };
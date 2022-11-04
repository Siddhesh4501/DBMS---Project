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
        )
        `

        const [newPost, _] = await db.execute(sql)
        return newPost
    }

    static findAll() {
        let sql = "SELECT * FROM albums;"
        return devicePixelRatio.execute(sql)
    }

}

module.exports = PostStudent;
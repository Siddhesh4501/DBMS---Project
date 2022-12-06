const mysql = require("mysql2");
const db = mysql.createPool({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "coep@123",
    database: "internship",
});

module.exports = db.promise();

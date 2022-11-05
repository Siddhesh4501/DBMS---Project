const express = require("express");
const app = express();
const cors = require("cors");
const router = express.Router()

app.use(cors({
  origin: 'http://localhost:3000'
}));

// Middleware
app.use(express.json()); // parse json bodies in the request object

const mysql = require("mysql2");
const db = mysql.createPool({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "coep@123",
    database: "internship",
});
// Redirect requests to endpoint starting with /posts to postRoutes.js
app.use("/posts", require("./postRoutes"));

// filtering out questions based on company_name, tags(question,company_name), mis
let company_lst = ["BNY Mellon", "Deutsche bank"]
let company_str = '"' + company_lst.join('","') + '"';
let mis_lst = ["112003116", "112003112", "112003114"]
let mis_str = '"' + mis_lst.join('","') + '"';

let sql_dsa = `SELECT dsa_questions.question_description,student.first_name,company.company_name,"DSA" as Tag FROM dsa_questions
               JOIN company ON company.company_id = dsa_questions.company_id 
               JOIN student ON student.mis = dsa_questions.mis 
               WHERE company.company_name in (${company_str}) 
               AND 
               student.mis in (${mis_str});`

// let sql_core = `SELECT core_questions.question_description,student.first_name,company.company_name,"CORE" as Tag FROM core_questions
//                JOIN company ON company.company_id = core_questions.company_id 
//                JOIN student ON student.mis = core_questions.mis 
//                WHERE company.company_name in (${company_str}) 
//                AND 
//                student.mis in (${mis_str});`

// let sql_hr = `SELECT hr_questions.question_description,student.first_name,company.company_name,"HR" as Tag FROM hr_questions
//                JOIN company ON company.company_id = hr_questions.company_id 
//                JOIN student ON student.mis = hr_questions.mis 
//                WHERE company.company_name in (${company_str}) 
//                AND 
//                student.mis in (${mis_str});`

db.execute(sql_dsa, function (err, result) {
  if (err) throw err
  console.log(result)
  result.forEach(res => {
    console.log(res.title)
  })
})

// db.execute(sql_hr, function (err, result) {
//   if (err) throw err
//   console.log(result)
//   result.forEach(res => {
//     console.log(res.title)
//   })
// })

// db.execute(sql_core, function (err, result) {
//   if (err) throw err
//   console.log(result)
//   result.forEach(res => {
//     console.log(res.title)
//   })
// })

app.listen(3001, () => {
  console.log("✅ Server running on port: 3001");
});


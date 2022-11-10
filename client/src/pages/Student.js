import React from 'react';
import { useState, useEffect } from 'react';
import Main from '../layouts/Main';
import "./SeeAns.css"
let company_lst = []
const Student = (props) => {
    let [Student, setStudent] = useState([])

    // console.log(id);
    const getdata = async () => {
        let url = `http://localhost:3001/posts/getStudentDetails`;
        let data = await fetch(url);
        let parsedata = await data.json();
        setStudent(parsedata)
        // console.log(Student)
    }
    useEffect(() => {
        getdata();
    }, []);

    useEffect(() => {
        // console.log(Student);
    }, [Student]);

    return (
        <Main
            title="Stats"
            description="Some statistics about Michael D'Angelo and mldangelo.com"
        >
            {Student.map((ele) => {
                return <div className="content">
                    <div className="card">
                        <div className="firstinfo">
                            <div className="profileinfo">
                                <h3>{ele.first_name + " "+ ele.last_name}</h3>
                                <h4>MIS: {ele.mis}</h4>
                                <h4>Email Id: {ele.email_id}</h4>
                                <h4>Selected: {ele.Company_name}</h4>
                                <h4>Stipend: ₹{ele.stipend}</h4>
                            </div>
                        </div>
                    </div>
                </div>

            })}
        </Main>)
};

export default Student;